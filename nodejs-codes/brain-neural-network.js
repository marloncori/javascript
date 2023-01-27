
const _ = require("underscore")
const Writable = require("stream").Writable
const TrainStream = require("./brain-trainstream")
const lookup = require("./lookup")
const numpy = require("./numpy")

class NeuralNetwork {
     constructor(options){
       this.opts = options || {}
       this.learningRate = this.opts.learningRate || 0.3
       this.momentum = this.opts.momentum || 0.1
       this.hiddenSizes = this.opts.hiddenLayers || 3
       this.errorThresh = this.opts.errorThresh || 0.006
       this.binaryThresh = this.opts.binaryThresh || 0.5

       this.inputLookup = undefined
       this.outputLookup = undefined
       this.inputKeys = []
       this.outputKeys = []
       this.trainStream = undefined
       this.np = new numpy()
    }

    initialize(sizes) {
       this.sizes = sizes
       this.outputLayer = this.sizes.length - 1
       this.biases = [] // weights for bias nodes
       this.weights = []
       this.outputs = []

       // state for training
       this.deltas = []
       this.changes = [] // for momentum
       this.errors = []
        for(let layer=0; layer<=this.outputLayer; layer++){
            const size = this.sizes[layer]
            this.deltas[layer] = this.np.zeros(size)
            this.errors[layer] = this.np.zeros(size)
            this.outputs[layer] = this.np.zeros(size)

            if(layer > 0) {
                this.biases[layer] = this.np.randos(size)
                this.weights[layer] = new Array(size)
                this.changes[layer] = new Array(size)
                for(let node=0; node < size; node++){
                    const prevSize = this.sizes[layer - 1]
                    this.weights[layer][node] = this.np.randos(prevSize)
                    this.changes[layer][node] = this.np.zeros(prevSize)
                }
            }
        }
     }

    run(input){
        this.inputKeys = _.union(this.inputKeys, _.keys(input))
        this.inputLookup = lookup.lookupFromArray(this.inputKeys)
        if(this.inputLookup){
            input = lookup.toArray(this.inputLookup, input)
        }
        let output = this.runInput(input)

        this.outputKeys = _.union(this.outputKeys, _.keys(output))
        this.outputLookup = lookup.lookupFromArray(this.outputKeys)

        if(this.outputLookup){
            output = lookup.toArray(this.outputLookup, output)
        }
      return output
    }

    runInput(input) {
        this.outputs[0] = input // set output state of input layer
        for(let layer = 1; layer<=this.outputLayer; layer++){
            for(let node = 0; node<this.sizes[layer]; node++){
                let weights = this.weights[layer][node]
                let sum = this.biases[layer][node]
                for(let k=0; k<weights.length; k++){
                    sum += weights[k] * input[k]
                }
                this.outputs[layer][node] = this.np.sigmoid(sum)
            }
            input = this.outputs[layer]
        }
        return input
    }

    train(data, options){
        const formattedData = this.formatInputData(data)
        const opt = options || {}
        const iteractions = opt.iteractions || 60000
        const errorThresh = opt.errorThresh || 0.005
        const log = opt.log ? (_.isFunction(opt.log) ? opt.log : console.log) : false
        const logPeriod = opt.logPeriod || 10
        const learningRate = opt.learningRate || this.learningRate || 0.3
        const callback = opt.callback
        const callbackPeriod = opt.callbackPeriod || 10

        const inputSize = formattedData[0].input.length
        const outputSize = formattedData[0].output.length

        let hiddenSizes = this.hiddenSizes
        if(!hiddenSizes){
            hiddenSizes = [Math.max(3, Math.floor(inputSize / 2))]
        }
        const sizes = _([inputSize, hiddenSizes, outputSize]).flatten()
        this.initialize(sizes)

        let error = 1
        let neededIter = 0
        for(let i=0; i<iteractions && error > errorThresh; i++){
            let sum = 0
             for(let j=0; j<formattedData.length; j++){
                 const err = this.trainPattern(formattedData[j].input,
                     formattedData[j].output, learningRate)
                 sum += err
             }
             error = sum / formattedData.length
             if(i % 27 == 0){
                 console.log(`\n\t >>> iteractions: ${i}\n\t >>> training error: ${error}`)
             }
             neededIter++
        } 
        return {
          error: error,
          iterations: neededIter
      }
    }

    trainPattern(input, target, learningRate){
         const eta = learningRate || this.learningRate
         //forward propagation
         this.runInput(input)

         //backward propagation
         this.calculateDeltas(target)
         this.adjustWeights(eta)

        const error = this.np.mse(this.errors[this.outputLayer])
        return error
    }

    calculateDeltas(target){
        for(let layer=this.outputLayer; layer>=0; layer--){
            for(let node=0; node<this.sizes[layer]; node++){
                const output = this.outputs[layer][node]
                let error = 0
                if(layer == this.outputLayer){
                    error = target[node] - output
                }
                else {
                    const deltas = this.deltas[layer+1]
                    for(let k=0; k<deltas.length; k++){
                        error += deltas[k] * this.weights[layer+1][k][node]
                    }
                }
                this.errors[layer][node] = error
                this.deltas[layer][node] = error * output * (1 - output)
            }
        }
    }

    adjustWeights(eta){
        for(let layer=1; layer<=this.outputLayer; layer++){
            const incoming = this.outputs[layer - 1]
            for(let node=0; node<this.sizes[layer]; node++){
                const delta = this.deltas[layer][node]

                for(let k=0; k<incoming.length; k++){
                    let change = this.changes[layer][node][k]
                    change = ( eta * delta * incoming[k]) + (this.momentum * change)
                    
                    this.changes[layer][node][k] = change
                    this.weights[layer][node][k] += change
                }
                this.biases[layer][node] += eta * delta
            }
        }
    }

    formatInputData(data) {
        if(!_.isArray(data)){ //turn stream datum into array
            let temp = []
            temp.push(data)
            data = temp
        }
        // turn sparse hash input into arrays with 0s as filter
        let datum = data[0].input
        if(!_(datum).isArray() && !(datum instanceof Float64Array)){
            if(!this.inputLookup){
                this.inputLookup = lookup.buildLookup(_(data).pluck("input"))
            }
        }
        data = data.map( (datum) => {
            let array = lookup.toArray(this.inputLookup, datum.input)
            return _(_(datum).clone()).extend({ input: array })
        }, this)
    if(!_(data[0].output).isArray()) {
        if (!this.outputLookup) {
           this.outputLookup = lookup.buildLookup(_(data).pluck("output"))
        }
        data = data.map( (datum) => {
          let array = lookup.toArray(this.outputLookup, datum.output)
          return _(_(datum).clone()).extend({ output: array })
        }, this)
      }
      return data
   }

   test(data) {
      const formattedData = this.formatInputData(data)
     // for binary classification problems with one output node
     const isBinary = data[0].output.length == 1
      let falsePos = 0
      let falseNeg = 0
      let truePos = 0
      let trueNeg = 0

    // for classification problems
      let misclasses = []

    // run each pattern through the trained network and 
    // collect both error and misclassification statistics
    let sum = 0 
    for(let i=0; i<formattedData.length; i++){
        const output = this.runInput(formattedData[i].input)
        const target = formattedData[i].ouput

        let actual, expected
        if(isBinary){
            actual = output[0] > this.binaryThresh ? 1 : 0
            expected = target[0]
        }
        else {
            actual = output.indexOf(_(ouput).max())
            expected = target.indexOf(_(ouput).max())
        }

        if(actual != expected){
            const misclass = formattedData[i]
            _(misclass).extend({
                actual: actual,
                expected: expected
            })
            misclasses.push(misclass)
        }

        if (isBinary) {
            if (actual == 0 && expected == 0) {
               trueNeg++
            }
            else if (actual == 1 && expected == 1) {
               truePos++
            }
            else if (actual == 0 && expected == 1) {
               falseNeg++
            }
            else if (actual == 1 && expected == 0) {
               falsePos++
            }
        }
        const errors = output.map( (value, i) => {
            return target[i] - value
        })
        sum += numpy.mse(errors)
     }
     const error = sum / formattedData.length

     const stats = {
         error: error,
         misclasses: misclasses
     }
     
     if (isBinary) {
        _(stats).extend({
          trueNeg: trueNeg,
          truePos: truePos,
          falseNeg: falseNeg,
          falsePos: falsePos,
          total: formattedData.length,
          precision: truePos / (truePos + falsePos),
          recall: truePos / (truePos + falseNeg),
          accuracy: (trueNeg + truePos) / formattedData.length
        })
      }
      return stats
   }

   toJSON(){
    /* makes json look like this:
      {
        layers: [
          { x: {},
            y: {}},
          {'0': {bias: -0.98771313, weights: {x: 0.8374838, y: 1.245858},
           '1': {bias: 3.48192004, weights: {x: 1.7825821, y: -2.67899}}},
          { f: {bias: 0.27205739, weights: {'0': 1.3161821, '1': 2.00436}}}
        ]
      }
    */
      let layers = []
      for(let layer=0; layer <= this.outputLayer; layer++) {
        layers[layer] = {}
  
        let nodes
        // turn any internal arrays back into hashes for readable json
        if (layer == 0 && this.inputLookup){
          nodes = _(this.inputLookup).keys()
        }
        else if (layer == this.outputLayer && this.outputLookup){
          nodes = _(this.outputLookup).keys()
        }
        else {
          nodes = _.range(0, this.sizes[layer])
        }
  
        for(let j = 0; j < nodes.length; j++) {
          const node = nodes[j]
          layers[layer][node] = {}
  
          if (layer > 0) {
            layers[layer][node].bias = this.biases[layer][j]
            layers[layer][node].weights = {}
            for(let k in layers[layer - 1]) {
              let index = k;
              if (layer == 1 && this.inputLookup) {
                index = this.inputLookup[k]
              }
              layers[layer][node].weights[k] = this.weights[layer][j][index]
            }
          }
        }
      }
      return { layers: layers, outputLookup:!!this.outputLookup, inputLookup:!!this.inputLookup }
   }

   fromJSON(json) {
     let size = json.layers.length
     this.outputLayer = size - 1
    
     this.sizes = new Array(size);
     this.weights = new Array(size);
     this.biases = new Array(size);
     this.outputs = new Array(size);
    
     for (let i = 0; i <= this.outputLayer; i++) {
        let layer = json.layers[i]
        if(i == 0 && (!layer[0] || json.inputLookup)) {
          this.inputLookup = lookup.lookupFromHash(layer);
        }
        else if (i == this.outputLayer && (!layer[0] || json.outputLookup)) {
          this.outputLookup = lookup.lookupFromHash(layer)
        }
    
        let nodes = _(layer).keys()
          this.sizes[i] = nodes.length
          this.weights[i] = []
          this.biases[i] = []
          this.outputs[i] = []
    
        for(const j in nodes) {
            const node = nodes[j]
            this.biases[i][j] = layer[node].bias;
            this.weights[i][j] = _(layer[node].weights).toArray()
          }
        }
     return this
   }

   toFunction(){
     let json = this.toJSON()
     // return standalone function that mimics run()
    return new Function("input",
     '  let net = ' + JSON.stringify(json) + ';\n\n\
    for(let i = 1; i < net.layers.length; i++) {\n\
       let layer = net.layers[i];\n\
       let output = {};\n\
       \n\
    for(let id in layer) {\n\
       let node = layer[id];\n\
       let sum = node.bias;\n\
      \n\
      for(let iid in node.weights) {\n\
        sum += node.weights[iid] * input[iid];\n\
      }\n\
      output[id] = (1 / (1 + Math.exp(-sum)));\n\
    }\n\
    input = output;\n\
  }\n\
  return output;')
  }
  // This will create a TrainStream (WriteStream)
  //  for us to send the training data to.
  //  param: opts - the training options
 createTrainStream(opts){
    opts = opts || {};
    opts.neuralNetwork = this
    this.trainStream = new TrainStream(opts)
    return this.trainStream
  }
}
  
module.exports = NeuralNetwork






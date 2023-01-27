const print = require('./print')

// data [x, y]
// datapoints N=6 (rows)
//features D=2 (x, y)
/*vector -> label
---------------
[1.2, 0.7] -> +1
[-0.3, 0.5] -> -1
[-3, -1] -> +1
[0.1, 1.0] -> -1
[3.0, 1.1] -> -1
[2.1, -3] -> +1*/

const str = (w) => {
    return JSON.stringify(w)
}

class Unit { 
    constructor(value, gradient) {
        this.value = value
        this.gradient = gradient
    }
}

// a class
class multiplyGate {
    constructor(){
        this.utop = 0
    }
    forward(u0, u1) {
         //store pointers to input units u0, u1 and output utop
         this.utop = new Unit(u0.value * u1.value, 0.0)
         return this.utop
     }
     // take the gradient in output unit and chain it with the
     // local gradients, which we derived for multiply gate before
     // then write those gradients to those Units.
     backward(u0, u1, utop){
         this.utop = utop
         u0.gradient += u1.value * this.utop.gradient
         u1.gradient += u0.value * this.utop.gradient
         return [u0, u1]
     }
}

// a class
class addGate {
    constructor(){
        this.utop = 0
    }
    forward(u0, u1){
         //store pointers to input units u0, u1 and output utop
         this.utop = new Unit(u0.value + u1.value, 0.0)
         return this.utop
     }
     // take the gradient in output unit and chain it with the
     // local gradients, which we derived for multiply gate before
     // then write those gradients to those Units.
     backward(u0, u1, utop){
         this.utop = utop
         u0.gradient += 1 * this.utop.gradient
         u1.gradient += 1 * this.utop.gradient
         return [u0, u1]
     }
 }

/*const supporting_vector_machine = (x_train, y_train) => {
    const a = 1.0, b = -2.0, c = -1.0
    let f_xy = (a*x_train) + (b*y_train) + c
    return f_xy
}

const prediction = supporting_vector_machine(-0.3, 0.5)
console.log(" prediction: " + prediction.toString())*/

 //create the gates
 class Circuit {
     constructor(a, b, c){
        this.a = a, this.b = b, this.c = c
        this.ax = 0, this.by = 0, this.x = 0, this.y = 0
        this.axpby = 0, this.axpbypc = 0
        this.mulg0 = new multiplyGate()
        this.mulg1 = new multiplyGate()
        this.addg0 = new addGate()
        this.addg1 = new addGate()
        
     }

     forward(x, y) {
        this.x = x, this.y = y
        this.ax = this.mulg0.forward(this.a, x) 
        this.by = this.mulg1.forward(this.b, y) 
        this.axpby = this.addg0.forward(this.ax, this.by)
        this.axpbypc = this.addg1.forward(this.axpby, this.c)
        return this.axpbypc
      }

      backward(gradient_top) {
        this.axpbypc.gradient = gradient_top
        let [n_axpby, n_c] = this.addg1.backward(this.axpby, this.c, this.axpbypc)
        this.axpby.gradient = n_axpby.gradient
        let [n_ax, n_by] = this.addg0.backward(this.ax, this.by, this.axpby)
        this.by.gradient = n_by.gradient
        let [n_b, n_y] = this.mulg1.backward(this.b, this.y, this.by)
        this.ax.gradient = n_ax.gradient
        let [n_a, n_x] = this.mulg0.backward(this.a, this.x, this.ax)
        
        this.a.gradient = n_a.gradient
        this.b.gradient = n_b.gradient
        this.c.gradient = n_c.gradient
        this.x.gradient = n_x.gradient    
        this.y.gradient = n_y.gradient             
      }
 }
 
 class SupportingVectorMachine {
     constructor() {
         //create input units
        this.a = new Unit(1.0, 0.0)
        this.b = new Unit(2.0, 0.0)
        this.c = new Unit(-1.0, 0.0)
        this.circuit = new Circuit(this.a, this.b, this.c)
        this.unit_out = 0
     }

     forward(x, y){
        this.unit_out = this.circuit.forward(x, y)
        return this.unit_out
     }
     backward(label){
          // reset pulls on a,b,c
         this.a.gradient = 0.0 
         this.b.gradient = 0.0 
         this.c.gradient = 0.0
        // compute the pull based on what 
        // the circuit output was
        let pull = 0.0
        if(label === 1 && this.unit_out.value < 1) { 
            pull = 1 // the score was too low: pull up
        }
        if(label === -1 && this.unit_out.value > -1) {
            pull = -1 // the score was too high 
            // for a positive example, pull down
        }
        this.circuit.backward(pull) 
        // writes gradient into x,y,a,b,c
        // add regularization pull for parameters: 
        // towards zero and proportional to value
        this.a.gradient += -this.a.value
        this.b.gradient += -this.b.value
     }

     parameterUpdate(){
        const step_size = 0.01
        this.a.value += step_size * this.a.gradient
        this.b.value += step_size * this.b.gradient
        this.c.value += step_size * this.c.gradient
     }

     learnFrom(x, y, label){
        this.forward(x, y)
        this.backward(label)
        this.parameterUpdate()
     }
 }

 const data = [
    [1.2, 0.7],
    [-0.3, -0.5],
    [3.0, 0.1],
    [-0.1, -1.0],
    [-1.0, 1.1],
    [2.1, -3.0]
]

const labels = [
    1,
    -1,
    1,
    -1,
    -1,
    1
]

const svm = new SupportingVectorMachine()

// a function that computes the classification accuracy
const evalTrainingAccuracy = (data, labels) => {
    let num_correct = 0
    for(let i=0; i<data.length; i++){
        let X = new Unit(data[i][0], 0.0)
        let Y = new Unit(data[i][0], 0.0)
        let true_label = labels[i]
        // see if the prediction matches the provided label
        let predicted_label = 
            svm.forward(X, Y).value > 0 ? 1 : -1
        if(predicted_label === true_label){
            num_correct++
        }
    }
    return num_correct / data.length
}

const my_labels = [
    1,
    -1,
    1,
    -1,
    -1,
    1
]
// the learning loop
for(let iter = 0; iter < 400; iter++) {
    // pick a random data point
    let i = Math.floor(Math.random() * data.length)
    let train_x = new Unit(data[i][0], 0.0)
    let train_y = new Unit(data[i][1], 0.0)
    let label = my_labels[i]
    svm.learnFrom(train_x, train_y, label)
  
    if(iter % 25 == 0) { // every 10 iterations... 
      console.log(' >>> Training accuracy at iter: \n\t' + iter + ': ' + evalTrainingAccuracy(data, my_labels))
    }
}

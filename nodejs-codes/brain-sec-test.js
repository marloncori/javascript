


const NeuralNetwork = require('./brain-neural-network')
const print = require('./print')
const _ = require('underscore')

const OPTIONS = {
    iteractions: 20000,
    errorThresh: 0.0003,
    log: print,
    logPeriod: 15,
    learningRate: 0.4,
    hiddenLayers: [3, 4],
    callback: undefined,
    callbackPeriod: 8
}

const OPTIONS_2 = {
    iteractions: 10000,
    errorThresh: 0.0004,
    log: print,
    logPeriod: 10,
    learningRate: 0.1,
    hiddenLayers: [3],
    callback: undefined,
    callbackPeriod: 8
}

const net = new NeuralNetwork(OPTIONS);

net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
    {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
    {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]
);

const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }
let out = net.toJSON(output)

print("\t prediction: " + JSON.stringify(out));

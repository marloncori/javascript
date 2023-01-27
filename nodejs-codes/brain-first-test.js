//https://github.com/harthur/brain

const NeuralNetwork = require('./brain-neural-network')
const print = require('./print')
const _ = require('underscore')

const OPTIONS = {
    iteractions: 30000,
    errorThresh: 0.0003,
    log: true,
    logPeriod: 15,
    learningRate: 0.4,
    hiddenLayers: [3],
    callback: undefined,
    callbackPeriod: 8
}

const OPTIONS_2 = {
    iteractions: 100000,
    errorThresh: 0.003,
    log: true,
    logPeriod: 10,
    learningRate: 0.2,
    hiddenLayers: [8, 7],
    callback: undefined,
    callbackPeriod: 8
}

const net = new NeuralNetwork(OPTIONS_2);
net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]},
           {input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}],
           OPTIONS_2
        );

const output = net.run([1, 0]);
 // it should be // [0.987], but I am getting [0.49] - [0.51]
  // all the time

let out = net.toJSON(output)

print("\t prediction: " + JSON.stringify(out));
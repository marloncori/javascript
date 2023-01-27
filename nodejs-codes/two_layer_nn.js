
// assume inputs x,y
/*const n1 = Math.max(0, a1*x + b1*y + c1); // activation of 1st hidden neuron
const n2 = Math.max(0, a2*x + b2*y + c2); // 2nd neuron
const n3 = Math.max(0, a3*x + b3*y + c3); // 3rd neuron
const score = a4*n1 + b4*n2 + c4*n3 + d4; // the score*/

const TwoLayerNeuralNetwork = (data, labels) => {
// random initial parameters
    let a1 = Math.random() - 0.5; // a random number between -0.5 and 0.5
    // ... similarly initialize all other parameters to randoms
    let b1 = Math.random() - 0.5;
    let c1 = Math.random() - 0.5;

    let a2 = Math.random() - 0.5;
    let b2 = Math.random() - 0.5;
    let c2 = Math.random() - 0.5;

    let a3 = Math.random() - 0.5;
    let b3 = Math.random() - 0.5;
    let c3 = Math.random() - 0.5;

    let a4 = Math.random() - 0.5;
    let b4 = Math.random() - 0.5;
    let c4 = Math.random() - 0.5;
    let d4 = Math.random() - 0.5;

    for(let iter = 0; iter < 400; iter++) {
  // pick a random data point
        let i = Math.floor(Math.random() * data.length);
        let x = data[i][0];
        let y = data[i][1];
        let label = labels[i];

        // compute forward pass
        let n1 = Math.max(0, a1*x + b1*y + c1); // activation of 1st hidden neuron
        let n2 = Math.max(0, a2*x + b2*y + c2); // 2nd neuron
        let n3 = Math.max(0, a3*x + b3*y + c3); // 3rd neuron
        let score = a4*n1 + b4*n2 + c4*n3 + d4; // the score

        // compute the pull on top
        let pull = 0.0;
        if(label === 1 && score < 1) pull = 1; // we want higher output! Pull up.
        if(label === -1 && score > -1) pull = -1; // we want lower output! Pull down.

  // now compute backward pass to all parameters of the model

  // backprop through the last "score" neuron
    let dscore = pull;
    let da4 = n1 * dscore;
    let dn1 = a4 * dscore;
    let db4 = n2 * dscore;
    let dn2 = b4 * dscore;
    let dc4 = n3 * dscore;
    let dn3 = c4 * dscore;
    let dd4 = 1.0 * dscore; // phew

  // backprop the ReLU non-linearities, in place
  // i.e. just set gradients to zero if the neurons did not "fire"
    dn3 = n3 === 0 ? 0 : dn3;
    dn2 = n2 === 0 ? 0 : dn2;
    dn1 = n1 === 0 ? 0 : dn1;

  // backprop to parameters of neuron 1
    let da1 = x * dn1;
    let db1 = y * dn1;
    let dc1 = 1.0 * dn1;
  
  // backprop to parameters of neuron 2
    let da2 = x * dn2;
    let db2 = y * dn2;
    let dc2 = 1.0 * dn2;

  // backprop to parameters of neuron 3
    let da3 = x * dn3;
    let db3 = y * dn3;
    let dc3 = 1.0 * dn3;

  // phew! End of backprop!
  // note we could have also backpropped into x,y
  // but we do not need these gradients. We only use the gradients
  // on our parameters in the parameter update, and we discard x,y

  // add the pulls from the regularization, tugging all multiplicative
  // parameters (i.e. not the biases) downward, proportional to their value
    da1 += -a1; da2 += -a2; da3 += -a3;
    db1 += -b1; db2 += -b2; db3 += -b3;
    da4 += -a4; db4 += -b4; dc4 += -c4;

  // finally, do the parameter update
        let step_size = 0.01;
        a1 += step_size * da1; 
        b1 += step_size * db1; 
        c1 += step_size * dc1;
        a2 += step_size * da2; 
        b2 += step_size * db2;
        c2 += step_size * dc2;
        a3 += step_size * da3; 
        b3 += step_size * db3; 
        c3 += step_size * dc3;
        a4 += step_size * da4; 
        b4 += step_size * db4; 
        c4 += step_size * dc4; 
        d4 += step_size * dd4;
  // wow this is tedious, please use for loops in prod.
  // we're done!
     if(iter % 25 == 0) {
       console.log(` Params:\n\t
        a1 = ${a1}\n\t
        b1 = ${b1}\n\t
        c1 = ${c1}\n\t
        a2 = ${a2}\n\t 
        b2 = ${b2}\n\t
        c2 = ${c2}\n\t
        a3 = ${a3}\n\t 
        b3 = ${b3}\n\t 
        c3 = ${c3}\n\t 
        a4 = ${a4}\n\t  
        b4 = ${b4}\n\t  
        c4 = ${c4}\n\t 
        d4 = ${d4}\n` 
       )
     }
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

TwoLayerNeuralNetwork(data, labels);

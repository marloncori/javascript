const print = require('./print')

const inputs = [
    [1.2, 0.7],
    [-0.3, 0.5],
    [3.0, 2.5]
]

const labels = [
    1, -1, 1
]

const weights = [
    0.1, 0.2, 0.3
]

let alpha = 0.1 // regularization strength

const calc_cost = (x, y, w, alpha) => {
    let total_cost = 0.0; // L, in SVM loss function
    let N = x.length;
    print('\t COST FUNCTION PROGRAM')
    for(let i=0; i<N; i++){
        // loop over all data points and compute their score
        let x_i = x[i];
        let score = w[0] * x_i[0] + w[1] * x_i[1] + w[2];
        // accumulate cost based on how compatible 
        // the score is with the label
        let y_i = y[i];
        let cost_i = Math.max(0, -y_i * score + 1);
        console.log('\n\t >>> Example ' + i + ': xi = (' + x_i + ') and label = ' + y_i);
        console.log('\t  Score computed to be ' + score.toFixed(3));
        console.log('\t  => Cost computed to be ' + cost_i.toFixed(3) + '\n');
        total_cost += cost_i;
        
    }
    let reg_cost = alpha * (w[0] * w[0] + w[1] + w[1]);
    console.log('\t --> Regularization cost for current model is ' + reg_cost.toFixed(3));
    total_cost += reg_cost;

    console.log('\t --> Total cost is ' + total_cost.toFixed(3));
  return total_cost;
}

try{
    const COST = calc_cost(inputs, labels, weights, alpha);
    print("\n\t >>>> cost function result: " + COST.toString());
} catch(error){
    console.error(error);
}
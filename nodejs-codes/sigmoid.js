
const sigmoid = (x) => {
    return 1.0 / (1.0 + Math.exp(-x))
}

const sigmoid_gradient = (x) => {
    let dx = sigmoid(x) * (1 - sigmoid(x))
    return dx
}

module.exports = sigmoid
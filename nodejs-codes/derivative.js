
const deriv = (x) => {
    const h = 0.0001
    const dx = (x+h) - x / h
    return dx
}

module.exports = deriv
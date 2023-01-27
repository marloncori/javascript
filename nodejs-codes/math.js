
const Math = {
    num1: undefined,
    num2: undefined,

    setX: (value) => {
        this.num1 = value
    },

    setY: (value) => {
        this.num2 = value
    },

    add: () => {
        return this.num1 + this.num2
    },

    subt: () => {
        return this.num1 - this.num2
    },

    div: () => {
        if (this.num1 === 0 || this.num2 === 0) {
            console.error('ZeroDivsionError = not possible to divide by zero!')
            return 
        }
        return this.num1 / this.num2
    },

    mult: () => {
        return this.num1 * this.num2
    },

    mod: () => {
        return this.num1 % this.num2
    },

 }

module.exports = Math
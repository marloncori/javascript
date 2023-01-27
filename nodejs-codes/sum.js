
const notAdd = (a, b) => {
    return a + b
}
const add = (a, b) => {
    if (typeof a !== "number")
        a = +a
    if (typeof b !== "number")
        b = +b
    return a + b
}

const showResult = (x, y, flag) => {
    if (flag)
       console.log(`\n\t The sum is: ${add(x,y)}`)
    else
        console.log(`\n\t The sum is: ${notAdd(x,y)}`)
}

let num1 = '12'
let num2 = ' 74'

const logic = [false, true]
console.log("\n\n\t Program execution is starting...")

for (const v of logic) {
    showResult(num1, num2, v)
    num1 = +num1
    num2 = +num2
}

console.log("\n\n\t Program execution has finished.")
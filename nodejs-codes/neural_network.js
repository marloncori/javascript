const print = require('./print')

const forwardMultiplyGate = (x, y) => {
    return x * y
}

// simple circuit with one gate
print(forwardMultiplyGate(
    x = -2.0, y = 3.0) // -6
)

// improvement of 0.05
print(forwardMultiplyGate(
    x = -1.99, y = 2.99) // -5.95
)

let input_x = -2, input_y = 3
const tweak_amount = 0.01

let best_out = -Infinity
let best_x = x, best_y = y

for(let k = 0; k < 100; k++){
    let x_try = input_x + tweak_amount * (Math.random() * 2 - 1)
    let y_try = input_y + tweak_amount * (Math.random() * 2 - 1)
    const output = forwardMultiplyGate(x_try, y_try)
    if(output > best_out){
        // best improvemente yet, keep track of the x and the y
        best_out = output, best_x = x_try, best_y = y_try
        print("  Best_out = " + best_out.toString() 
            + "\n\t Best_x = " + best_x.toString()
             + "\n\t Best_y = " + best_y.toString()
        )        
    }
}

//calculate derivative which is a force needed to improve
// the output --> df(x,y)/dx = f(x+h,y) - f(x,y) / h
let new_x = -2, new_y = 3
let output1 = forwardMultiplyGate(new_x, new_y) // - 6
print(`\t output1 = ${output1}`)
const h = 0.0001 // or 0.00001

const xph = new_x + h
print(`\t xph = ${xph}`)
let output_xph = forwardMultiplyGate(xph, new_y) // -5.9997
print(`\t output_xph = ${output_xph}`)
const x_derivative = (output_xph - output1) / h // 3.0
print(`\t x_derivative = ${x_derivative}`)

//derivative with respect to y
const yph = new_y + h // 3.0001
print(`\t yph = ${yph}`)
let output_yph = forwardMultiplyGate(new_x, yph) // -6.0002
print(`\t output_yph = ${output_yph}`)
const y_derivative = (output_yph - output1) / h // -2.0
print(`\t y_derivative = ${y_derivative}`)

const step_size = 0.01
out = forwardMultiplyGate(new_x, new_y)
new_x = new_x + step_size * x_derivative // -1.97
print(`\t x * x_derivative = ${new_x}`)
new_y = new_y  + step_size * y_derivative // +2.98
print(`\t y * y_derivative = ${new_y}`)
const new_out = forwardMultiplyGate(new_x, new_y)
print(`\t new_output = ${new_out}`) // -5.87, exciting! > -6.0

let x_again = -2, y_again = 3
new_output = forwardMultiplyGate(x_again, y_again)
const x_gradient = y_again
const y_gradient = x_again

const new_stepsize = 0.01
x_again += new_stepsize * x_gradient
print(`\t x_again = ${x_again}`) // -1.97
y_again += new_stepsize * y_gradient
print(`\t y_again = ${y_again}`) // 2.98
new_output = forwardMultiplyGate(x_again, y_again)
print(`\t new_output = ${new_output}`) // -5.87 > -6.0

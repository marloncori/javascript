// building a neural network
const print = require('./print')

assert_eq = (a, b) => {
    if(a !== b){
        print(" Analytic gradient equals\n numeric gradient! \n >> value: " + a.toString())
    } else {
        print(" Analytic gradient is \n different numeric gradient...")
    }
}

forwardMultiplyGate = (a, b) => { 
    return a * b
}
forwardAddGate = (a, b) => { 
    return a + b
} 
forwardCircuit = (a, b, c) => { 
    let q = forwardAddGate(a, b)
    let f = forwardMultiplyGate(q, c)
    return f
}

let x = -2, y = 5, z = -4
const qf = forwardCircuit(x, y, z)
print(` f = ${qf}`)

let q = forwardAddGate(x, y)
let f = forwardMultiplyGate(q, z)

// gradient of the multiply gate
// wrt to its inputs
const derivative_f_z = q // 3
const derivative_f_q = z // -4

// gradient of the add gate wrt to its inputs
const derivative_q_x = 1.0
const derivative_q_y = 1.0

// apply chain ruel
let derivative_f_x = derivative_q_x * derivative_f_q
let derivative_f_y = derivative_q_y * derivative_f_q

//final gradient [-4, 4, 3]
const derivative_f_xyz = [
    derivative_f_x,
    derivative_f_y,
    derivative_f_z
]
for(let gradient of derivative_f_xyz){
    print(` gradient = ${gradient}`)
}

const step_size = 0.01
//let the inputs responde to the force/tug
x = x + step_size * derivative_f_xyz[0]
print(` x = ${x}`) // -2.04
y = y + step_size * derivative_f_xyz[1]
print(` y = ${y}`) // 4.96
z = z + step_size * derivative_f_xyz[2]
print(` z = ${z}`) // -3.97

// my circuit now gives a better ouput
q = forwardAddGate(x, y)
print(` q = ${q}`) // 2.92 
f = forwardMultiplyGate(q, z)
print(` f = ${f}`) // -11.59

// initial conditions
let new_x = -2.0, new_y = 5.0, new_z = -4.0

// numerical gradient check
var h = 0.0001;
var x_derivative = (forwardCircuit(new_x+h,new_y,new_z) - forwardCircuit(new_x,new_y,new_z)) / h; // -4
var y_derivative = (forwardCircuit(new_x,new_y+h,new_z) - forwardCircuit(new_x,new_y,new_z)) / h; // -4
var z_derivative = (forwardCircuit(new_x,new_y,new_z+h) - forwardCircuit(new_x,new_y,new_z)) / h; // 3

assert_eq(x_derivative, derivative_f_xyz[0])
assert_eq(y_derivative, derivative_f_xyz[1])
assert_eq(z_derivative, derivative_f_xyz[2])

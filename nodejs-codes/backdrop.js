
const sigmoid = require('./sigmoid')
const deriv = require('./derivative')

const multGate = (v1, v2) => {
    return v1 * v2
}

const addGate = (v1, v2) => {
    return v1 + v2
}

let a = -2, b = 3
console.log(`a: ${a}`)
console.log(`b: ${b}`)

let x = multGate(a, b)
let dx = deriv(x)
console.log(`x (a*b): ${x}`)
console.log(`dx: ${dx}`)

let da = multGate(b, dx)
let db = multGate(a, dx)
console.log(` da: ${da}`)
console.log(` db: ${db}`)

x = addGate(a, b)
dx = deriv(x)
console.log(`x (a*b): ${x}`)
console.log(`dx: ${dx}`)

da = multGate(1.0, dx)
db = multGate(1.0, dx)
console.log(` da: ${da}`)
console.log(` db: ${db}`)

// lets compute x = a + b + c in two steps:
let ma = 3, mb = -2, mc = -4
console.log(`\n ma: ${ma}`)
console.log(` mb: ${mb}`)
console.log(` mc: ${mc}`)

let q = addGate(ma, mb)
let mx = addGate(q, mc)
console.log(`\n q: ${q}`)
console.log(` mx: ${mx}`)

// backward pass:
const mdx = deriv(mx) 
let dq = multGate(1.0, mdx) // backprop gate 2
let dc = multGate(1.0, mdx)
console.log(`\n dq: ${dq}`)
console.log(` dc: ${dc}`)

let mdb = multGate(1.0, dq) // backprop gate 1
let mda = multGate(1.0, dq)
console.log(`\n db: ${mdb}`)
console.log(` da: ${mda}`)

var nx = a + b + c;
var nda = 1.0 * dx; var ndb = 1.0 * dx; var ndc = 1.0 * dx;
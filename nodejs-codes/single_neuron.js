const print = require('./print')

const str = (w) => {
    return JSON.stringify(w)
}

const sigmoid = (x) => {
    return 1.0 / (1.0 + Math.exp(-x))
}

const sigmoid_gradient = (x) => {
    let dx = sigmoid(x) * (1 - sigmoid(x))
    return dx
}

// example
const input_x = 3.0
print(`   input_x = ${input_x}`)
const output = sigmoid(input_x) // 0.95
print(`   sigmoid output = ${output}`)
const local_gradient = sigmoid_gradient(input_x) // .0475 
print(`   local gradient = ${local_gradient}`)

// an iterface
class Unit{ 
    constructor(value, gradient) {
        this.value = value
        this.gradient = gradient
    }
}

// a class
class multiplyGate {
       constructor(){}
       forward(u0, u1) {
            //store pointers to input units u0, u1 and output utop
            this.u0 = u0, this.u1 = u1
            this.utop = new Unit(u0.value * u1.value, 0.0)
            return this.utop
        }
        // take the gradient in output unit and chain it with the
        // local gradients, which we derived for multiply gate before
        // then write those gradients to those Units.
        backward(u0, u1, utop){
            this.u0 = u0, this.u1 = u1, this.utop = utop
            this.u0.gradient += this.u1.value * this.utop.gradient
            this.u1.gradient += this.u0.value * this.utop.gradient
            return [this.u0, this.u1]
        }
}

// a class
class addGate {
       constructor(){}
       forward(u0, u1){
            //store pointers to input units u0, u1 and output utop
            this.u0 = u0
            this.u1 = u1
            this.utop = new Unit(u0.value + u1.value, 0.0)
            return this.utop
        }
        // take the gradient in output unit and chain it with the
        // local gradients, which we derived for multiply gate before
        // then write those gradients to those Units.
        backward(u0, u1, utop){
            this.u0 = u0, this.u1 = u1, this.utop = utop
            this.u0.gradient += 1 * this.utop.gradient
            this.u1.gradient += 1 * this.utop.gradient
            return [this.u0, this.u1]
        }
    }

class sigmoidGate {
      constructor(){}
      forward(u0) {
          this.u0 = u0
          this.utop = new Unit(sigmoid(this.u0.value), 0.0)
          return this.utop
        }

      backward(u0, utop){
          this.u0 = u0, this.utop = utop
          let s = sigmoid(this.u0.value)
          this.sig_grad = s * (1 - s)
          this.u0.gradient += this.sig_grad * this.utop.gradient
          return this.u0
        }        
    }

 //create input units
 const a = new Unit(1.0, 0.0)
 const b = new Unit(2.0, 0.0)
 const c = new Unit(-3.0, 0.0)
 const x = new Unit(-1.0, 0.0)
 const y = new Unit(3.0, 0.0)

 //create the gates
 const mulg0 = new multiplyGate()
 const mulg1 = new multiplyGate()
 const addg0 = new addGate()
 const addg1 = new addGate()
 const sigg0 = new sigmoidGate()
 
 const forwardBackwardNeuron = () => {
     let ax = mulg0.forward(a, x) // (* a x) = -1
     print("\tax: " + str(ax.value))
     let by = mulg1.forward(b, y) // (* b y) = 6
     print("\tby: " + str(by.value))
     let axpby = addg0.forward(ax, by) // (+(* a x)(* b y)) = 5
     print("\taxpby: " + str(axpby.value))
     let axpbypc = addg1.forward(axpby, c) // (+ (+ (* a x) (* b y)) c) = 2
     print("\taxpbypc: " + str(axpbypc.value))
     let s = sigg0.forward(axpbypc) // sig( (+ (+ (* a x) (* b y)) c)) = 0.8808
     print(` >>>> Circuit output 1 [s.value]: ${str(s.value)}`)
     
     s.gradient = 1.0
     print(` >>>> Circuit output 2 [s.gradient] : ${str(s.gradient)}`)

     let n_s = sigg0.backward(axpbypc, s) // sig( (+ (+ (* a x) (* b y)) c)) = 0.8808
     print(` >>>> Circuit output 3 [n_s.value] : ${str(n_s.value)}`)
     print(` >>>> Circuit output 4 [n_s.gradient] : ${str(n_s.gradient)}`)

     axpbypc.gradient = n_s.gradient
     let [n_axpby, n_c] = addg1.backward(axpby, c, axpbypc) // (+ (+ (* a x) (* b y)) c) = 2
     print("\tn_axpby.value: " + str(n_axpby.value))
     print("\tn_c.value: " + str(n_c.value))

     axpby.gradient = n_axpby.gradient
     let [n_ax, n_by] = addg0.backward(ax, by, axpby) // (+(* a x)(* b y)) = 5
     print("\tn_ax.value: " + str(n_ax.value))
     print("\tn_by.value: " + str(n_by.value))

     by.gradient = n_by.gradient
     let [n_b, n_y] = mulg1.backward(b, y, by) // (* b y) = 6
     print("\tn_b.value: " + str(n_b.value))
     print("\tn_y.value: " + str(n_y.value))

     ax.gradient = n_ax.gradient
     let [n_a, n_x] = mulg0.backward(a, x, ax) // (* a x) = -1
     print("\tn_a.value: " + str(n_a.value))
     print("\tn_x.value: " + str(n_x.value))
     
     a.gradient = n_a.gradient
     print("\tn_a.grad: " + str(a.gradient))
     b.gradient = n_b.gradient
     print("\tn_b.grad: " + str(b.gradient))
     c.gradient = n_c.gradient
     print("\tn_c.grad: " + str(c.gradient))
     x.gradient = n_x.gradient    
     print("\tn_x.grad: " + str(x.gradient))
     y.gradient = n_y.gradient     
     print("\tn_y.grad: " + str(y.gradient))

     const step_size = 0.01
     a.value += step_size * a.gradient
     b.value += step_size * b.gradient
     c.value += step_size * c.gradient
     x.value += step_size * x.gradient
     y.value += step_size * y.gradient
     /*print("\ta.value: " + str(a.value))
     print("\tb.value: " + str(b.value))
     print("\tc.value: " + str(c.value))
     print("\tx.value: " + str(x.value))
     print("\ty.value: " + str(y.value))*/
 }

 forwardBackwardNeuron()

 // check analytic gradients and compare them with the numeric ones
 const forwardCircuitFast = (a,b,c,x,y) => { 
    return 1/(1 + Math.exp( - (a*x + b*y + c))) 
  }
  
  let m_a = 1, m_b = 2, m_c = -3, m_x = -1, m_y = 3
  const h = 0.0001
  const a_grad = (forwardCircuitFast(m_a+h,m_b,m_c,m_x,m_y) - forwardCircuitFast(m_a,m_b,m_c,m_x,m_y))/h
  const b_grad = (forwardCircuitFast(m_a,m_b+h,m_c,m_x,m_y) - forwardCircuitFast(m_a,m_b,m_c,m_x,m_y))/h
  const c_grad = (forwardCircuitFast(m_a,m_b,m_c+h,m_x,m_y) - forwardCircuitFast(m_a,m_b,m_c,m_x,m_y))/h
  const x_grad = (forwardCircuitFast(m_a,m_b,m_c,m_x+h,m_y) - forwardCircuitFast(m_a,m_b,m_c,m_x,m_y))/h
  const y_grad = (forwardCircuitFast(m_a,m_b,m_c,m_x,m_y+h) - forwardCircuitFast(m_a,m_b,m_c,m_x,m_y))/h
  print("\t(derivatives) a_grad: " + str(a_grad))
  print("\t(derivatives) b_grad: " + str(b_grad))
  print("\t(derivatives) c_grad: " + str(c_grad))
  print("\t(derivatives) x_grad: " + str(x_grad))
  print("\t(derivatives) y_grad: " + str(y_grad))
 
  
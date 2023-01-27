
//the + gate simply takes the gradient on top and 
// routes it equally to all of its inputs (because 
// its local gradient is always simply 1.0 for all 
// its inputs, regardless of their actual values). 
// So we can do it much faster:
var x = a + b + c;
var da = 1.0 * dx; var db = 1.0 * dx; var dc = 1.0 * dx;

//Okay, how about combining gates?:
var x = a * b + c;
// given dx, backprop in-one-sweep would be =>
da = b * dx;
db = a * dx;
dc = 1.0 * dx;

// lets do our neuron in two steps:
var q = a*x + b*y + c;
var f = sigmoid(q); // sig is the sigmoid function
// and now backward pass, we are given df, and:
var df = 1;
var dq = (f * (1 - f)) * df;
// and now we chain it to the inputs
var da = x * dq;
var dx = a * dq;
var dy = b * dq;
var db = y * dq;
var dc = 1.0 * dq;

//what about this one?
var x = a * a;
var da = //???

da = a * dx; // gradient into a from first branch
da += a * dx; // and add on the gradient from the second branch

// short form instead is:
var dA = 2 * A * dX;

// Lets do another one:
var x = a*a + b*b + c*c;
// we get:
var da = 2*a*dx;
var db = 2*b*dx;
var dc = 2*c*dx;

var x = Math.pow(((a * b + c) * d), 2); 
// pow(x,2) squares the input JS

//When more complex cases like this come up in 
//practice, I like to split the expression into 
//manageable chunks which are almost always composed 
//of simpler expressions and then I chain them 
//together with chain rule:
var x1 = a * b + c;
var x2 = x1 * d;
var x = x2 * x2; // this is identical to the above 
//expression for x and now in backprop we go backwards:
var dx2 = 2 * x2 * dx; // backprop into x2
var dd = x1 * dx2; // backprop into d
var dx1 = d * dx2; // backprop into x1
var da = b * dx1;
var db = a * dx1;
var dc = 1.0 * dx1; // done!

// Here’s what division might look like in practice then:
var x = 1.0/a; // division
var da = -1.0/(a*a);

var x = (a + b)/(c + d);
// lets decompose it in steps:
var x1 = a + b;
var x2 = c + d;
var x3 = 1.0 / x2;
var x = x1 * x3; // equivalent to above
// and now backprop, again in reverse order:
var dx1 = x3 * dx;
var dx3 = x1 * dx;
var dx2 = (-1.0/(x2*x2)) * dx3; // local gradient as shown above, and chain rule
var da = 1.0 * dx1; // and finally into the original variables
var db = 1.0 * dx1;
var dc = 1.0 * dx2;
var dd = 1.0 * dx2;

//Hopefully you see that we are breaking down expressions, 
//doing the forward pass, and then for every variable 
//(such as a) we derive its gradient da as we go backwards, 
//one by one, applying the simple local gradients and
//chaining them with gradients from above. Here’s another one:
var x = Math.max(a, b);
var da = a === x ? 1.0 * dx : 0.0;
var db = b === x ? 1.0 * dx : 0.0;

//lets look at the Rectified Linear Unit non-linearity (or ReLU), 
//which you may have heard of. It is used in Neural Networks in 
//place of the sigmoid function. 
//It is simply thresholding at zero:
var x = Math.max(a, 0)
// backprop through this gate will then be:
var da = a > 0 ? 1.0 * dx : 0.0;

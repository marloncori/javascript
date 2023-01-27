
const data = [
    [1.2, 0.7],
    [-0.3, -0.5],
    [3.0, 0.1],
    [-0.1, -1.0],
    [-1.0, 1.1],
    [2.1, -3.0]
]

const labels = [
    1,
    -1,
    1,
    -1,
    -1,
    1
]


let a = 1, b = -2, c = -1; // initial parameters
for(let iter = 0; iter < 400; iter++) {
  // pick a random data point
  let i = Math.floor(Math.random() * data.length);
  let x = data[i][0]
  let y = data[i][1]
  let label = labels[i]

  // compute pull
  let score = a*x + b*y + c
  let pull = 0.0
  if(label === 1 && score < 1) pull = 1
  if(label === -1 && score > -1) pull = -1

  // compute gradient and update parameters
  let step_size = 0.01
  a += step_size * (x * pull - a) // -a is from the regularization
  b += step_size * (y * pull - b) // -b is from the regularization
  c += step_size * (1 * pull)

  if(iter % 25 == 0) { // every 10 iterations... 
    console.log('training accuracy at iter ' + iter + ': \n  pull = ' + pull + ': \n    a = ' + a + ': \n    b = ' + b + ': \n    c = ' + c + '\n')
  }
}
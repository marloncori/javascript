const print = require('./print')

const fib = (n) => {
    const table = new Array(n + 1).fill(0)
    table[1] = 1

    for(let i = 1; i < n; i++){
       table[i + 1] += table[i]
       table[i + 2] += table[i]
    }
   return table[n]
}


let range = []
for(let i=1; i<15; i++){
    range.push(i)
}

for(const i of range){
    print(" Result --> fibonacci up to " + i + ": " + fib(i), 'y', true)
}
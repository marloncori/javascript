const print = require('./print')

const factorial = (n, memo={}) =>{
    if(n in memo) return memo[n]
    if(n === 0) return 1
    
    let result = factorial(n-1) * n
    memo[n] = result

  return result      
}

print(" Result --> 5! = " + factorial(5), 'y', true)
print(" Result --> 7! = " + factorial(7), 'c', true, 1)
print(" Result --> 18! = " + factorial(18), 'r', true, 1)
print(" Result --> 97! = " + factorial(97), 'g')


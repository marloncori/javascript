let range = []
for(i=1; i<50; i++){
    range.push(i)
}

const fib = (n, memo = {}) => {
    if(n in memo) return memo[n]
    if(n <= 2 ) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}

for(const i of range){
    console.log(fib(i))
}
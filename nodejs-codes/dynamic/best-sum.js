
const bestSum = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === 0) return []
    if(target < 0) return null

    let shortestCombination = null

    for(let num of numbers){
        const remainder = target - num
        const combination = bestSum(remainder, numbers, memo)
        if(combination !== null){
            const result = [...combination, num]
            if(shortestCombination === null || result.length < shortestCombination.length){
                shortestCombination = result
            }
        }
    }
    memo[target] = shortestCombination
    return shortestCombination
}

try{
    console.log(bestSum(7, [5, 3, 4, 7]));
    console.log(bestSum(8, [5, 3, 4, 7]));
    console.log(bestSum(50, [1, 10]));
    console.log(bestSum(100, [1, 2, 5, 25]));
}catch(error){
    console.log(error);
}
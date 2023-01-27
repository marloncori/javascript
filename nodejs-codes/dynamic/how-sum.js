
const howSum = (target, numbers, memo = {}) => {
    if(target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

    for(let num of numbers){
        const remainder = target - num;
        const result = howSum(remainder, numbers, memo);
        if(result !== null){
           //return the same array with
           // a number appended to its end
           memo[target] = [...result, num];
           return memo[target];
        }
    }
    memo[target] = null;
   return null;
};


try{
    console.log(howSum(7, [5, 3, 4, 7]));
    console.log(howSum(8, [5, 3, 4, 7]));
    console.log(howSum(50, [1, 10]));
    console.log(howSum(300, [7, 14, 2]));
}catch(error){
    console.log(error);
}
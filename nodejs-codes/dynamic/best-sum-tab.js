const print = require('./print.js')

const shorter = (first, second) => {
    if(first !== null && second !== null){
        return first.length < second.length
    }
}

const bestSumTab = (targetSum, numbers) => {
    const table = new Array(targetSum+1).fill(null)
    table[0] = []

    for(let i=0; i<=targetSum; i++){
        if(table[i] !== null){
            for(let num of numbers){
                const newComb = [...table[i], num]
                const oldComb = table[i + num]
                if(!oldComb || shorter(newComb, oldComb)) {
                    table[i + num] = newComb
                }
            }
        }
    }
   return table[targetSum]
}

print(" The result of bestSumTab(7, [5, 3, 4, 7]): [" + bestSumTab(7, [5, 3, 4, 7]) + "]", 'c', true)
print(" The result of bestSumTab(8, [2, 3, 5]): [" + bestSumTab(8, [2, 3, 5]) + "]", 'g', true, 1)

print(" The result of bestSumTab(7, [1, 4, 5]): [" + bestSumTab(7, [1, 4, 5]) + "]", 'b', true)
print(" The result of bestSumTab(8, [1, 3, 5]): [" + bestSumTab(8, [1, 3, 5]) + "]", 'r', true, 1)

print(" The result of bestSumTab(100, [1, 2, 5, 25]): [" + bestSumTab(100, [1, 2, 5, 25]) + "]", 'y', true, 1)
print(" The result of bestSumTab(300, [7, 14, 29, 1, 13]): [" + bestSumTab(300, [7, 14, 29, 1, 13]) + "]", 'p', true)
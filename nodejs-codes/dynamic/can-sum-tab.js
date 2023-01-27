const print = require('./print.js')

const canSumTab = (targetSum, numbers) => {
    const table = new Array(targetSum+1).fill(false)
    table[0] = true

    for(let i=0; i<=targetSum; i++){
        if(table[i]){
          for(let num of numbers){
              table[i + num] = true
          }  
        }
    }
  return table[targetSum]
}

print(" The result of canSumTab(7, [2, 3]): " + canSumTab(7, [2, 3]), 'c', true)
print(" The result of canSumTab(7, [5, 3, 4, 7]): " + canSumTab(7, [5, 3, 4, 7]), 'g', true, 1)

print(" The result of canSumTab(7, [2, 4]): " + canSumTab(7, [2, 4]), 'b', true)
print(" The result of canSumTab(8, [2, 3, 5]): " + canSumTab(8, [2, 3, 5]), 'r', true, 1)

print(" The result of canSumTab(8, [1, 2, 9]): " + canSumTab(8, [1, 2, 9]), 'y', true, 1)
print(" The result of canSumTab(300, [7, 14]): " + canSumTab(300, [7, 14]), 'p', true)
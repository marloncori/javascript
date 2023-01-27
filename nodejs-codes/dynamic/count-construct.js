const print = require('./print')

const removePreffix = (word, elem) => {
    return word.slice(elem.length)
}

const isPrefix = (word, part) => {
    if(word.indexOf(part) == 0)
        return true
    else
        return false
}

// count in how many way you can create the target
// word from the given word bank
const countConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === '') return true

    let totalCount = 0
    for(let word of wordBank){
        if(isPrefix(target, word)){
          const suffix = removePreffix(target, word)
          const numberOfWays = countConstruct(suffix, wordBank, memo)
          totalCount += numberOfWays
        }
    }
   memo[target] = totalCount
   return totalCount
}

const combinations = [ 
    ['ab', 'abc', 'cd', 'def', 'abcd'],
    ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],
    ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],
    ['e', 'ee', 'eeef', 'eeeef', 'eeeeef', 'eeeeeeef']
]

try {
  print(" Possible ways to build word: " +
      countConstruct('abdef', combinations[0]), 'y')
  print(" Possible ways to build word: " +
      countConstruct('skateboard', combinations[1]), 'c', true)
  print(" Possible ways to build word: " +
      countConstruct('enterapotentpot', combinations[2]), 'g', false, 1)
  print(" Possible ways to build word: " +
       countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', combinations[3]), 'p', true, 1)
} catch(error){
      console.log(error)
}
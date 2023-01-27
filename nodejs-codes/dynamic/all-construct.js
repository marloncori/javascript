const  print = require('./print')

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
const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if(target === '') return [[]]

    let result = []
    for(let word of wordBank){
        if(isPrefix(target, word)){
          const suffix = removePreffix(target, word)
          const numberOfWays = allConstruct(suffix, wordBank)
          let preffix = word
          const targetWays = numberOfWays.map(subarray => [preffix, subarray])
          result.push(...targetWays)  
        }
    }
  memo[target] = result
  return result
}

const combinations = [
    ['purp', 'p', 'ur', 'le', 'purpl'], 
    ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'],
    ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],
    ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],
    ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee']
]

try {
 print(" Possible ways to build word: " +
     allConstruct('purple', combinations[0]), 'b', true, 1)
  print(" Possible ways to build word: " +
     allConstruct('abdef', combinations[1]), 'y')
  print(" Possible ways to build word: " +
     allConstruct('skateboard', combinations[2]), 'c', true)
  print(" Possible ways to build word: " +
     allConstruct('enterapotentpot', combinations[3]), 'g', false, 1)
  print(" Possible ways to build word: " +
     allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', combinations[4]), 'p', true, 1)
} catch(error){
      console.log(error)
}
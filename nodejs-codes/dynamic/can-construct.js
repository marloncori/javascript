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

const canConstruct = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target]
    if(target === '') return true

    for(let word of wordBank){
        if(isPrefix(target, word)){
          const suffix = removePreffix(target, word)
          const targetCanBeMade = canConstruct(suffix, wordBank, memo)
          if(targetCanBeMade){
              memo[target] = true
              return true
          }
        }
    }
   //after having tried all possible choices
   memo[target] = false
   return false
}

const combinations = [
    ['ab', 'abc', 'cd', 'def', 'abcd'],
    ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],
    ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],
    ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeee']
]

try {
  print(
      canConstruct('abdef', combinations[0]), 'r')
  print(
      canConstruct('skateboard', combinations[1]), 'b', true)
  print(
      canConstruct('enterapotentpot', combinations[2]), 'g', false, 1)
  print(
      canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', combinations[3]), 'p', true, 1)
} catch(error){
      console.log(error)
}
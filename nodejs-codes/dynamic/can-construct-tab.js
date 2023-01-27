
const print = require('./print.js')

const validParams = (first, sec, third) => {
    if(first !== null && sec !== null){
        return true
    } else if (first !== null && sec !== null && thrid !== null){
        return true
    }
  return false
}

const charMatchingChecker = (target, iter, word) => {
    if(validParams(target, iter, word)){
        if(target.slice(iter, iter+word.length) === word){
           return true
        }
    }
   return false
}

const canConstructTab = (target, wordBank) => {
    if(validParams(target, wordBank)){
        const table = new Array(target.length+1).fill(false)
        table[0] = true

        for(let pos = 0; pos <= target.length; pos++){
            if(table[pos] === true){
                for(let word of wordBank){
                    // does the word match the characters
                    // starting at position
                    if(charMatchingChecker(target, pos, word)){
                         table[pos + word.length] = true
                    } 
                }
            }
        }
      return table[target.length]
    }
  return false
}

const combinations = [
    ['ab', 'abc', 'cd', 'def', 'abcd'],
    ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],
    ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],
    ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeee']
]

try {
  print( "  Result is: " +
      canConstructTab('abdef', combinations[0]), 'r')
  print( "  Result is: " +
      canConstructTab('skateboard', combinations[1]), 'b', true)
  print( "  Result is: " +
      canConstructTab('enterapotentpot', combinations[2]), 'g', false, 1)
  print( "  Result is: " +
      canConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', combinations[3]), 'p', true, 1)
} catch(error) {
      console.log(error)
}
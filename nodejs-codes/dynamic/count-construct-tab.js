
const print = require('./print.js')

const validParams = (first, sec, third) => {
    if(first !== null && sec !== null){
        return true
    } else if (first !== null && sec !== null && third !== null){
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

const countConstructTab = (target, wordBank) => {
    if(validParams(target, wordBank)){
        const table = new Array(target.length+1).fill(0)
        table[0] = 1

        for(let pos = 0; pos <= target.length; pos++){
           for(let word of wordBank){
              if(charMatchingChecker(target, pos, word)){
                 table[pos + word.length] += table[pos]
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
    ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeee'],
    ['purp', 'p', 'ur', 'le', 'purpl']
]

try {
  print( "  Result is: " +
      countConstructTab('abdef', combinations[0]), 'r')
  print( "  Result is: " +
      countConstructTab('skateboard', combinations[1]), 'b', true)
  print( "  Result is: " +
      countConstructTab('enterapotentpot', combinations[2]), 'g', false, 1)
  print( "  Result is: " +
      countConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', combinations[3]), 'p', true, 1)
  print( "  Result is: " +
      countConstructTab('purple', combinations[4]), 'y', true)
} catch(error) {
      console.log(error)
}
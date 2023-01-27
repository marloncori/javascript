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

const allConstructTab = (target, wordBank) => {
    if(!validParams(target, wordBank)){
        return -1
    }
    const table = new Array(target.length+1)
        .fill().map(() => [])
    table[0] = [[]]

    for(let pos = 0; pos <= target.length; pos++){
       for(let word of wordBank){
          // do some logic only on the words that
          // match to the current position
          if(charMatchingChecker(target, pos, word)){
             const newComb = table[pos].map(subArray => [...subArray, word])
             table[pos + word.length].push(...newComb)
          } 
       }
    }
  return table[target.length]
}

const combinations = [
    ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'],
    ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],
    ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],
    ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeeee'],
    ['purp', 'p', 'ur', 'le', 'purpl']
]

try {
  print( "  Result is: " +
      allConstructTab('abdef', combinations[0]), 'r')
  print( "  Result is: " +
      allConstructTab('skateboard', combinations[1]), 'b', true)
  print( "  Result is: " +
      allConstructTab('enterapotentpot', combinations[2]), 'g', false, 1)
  //print( "  Result is: " +
  //  allConstructTab('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', combinations[3]), 'p', true, 1)
  print( "  Result is: " +
      allConstructTab('purple', combinations[4]), 'y', true)
} catch(error) {
      console.log(error)
}
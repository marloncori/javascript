//result is created inside and passed out

const decrement = (num) => {
    return num-1
}

const recursiveListBuild = (count, evens=false) => {
    let result = new Array(count);
    if (count == 0) return []
    if (count > 0) {
          result = recursiveListBuild(decrement(count))             
          result.push(count)
          if(evens){
              result = result.filter(elem => {
                  if(elem % 2 == 0) return elem
              });
             return result
          }
        return result   
    }
  return -1
}

console.log(recursiveListBuild(15, true))
console.log(recursiveListBuild(15))
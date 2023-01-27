
const before = (elems) => {
    console.log(" These are the elements: ")
    for(let elem of elems){
        console.log(elem + " ")
    }
}

const after = (elems) => {
    console.log(" This the result after operation: ")
     console.log(elems)
}

const swap_value = ([first, second]) => {
    temp = first
    first = second
    second = temp
    after([first, second])
}

const swap_order = ([first, second]) => {
    after([second, first])
}

const rotate = ([head, ...tail]) => {
    after([...tail, head])
}

let valA = 23
let valB = 71

let pair = [234, 567]
let numbers = [23, 45, 67, 89, 120]

before([valA, valB])
before(pair)
before(numbers)

swap_value([valA, valB])
swap_order(pair)
rotate(numbers)

module.exports = after
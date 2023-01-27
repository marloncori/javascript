const SnailSort = require('./snail_sort')

let numbers = [10, 27, 7, 2, 47, 79, 8, 13, 498,
    34, 55, 89, 144, 233, 377, 610]

let sorter = SnailSort ({
    array: numbers
})

sorter.before()
sorter.start()
sorter.after()
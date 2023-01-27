const JumpSearch = require("./jump_search")

const num_arr = [10, 27, 7, 2, 47, 79, 8, 13, 498,
    34, 55, 89, 144, 233, 377, 610]

let num_query = -3
let num_size = num_arr.length

let searcher = JumpSearch ({
    array: num_arr, 
        query: num_query, 
           size: num_size
})

let index = searcher.start()
searcher.showResult(index)

for(const num of num_arr) {
    searcher.newQuery(num)
    index = searcher.start()
    searcher.showResult(index)
}


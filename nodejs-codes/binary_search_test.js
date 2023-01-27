
const BinarySearch = require("./binary_search")
const bs = new BinarySearch()

const nums = [23, 45, 67, 89, 15, 102]
const begin = 0
const end = 6-1

for(const num of nums) {
    let index = bs.search(nums, begin, end, num)
    bs.show(index)
}
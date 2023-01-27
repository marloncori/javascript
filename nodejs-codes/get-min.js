
const list = [2, -3, 45, 67, -19, 23, 100]

const getMin = (nums) => {
    let min = nums[0]
    for(let num of nums){
        if(num < min){
            min = num
        }
    }
    return min
}

console.log(getMin(list))
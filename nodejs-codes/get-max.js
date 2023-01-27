


const isGreater = (x, y) => {
    return (x > y)
}

const getMax = (nums) => {
    let max = nums[0]
    for(let num of nums){
        if(isGreater(num, max)){
            max = num
        }
    }
    return max
}

const list = [2, -3, 45, 67, 215, -19, 23, 100]

console.log(getMax(list))
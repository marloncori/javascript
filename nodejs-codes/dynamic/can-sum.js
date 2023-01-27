
const canSum = (target, nums, memo = {}) => {
   if(target in memo) return memo[target]
   if(target == 0) return true
   if(target < 0) return false

   for(let num of nums){
      const remainder = target - num
      if(canSum(remainder, nums, memo)){
        memo[target] = true 
        return true
      }
   }
  memo[target] = false 
 return false
}
  
const nums = [2, 3] // true
const nums2 = [5, 3, 5, 7] // true
const nums3 = [2, 4] // false
const nums4 = [7, 14] // false

const target = 7
const target2 = 300
try {
    console.log(canSum(target, nums) == 0 ? "\t result: FALSE.\n" : "\t result: TRUE.\n")
    console.log(canSum(target, nums2) == 0 ? "\t result: FALSE.\n" : "\t result: TRUE.\n")
    console.log(canSum(target, nums3) == 0 ? "\t result: FALSE.\n" : "\t result: TRUE.\n")
    console.log(canSum(target2, nums4) == 0 ? "\t result: FALSE.\n" : "\t result: TRUE.\n")  
} catch(error) {
    console.log(error)    
}

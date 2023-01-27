const showArray = (data, mode) => {
    let word = ""
    switch(mode){
        case 0: 
            word = "unsorted"
            break
        case 1:
            word = "sorted"
            break
    }
    console.log(` This the ${word} array: \n{`)
    for(let num of data){
        console.log(`${num} `)
    }
    console.log(" }.")
}

const partition_two = (arr, low, high, compare) => {
    let pivotIndex = low + 1;
    for (let i = pivotIndex; i < high; i++) {
       if (compare(arr[i], arr[low])) {
       // Swap the number less than the pivot
       swap_them(arr, i, pivotIndex);
       pivotIndex += 1;
       }
    }
    // Place the pivot to its correct position
    swap_them(arr, pivotIndex - 1, low);
    // Return pivot's position
    return pivotIndex - 1;
 }
 
 const swap_them = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

 const QuickSort = (arr, low, high, compare = (l, r) => l < r) => {
    if (high - low > 0) {
       // Partition the array
       let mid = partition_two(arr, low, high, compare);
       // Recursively sort the left half
       QuickSort(arr, low, mid, compare);
       // Recursively sort the right half
       QuickSort(arr, mid + 1, high, compare);
    }
 }

let nums = [98, 76, 45, 2, 34, 12, 7, 0, 99, 57, 82, 73, 120]
mode = 0

 try{
    showArray(nums, mode)
 }catch(error){
     console.log(error)
 }

 // Sort Array elements in increasing order
 mode = 1
 QuickSort(nums, 0, nums.length-1)
 try{
    showArray(nums, mode)
 }catch(error){
     console.log(error)
 }


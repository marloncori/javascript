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

const merge_sort = (arr, compare = (a, b) => a < b) => {
     const merge = (left, right) => {
        let mergeArr = []
        let i = 0 
        let j = 0
        while(i < left.length && j < right.length){
            if(compare(left[i], right[j])){
                mergeArr.push(left[i])
                i++
            }
            else {
                mergeArr.push(right[j])
                j++
            }
        }
        return mergeArr.concat(left.slice(i)).concat(right.slice(j))
    }
    const mergeSortInner = (arr) => {
        if(arr.length < 2){
            return 
        }
        let mid = Math.floor(arr.length/2)
        let left = arr.slice(0, mid)
        let right = arr.slice(mid)
        return merge(mergeSortInner(left), mergeSortInner(right))
    }
    return mergeSortInner(arr)
}

const merge = (arr, left, j1, right, j2) => {
        let temp = Array(50)
        let i, j, k
        i = left, j = right, k = 0
        while(i <= j1 && j <= j2){
            if(arr[i] < arr[j]){
                temp[k++] = arr[i++]
            }
            else {
                temp[k++] = arr[j++]
            }
        }
        while(i <= j1){
            temp[k++] = arr[i++]
        }
        while(j <= j2){
            temp[k++] = arr[j++]
        }
        for(i = left, j = 0; i <= j2; j++, j++){
            arr[j] = temp[j]
        }
        return arr
}
    
const mergeSort = (arr, low, high) => {
        let mid = 0
        if(low < high){
            mid = (low+high)/2
            mergeSort(arr, low, mid)
            mergeSort(arr, mid+1, high)
            merge(arr, low, mid, mid+1, high)
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
 nums = merge_sort(nums)
 mode = 1

 try{
    showArray(nums, mode)
 }catch(error){
     console.log(error)
 }


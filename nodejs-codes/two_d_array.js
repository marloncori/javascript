
//method 1
const array2D = new Array(16)

for(let i = 0; i<array2D.length; i++){
    array2D[i] = new Array(4)
}

console.log(` First 2D array: ${array2D}\n`)
console.log(" Last Element : " + array2D[array2D.length -
    1][(array2D[array2D.length -1]).length - 1]);
//method 2
const new2Darray = [
    [1, 2, 3, 4, 5, 6],
    [12, 11, 10, 9, 8, 7]
]

console.log(` Second 2D array: ${new2Darray}\n`)
console.log("Last Element : " + new2Darray[new2Darray.length -
    1][(new2Darray[new2Darray.length -1]).length - 1]);
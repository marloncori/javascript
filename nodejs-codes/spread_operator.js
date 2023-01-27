
const sqrt_sum = (x, y, z) => {
    if(x === undefined || y === undefined || z === undefined){
        console.error( "Cannot resolve operation since one param in udefined.")
        return 
    }
    return Math.sqrt(x) + Math.sqrt(y) + Math.sqrt(z)
}

const numbers = [96, 45, 126]

console.log(sqrt_sum(...numbers))

console.log(sqrt_sum.apply(null, numbers))
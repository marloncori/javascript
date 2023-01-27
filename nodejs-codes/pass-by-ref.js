const log = (x, y, z, mode=0) => {
    let word = ""
    switch(mode){
        case 0: word = "Before"; break;
        case 1: word = "After"; break;
    }
   console.log("\033[1;36m\n "+ word + " calling function:\033[0m \n\t\033[1;34mx: " + x + "\033[0m \n\t\033[1;35my: " + y + "\033[0m \n\t\033[1;32mz: " + z + "\033[0m")
}

const a = "Now X is the third"
const c = "Now Z is the second"
const b = "Now Y is the first"
let newValues = new Array(a, b, c)

const change = (values) => {
    
    for(let i=0; i<newValues.length; i++){
        values[i] = newValues[i]
    } 
}

let x = "first"
let y = "second"
let z = "third"
let values = new Array(x, y, z)

 log(x, y, z)

 try{
    change(values)
}catch(error){
    console.log(error)
}

x = values[0], y = values[1], z = values[2]
 log(x, y, z, 1)

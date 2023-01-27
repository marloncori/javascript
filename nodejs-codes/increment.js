
let a = "--> [first]"
let b = "--> [second]"
let c = " --> [third]"
const oldValues = new Array(a, b, c)

const log = (x, y, z, mode=0) => {
    let word = ""
    switch(mode){
        case 0: word = "Before"; break;
        case 1: word = "After"; break;
    }
   console.log("\033[1;32m\n "+ word + " calling function:\033[0m \n\t\033[1;33mx: " + x + "\033[0m \n\t\033[1;34my: " + y + "\033[0m \n\t\033[1;35mz: " + z + "\033[0m")
}

const increment = (values) => {
    for(let v=0; v<values.length; v++){
        values[v] += " \033[1;31melement!\033[0m"
    }
}

let x = "first"
let y = "second"
let z = "third"

const v = new Array(x, y, z)
log(x, y, z)
    increment(v)

x = v[0], y = v[1], z = v[2]
log(x, y, z)


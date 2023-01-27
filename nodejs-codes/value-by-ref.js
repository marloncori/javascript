
const log = (x, y, z, mode=0) => {
    let word = ""
    switch(mode){
        case 0: word = "Before"; break;
        case 1: word = "After"; break;
    }
   console.log("\033[1;32m\n "+ word + " calling function:\033[0m \n\t\033[1;33mx: " + x + "\033[0m \n\t\033[1;34my: " + y + "\033[0m \n\t\033[1;35mz: " + z + "\033[0m")
}

const change = (a, b, c) => {
    a = "Now X is the third"
    c = "Now Z is the second"
    b = "Now Y is the first"
    return {a: a, b: b, c: c}
}

let x = "first"
let y = "second"
let z = "third"

log(x, y, z)
with (change(x, y, z)) {x = a; y = b; z = c;}
log(x, y, z, 1)

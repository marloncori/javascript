const { builtinModules } = require("module")

const print = (arg) => {
    let ln = "\n\t************************************************\n"
    console.log(`${ln} \t${arg} ${ln}`)
}


module.exports = print
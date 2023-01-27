const logger = require("./logger")
const greeter = require("./first-app")

const master = "Marlon"
const print_msg = (msg) => {
    let ln = "\n\n###########################\n"
    console.log(`${ln} ${msg} ${ln}`)
}

print_msg(__dirname)
greeter.sayHello(master)
logger.node_log(logger.url)
print_msg(__filename)

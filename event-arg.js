const color = require('./colors')
const EventEmitter = require('events')
const Logger = require('./logger')

//instead using an instance of event emitter
// now I can use an instance of my logger class
let debug = new Logger()

debug.on('calling listener...', (eventArg) => {
    let line = color.g+'\n+++++++++++++++++++++++++++++++++++++++++\n'+color.f
    console.log(`${line} ${eventArg} ${line}`)
})

const message = color.y+' [ROS INFO] Gyroscope data ->'+color.f+color.b+'\n\t x: 147.56'+color.f+color.g+'\n\t y: -369.8'+color.f+color.r+'\n\t z: 85.79'+color.f
debug.node_log(message)
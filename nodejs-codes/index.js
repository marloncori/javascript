const logEvents = require('./logEvents')
const EventEmitter = require('events')


class MsgEmitter extends EventEmitter {}
    //initialize object
const msgEmitter = new MsgEmitter()
msgEmitter.on('log', (msg) => logEvents(msg))

setTimeout(() => {
    const line = '\n\t=================================\n'
    msgEmitter.emit('log', `${line}\tLog event emitted!${line}`)
}, 3000)

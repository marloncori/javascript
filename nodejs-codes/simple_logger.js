const EventEmitter = require('events')
const emitter = new EventEmitter()

const URL = "https://192.168.0.136"

const node_log = (msg) => {
    let ln = "\n::::::::::::::::::::::::::::::\n"
    console.log(`${ln} ${msg} ${ln}`)
    emitter.emit('calling', {id: 1, url: 'https://192.168.0.134'})
}

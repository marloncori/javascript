const EventEmitter = require('events')

//if I want to raise events in my app
// to say that something has happened
// a should create a logger class extending EventEmitter
class Logger extends EventEmitter {
    URL = "https://192.168.0.136"

    node_log = (msg) => {
        let ln = "\n::::::::::::::::::::::::::::::::::\n"
        if (msg === '') {
            msg = this.URL
            console.log(`${ln} ${msg} ${ln}`)    
        }
        else {
            console.log(`${ln} ${msg} ${ln}`)
            this.emit('calling listener...', {id: 1, url: 'https://192.168.0.134'})
        }
    }    
}

//or const Logger = { node_log: (arg) => {...}  }
module.exports = Logger
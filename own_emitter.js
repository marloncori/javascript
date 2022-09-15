const EventEmitter = require('events').EventEmitter
const inherits = require('util').inherits

const Logger = () => {
    EventEmitter.call(this)
}
inherits(Logger, EventEmitter)

Logger.prototype.connect = () => {
    this.emit(' connected!')
}

const logger = new Logger()
logger.on('connected', () => {
    console.log(' Connected event raised!')
})
logger.connect()


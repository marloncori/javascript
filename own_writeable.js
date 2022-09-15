const Writeable = require('stream').Writeable
const util = require('util')

const Logger = () => {
    Writeable.call(this)
}

util.inherits(Logger, Writeable)
Logger.prototype._write = (chunk) => {
    console.log(chunk.toString())
}

const log = new Logger()
const readStream = require('fs').createReadStream('message.txt')
readStream.pipe(log)
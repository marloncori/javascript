const { v4: uuid } = require('uuid')
const { format } = require('date-fns')

const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises


const logEvents = async(message, logName) => {
    const dateTime = `${format(new Date(), `yyyyMMdd\tHH:mm:ss`)}`
    const logItem = `\n\t${dateTime}\n\t${uuid()}\n\t${message}`

    try {
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem)
    } catch(err){
        console.log(`Something went wrong: \n\tError name ==> ${err.name}\n\tError msg ==> ${err.message}`)
    }
}

const logger = (req, res, next) => {
    const line = '\n\t--------------------------------------\n'
    logEvents(`${line}\t\t   REQUEST LOG \n\t 1- Request method: ${req.method}\n\t 2 -Request path: ${req.path}${line}\t 3 - Headers origin: ${req.headers.origin}\n\t 4 - Request URL: ${req.url}${line}`, 'webRequestLog.txt')
    console.log(`${line}\t\t REQUEST LOG \n\t1- Request method: ${req.method}\n\t2 -Request path: ${req.path}${line}\t3 - Headers origin: ${req.headers.origin}\n\t4 - Request URL: ${req.url}${line}`)
    next()
}

module.exports = {logger, logEvents}
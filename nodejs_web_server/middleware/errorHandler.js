const { logEvents } = require('./logEvents')

const errorHandler = (err, req, res, next) => {
    const line = "\n\t*****************************************\n"
    logEvents(`${line}\t [WARNING] An unexpected error happened!\n\t Err name: ${err.name}\n\t Err msg: ${err.name}${line}`, 'webErrLog.txt')
    console.error(err.stack)
    res.status(500).send(err.message)
}

module.exports = errorHandler
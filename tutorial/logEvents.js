const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises

const puts = require('../print')
const color = require('../colors')

console.log(color.w+'\n\t This is the date and time: '+color.f)
puts(color.g+'\n\t Date:'+color.f+color.y+'\t\t Time:\n'+color.f+ format(new Date(), '\t   dd/MM/yyyy\n\t   HH:mm:ss'))

console.log('\n\t This is the generated UUID: ')
puts(color.b+'\n\t'+uuid()+color.f)

const msg = color.p+' A random UUID has been created'+color.f
const logEvents = async (msg, logName) => {
    let time = `${format(new Date(), '\t   dd/MM/yyyy\n\t   HH:mm:ss')}`
    let logItem = `${time}\n\t${uuid()}\n\t${msg}`
    puts(color.g+'\n\t Date:'+color.f+color.y+'\t\t Time:\n'+color.f+logItem)
    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(
                path.join(__dirname, 'logs'))
       }
       await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem)
    } catch(err) {
        console.log(`An error has happened:\n ${err}`)
    }
}

module.exports = logEvents
module.exports.msg = msg 
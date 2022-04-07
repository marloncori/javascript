const { publicDecrypt } = require('crypto')
const cl = require('./colors')
const fs = require('fs')
const path = require('path')
const put = require('./print')
const { pathToFileURL } = require('url')

fs.readFile(path.join(__dirname, '..', 'update_employee.json'), 'utf-8', (err, data) => {
    if (err) throw err
    put(data)
})

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(cl.r+'There was an uncaught exception:'+cl.f, err)
    process.exit(1)
})

fs.writeFile(path.join(__dirname, '.', 'node_file.txt'), 'This a test messsage saved to this file by means of a Nodejs program :)', (err) => {
    if (err) throw err
    put(cl.c+' File has been created and data has been loaded to it.'+cl.f)
})

// this function creates a file if it does not exit 
fs.appendFile(path.join(__dirname, '.', 'node_file.txt'), ' Now I am adding this sentence to the file in order to evaluate appendFile function.', (err) => {
    if (err) throw err
    put(cl.b+'  Text has been successfully appended to file.'+cl.f)
})
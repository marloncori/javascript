const cl = require('./colors')
const fs = require('fs')
const path = require('path')
const put = require('./print')
const { pathToFileURL } = require('url')

// exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(cl.r+'There was an uncaught exception:'+cl.f, err)
    process.exit(1)
})

fs.writeFile(path.join(__dirname, '.', 'test_file.txt'), 'This a test messsage saved to this \n file by means of a Nodejs program :)\n', (err) => {
    if (err) throw err
    put(cl.c+' File has been created and data has been loaded to it.'+cl.f)

        // this function creates a file if it does not exit 
    fs.appendFile(path.join(__dirname, '.', 'test_file.txt'), '\nNow I am adding this sentence to \n the file in order to evaluate \n appendFile function.\n And I am also testing with \n callbacks, rename, and readFile functions!', (err) => {
        if (err) throw err
        put(cl.b+'  Text has been successfully appended to file.'+cl.f)

        fs.rename(path.join(__dirname, '.', 'test_file.txt'), path.join(__dirname, '.', 'new_file.txt'), err => {
            if (err) throw err
            put(cl.y+"  File has been renamed to \'new_file.txt\', alrgiht?"+cl.f)

            fs.readFile(path.join(__dirname, '.', 'new_file.txt'), 'utf-8', (err, data) => {
                if (err) throw err
                put(data)
            })
            
        })
        
    })
})


const log = require('./print')
const fs = require('fs')

const files = fs.readdirSync('./').toString()

let [f1, f2, f3, f4, f5, f6, f7] = files.split(',')
const allFiles = [f1, f2, f3, f4, f5, f6, f7]

log(" These are the files in the folder:\n")
allFiles.forEach(elem => {
    console.log(`\t${elem}\n`)
}); 

fs.readdir('../', (err, files) => { 
    if (err) console.error('Error = ', err)
    else log('Result:\n' + file)
});



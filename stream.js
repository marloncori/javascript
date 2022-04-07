const fs = require('fs')
const path = require('path')

let fileName = 'new_test2.txt'
let PATH = path.join(__dirname, '.', fileName)
let PATH2 = path.join(__dirname, '.', 'stream_test.txt')

const subscriber = fs.createReadStream(PATH, {encoding: 'utf-8'})
const publisher = fs.createWriteStream(PATH2)

/*subscriber.on('data', (dataChunk) => {
    publisher.write(dataChunk)
    console.log(dataChunk)
})*/
subscriber.pipe(publisher)


const fs = require('fs')

let readStream = fs.createReadStream('./my_test.txt')

// pipe it to stdou
readStream.pipe(process.stdout)

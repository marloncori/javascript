
const fs = require('fs')
let gzip = require('zlib').createGzip()

const inp = fs.createReadStream('./my_test.txt')
const out = fs.createWriteStream('./my_test.gz')

// pipe chain
inp.pipe(gzip).pipe(out)


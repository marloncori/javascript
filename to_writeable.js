const fs = require('fs')
const ws = fs.createWriteStream('message.txt')

ws.write('Nodejs and Deno: which do you choose?')
ws.end(' None of them :D')
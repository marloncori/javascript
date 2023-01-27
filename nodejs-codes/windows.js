const os = require('os')
const cl = require('./colors')

console.log(cl.b+os.type()+cl.f)
console.log(cl.g+os.version()+cl.f)
console.log(cl.r+os.homedir()+cl.f)
console.log(cl.y+os.cpus().toString()+cl.f)

console.log(cl.p+__dirname+cl.f)
console.log(cl.w+__filename+cl.f)
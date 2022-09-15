const connect = require('connect')
const http = require('http')

const app = connect()
const PORT = 3000

http.createServer(app).listen(PORT)
console.log(` Server running on port ${PORT}...`)
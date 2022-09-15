const http = require('http')

const server = http.createServer( (req, res) => {
    console.log(" Request starting...")

    // respond
    res.write(' Hello client!')
    res.end()
})

const PORT = 3000
server.listen(PORT)
console.log(` Server running at http://127.0.0.1:${PORT} ...`)

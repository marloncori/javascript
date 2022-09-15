const http = require('http')

const PORT = 3000
const server = http.createServer( (req, resp) => {
    console.log(' Requesting headers...')
    console.log(req.headers)

    // respond
    resp.write(' Hello again, client.')
    resp.end()
}).listen(PORT)

console.log(` Server running on port ${PORT}`)

// run it
// node inspect_headers.js
// inspect it
// curl http://127.0.0.1:3000 -i
const http = require('http')
const fs = require('fs')

const send404 = (resp) => {
    const NOT_FOUND = 404
    resp.writeHead(NOT_FOUND, { 'Content-Type': 'text/plain'})
    resp.write(' Error 404: Resource not found.')
    resp.end()
}


const PORT = 3000
const server = http.createServer( (req, res) => {
     const OK_STATUS = 200
     if(req.method == 'GET' && req.url == '/'){
        res.writeHead(OK_STATUS, { 'content-type': 'text/html'})
        fs.createReadStream('./public/index.html').pipe(res)
     }
     else {
        send404(res)
     }
}).listen(PORT)

console.log(` Server running on port ${PORT}...`)
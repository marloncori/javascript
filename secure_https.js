// generate a private key
// openssl genrsa 1024 > key.pem

// generate corresponding public key
// openssl req -x509 -new -key key.pem > cert.pem
const https = require('https')
const fs = require('fs')

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

https.createServer(options, (req, res) => {
    res.end(' Https server created. Connection is secure!')
}).listen(443)

// redicrect from http port 80 to https
const http = require('http')
http.createServer( (req, res) => {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url })
    res.end()
}).listen(80)



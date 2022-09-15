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
    res.end(' Https server create. Hello client!')
}).listen(3000)

// test it
// curl https://localhost:3000 -k

const logEvents = require('./logEvents')
const EventEmitter = require('events')
const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

let message = '\n\t This event had to be logged!\n'
class Logger extends EventEmitter {}

const PORT = process.env.PORT || 3500

// create a minial server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    let path
    
    const extension = path.extname(req.url)

    let contentType
    switch (extension) {
        case '.css':
            contentType = 'text/css'
            break
        case '.js':
            contentType = 'text/javascript'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.jpg':
            contentType = 'image/jpeg'
            break
        case '.png':
            contentType = 'image/png'
            break
        case '.txt':
            contentType = 'text/plain'
            break
        default:
            contentType = 'text/html'
    }

    let filePath =
        contentType === 'text/html' && req.url === '/'
           ? path.join(__dirname, 'views', 'index.html')
           : contentType === 'text/html' && req.url.slice(-1) === '/'
             ? path.join(__dirname, 'views', req.url, 'index.html')
               : contentType === 'text/html'
                  ? path.join(__dirname, 'views', req.url)
                  : path.join(__dirname, req.url)
    
    // makes the .html extension not required in the browser
    if(!extension && req.url.slice(-1) !== '/') filePath += '.html'

    const fileExists = fs.existsSync(filePath)

    if(fileExists){
        //serve the existing file
    } else {
        //404 (not found) or 301 (redirect)
        console.log(path.parse(filePath))
    }
    /* IF statements of a Switch case could be good options
    but they would get to long if there many paths and files
    to be serverd. Apart from that, this is statis, not dynamic
    if(req.url === '/' || req.url === 'index.html') {
        res.statusCode = 200 // successful
        res.setHeader('Content-Type', 'text/html')
        path = path.join(__dirname, 'views', 'index.html')
        fs.readFile(path, 'utf8', (err, data) => {
            res.end(data)
        })
    }*/
})

server.listen(PORT, () => {
    console.log(`\n\t Server running on port: ${PORT}...`)
})
/*const emitter = new Logger()
emitter.on('log', (msg) => {
    logEvents(msg)
})
const delay = (time) => {
    return new Promise(r => setTimeout(r, time));
}
const start_emission = async () => {
     emitter.emit('log', message)
     await Promise.all([delay(1500), delay(1500)]);
}
start_emission().then("\n\t Everything has been successfully concluded!")*/
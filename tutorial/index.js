const logEvents = require('./logEvents')
const EventEmitter = require('events')
const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromises = require('fs').promises

let message = '\n\t This event had to be logged!\n'
class Logger extends EventEmitter {}
const web_logger = new Logger()

web_logger.on('log', (msg, fileName) => {
    logEvents(msg, fileName)
})

const PORT = process.env.PORT || 3500

const serveFile = async (filePath, contentType, response) => {
    try {
        const rawData = await fsPromises.readFile(filePath, 
            !contentType.includes('image') ? 'utf-8' : '')
        const data = contentType === 'application/json'
            ? JSON.parse(rawData) : rawData
        response.writeHead(
            filePath.includes('404.html') ? 404 : 200, {'Content-Type': contentType})
        response.end(
            contentType === 'application/json' ? JSON.stringify(data) : data
        )
    } catch(err) {
        console.log(err)
        web_logger.emit('log', `${err.name}: t${err.message}`, 
        'errLog.txt'
        )
        response.statusCode = 500 //serve error, if we can 
        response.end()            // not read the data
    }
}
// create a minial server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    web_logger.emit('log', `${req.url}\t${req.method}`, 
        'reqLog.txt'
    )
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
        serveFile(filePath, contentType, res)
    } else {
        //404 (not found) or 301 (redirect)
        switch(console.log(path.parse(filePath).base)){
            case 'old-page.html':
                res.writeHead(301, {'Location': '/new-page.html'})
                res.end()
                break
            case 'www-page.html':
                res.writeHead(301, {'Location': '/'})
                res.end()
                break
            default:
                // serve a 404 response
                serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res)
        }
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
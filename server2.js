const http = require('http')
const fs = require('fs')

const send404 = (resp) => {
    const NOT_FOUND = 404
    resp.writeHead(NOT_FOUND, { 'Content-Type': 'text/plain'})
    resp.write(' Error 404: Resource not found.')
    resp.end()
}

const mimeLookup = {
    '.js': 'application/javascript',
    '.html': 'text/html'
}

const server = http.createServer( (req, res) => {
     const OK_STATUS = 200
     if(req.method == 'GET'){
         // resolv efile path to filesystem path
         let fileURL
         if(req.url == '/') fileURL = 'index.html'
         else fileURL = req.url
         const filePath = path.resolve('./public' + fileURL)
     
          const fileExt = path.extname(filePath)
          const mimeType = mimeLookup[fileExt]

          if(!mimeType){
            send404(res)
             return
          }

        fs.exists(filePath, (exists) => {
            if(!exists){
                send404(res)
                return 
            }

            // finally stream the file
            res.writeHead(200, { 'content-type': mimeType})
            fs.createReadStream(filePath).pipe(res)
        })
    } else {
        send404(res)
    }
})


const PORT = 3000

server.listen(PORT)
console.log(` Server running on port ${PORT}...`)


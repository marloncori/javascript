const { read } = require('fs')
const HTTP = require('http')

class HomeServer {
    port = 3000
    server = undefined
    open = () => {
        console.log(" [NGINX INFO] Server successfully created!")
        this.server = HTTP.createServer((req, res) => {
            if(req.url === '/') {
                res.write('  [NGINX] Hello, master Marlon The Developer!')
                res.end()
            }
            if(req.url == '/api/courses') {
                res.write(JSON.stringify(['C++', 'Rust', 'Python', 'Java', 'Go', 'JavaScript', 'TypeScript', 'Haskell', 'Kotlin', 'Lua', 'Ruby', 'Lisp']))
                res.end()
            }
        })
       
    }

    connect = (cmd) => {
        this.server.on(cmd, (socket) => {
            console.log(`\n\t Listening on port ${this.port}...`)
        })
    }

    serve = () => {
        this.server.listen(this.port)
        console.log(`  [NGINX LOG] Please open your browser and type in: \n  \'http://localhost:${this.port}\' to start session...`)
    }

}
//this will be an event emitter
module.exports = HomeServer
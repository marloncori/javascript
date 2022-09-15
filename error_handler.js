
const PORT = 3000
const connect = require('connect')

connect()
    .use( (req, res, next) => { next( new Error(' An unexpected error has happened!')) })
    .use( (req, res, next) => { res.end('this will never get called...')})
    .use( (err, req, res, next) => {
         console.log(' Error handled:', err.message)
         console.log('Stacktrace: ', err.stack)
         res.writeHead(500)
         res.end('Unable to process the request.')
    })
    .listen(PORT)
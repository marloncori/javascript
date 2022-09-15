
const PORT = 3000
const connect = require('connect')

connect()
    .use( (req, res, next) => { next(' An unexpected error has happened!') })
        .use( (req, res, next) => { res.end('this will never get called...')})
           .listen(PORT)
const connect = require('connect')

const app = connect()
        //register a middleware
        .use( (req, res, next) => { next() })
        .listen(3000)

console.log(` Server running on port ${PORT}...`)
const connect = require('connect')
const util = require('util')

const port = 3000
const logit = (req, res, next) => {
    util.log(util.format(' Request received: %s, %s', req.method, req.url))
    next()
}

connect()
    .use(logit)
    .listen(port)
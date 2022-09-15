
const echo = (req, res, next) => {
    req.pipe(res)
}

const port = 3000
const connect = require('connect')

connect()
    .use(echo)
        .listen(port)
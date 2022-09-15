
const connect = require('connect')

const echo = (req, res, next) => {
    req.pipe(res)
}

const port = 3000
connect()
    .use('/echo', echo)
        .use( (req, res) => { res.end('Jesus is the King!')})
            .listen(port)
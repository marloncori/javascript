
const echo = {
    handle: (req, res, next) => {
        req.pipe(res)
    }
}

const connect = require('connect')

connect()
    .use(echo)
        .liste(3000)

        
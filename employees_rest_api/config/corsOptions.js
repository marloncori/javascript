const corsOptions = {
    origin: (origin, callback) => {
        let whitelist = ['https://duckduckgo.com/', 'http://127.0.0.1:5500', 'http://localhost:3500', 'http://www.google.com']

        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true) // the origin is sent back
        } else {
            callback(new Error('Not allowed by CORS!'))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions
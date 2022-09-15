
const parseJSON = (req, res, next) => {
    if(req.headers['content-type'] == 'application/json'){
        //load all data
        let readData = ''
        req.on('readable', () => {
            readData += req.read()
        })
        //try to parse
        req.on('end', () => {
            try {
                req.body = JSON.parse(readData)
            }
            catch(e) { }
            next()
        })
    }
    else {
        next()
    }
}

const connect = require('connect')

connect()
    .use(parseJSON)
        .use( (req, res) => {
            if(req.body) {
                res.end('JSON parsed! Value of item: ' + req.body.item, )
            }
            else {
                res.end(' No JSON detected')
            }
        })
         .listen(3000)

    //run it like this:
    //curl http://127.0.0.1:3000/ -H "content-type: application/json" -d "{\"foo\":123}"
const connect = require('connect')

const greeter = (msg) => {
    return (req, res, next) => {
        res.end(msg)
    }
}

const helloNodejs = greeter('Hello, Nodejs!')
const heyThere = greeter('Hey there!')

connect()
    .use('/hello', helloNodejs)
       .use('/hey', heyThere)
           .listen(3000)

           
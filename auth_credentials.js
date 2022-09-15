
const authorize = (req, res, next) => {
   const send401 = () => {
     res.writeHead(401, { 'WWW-Authenticate': 'Basic'})
     res.end()
   }

   const authHeader = req.headers.authorization
   if(!authHeader){
     send401()
     return 
   }

   const auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':') 
   const user = auth[0]
   const pass = auth[1]

   if(user == 'marlon' && pass == '98765'){
       next()
   }
   else {
     send401()
   }
}

const PORT = 3000
const connect = require('connect')

connect()
    .use(auth)
       .use( (req, res) => { res.end(' Access granted!') })
           .listen(PORT)


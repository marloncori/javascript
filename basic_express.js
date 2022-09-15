
const express = require('express')
const http = require('http')

// register middleware
const app = express()
            .use( (req, res, next) => {
                res.end(' Hi there, express.')
            })

http.createServer(app)
      .listen(3000)

      // or
//const app = express()
//            .use( (req, res, next) => {
//                res.end(' Hi there, express.')
//           })
//            .listen(3000)
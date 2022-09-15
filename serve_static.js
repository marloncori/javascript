const express = require('express')
const serveStatic = require('serve-static')

const app = express()
             .use(serveStatic(__dirname + '/public'))
              .listen(3000)

              //or
// const app = expres()
//              .use(serveStatic(__dirname + 'public', {'index': ['default.html', 'default.htm']}))


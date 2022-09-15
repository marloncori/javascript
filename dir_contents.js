
const express = require('express')
const serveIndex = require('serve-index')

const app = express()
              .use(express.static(__dirname + '/public'))
               .use(serveIndex(__dirname + '/public'))
                .listen(3000)

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
            .use(bodyParser())
            .use( (req, res) => {
                if(req.body.item){
                 res.end('Body successfully parse, value of item: ' + req.body.item)
                } else {
                    res.end('Body does not have anything.')
                }
            })
            .use((err, req, res, next) => {
                res.end(' Invalid body!')
            })
            .listen(3000)

const express = require('express')

const app = express()
app.all('/', (req, res, next) => {
    res.write(' All\n')
    next()
})
app.get('/', (req, res, next) => {
    res.write(' Get\n')
    next()
})
app.post('/', (req, res, next) => {
    res.write(' Post\n')
    next()
})
app.put('/', (req, res, next) => {
    res.write(' Put\n')
    next()
})
app.delete('/', (req, res, next) => {
    res.write(' Delete\n')
    next()
})

app.listen(3000)

//test it
// curl -X GET http://127.0.0.1:3000
// curl -X PUT http://127.0.0.1:3000
// curl -X POST http://127.0.0.1:3000
// curl -X DELETE http://127.0.0.1:3000


const express = require('express')

const app = express()
app.route('/')
  .all( (req, res, next) => {
    res.write(' All\n')
    next()
})
  .get( (req, res, next) => {
    res.write(' Get\n')
    next()
})
  .post( (req, res, next) => {
    res.write(' Post\n')
    next()
})
  .put( (req, res, next) => {
    res.write(' Put\n')
    next()
})
  .delete( (req, res, next) => {
    res.write(' Delete\n')
    next()
})

app.listen(3000)

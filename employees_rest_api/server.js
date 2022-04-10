const path = require('path')
const cors = require('cors')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const corsOptions = require('./config/corsOptions')
const express = require('express')
const { areIntervalsOverlappingWithOptions } = require('date-fns/fp')

const app = express()
const PORT = process.env.PORT || 3500
//or app.set('port', process.env.PORT || 3500)

app.use(cors(corsOptions))

app.use(logger)
//built-in middleware to handle url-encoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ entended: false}))
// middleware for json
app.use(express.json())
// server static files
app.use('/', express.static(path.join(__dirname, 'public')))

app.use('/subdir', express.static(path.join(__dirname, 'public')))

// get access to index.html. table.html, new-page.html and redirect
app.use('/', require('./routes/root'))
// get access to subdir/index.html, test.html, jqery.html
app.use('/subdir', require('./routes/subdir'))

// RESTful API
app.use('/employee', require('./routes/api/employee'))
//midware function with NEXT
app.get('/hello(.html)?', (req, res, next) => {
    console.log("\n\n\t\t Attempted to load \'hello.html\'")
    next()
}, (req, res) => {
    res.send('\n\t\t Hello Nodejs and Express!')
})

const one = (req, res, next) => {
    console.log("\tHandler one called!")
    next()
}

const two = (req, res, next) => {
    console.log("\t\tHandler two called!")
    next()
}

const three = (req, res, next) => {
    console.log("\t\t\tHandler three called!")
    next()
}

const four = (req, res) => {
    console.log("\t\t\tFourth handler called!")
    res.send("\n\n\t Handler calling finished!")
}

app.get('/chain(.html)?', [one, two, three, four])
// route handlers

app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ error: "404 : Page Not Found"})
    } else {
        res.type('txt').send("404 : Oops, somethig went wrong... Sadly, page has not been found.")
    }
})
// error handler
app.use(errorHandler)
//or app.get('port')
app.listen(PORT, () => {
    console.log(`\n\t Server running on port ${PORT}...`)
})


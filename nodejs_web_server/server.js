const path = require('path')
const cors = require('cors')
const { logger } = require('./middleware/logEvents')
const errorHandler = require('./middleware/errorHandler')
const express = require('express')
const { areIntervalsOverlappingWithOptions } = require('date-fns/fp')

const app = express()
const PORT = process.env.PORT || 3500
//or app.set('port', process.env.PORT || 3500)

const whitelist = ['https://duckduckgo.com/', 'http://127.0.0.1:5500', 'http://localhost:3500', 'http://www.google.com']

const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true) // the origin is sent back
        } else {
            callback(new Error('Not allowed by CORS!'))
        }
    },
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(logger)
//built-in middleware to handle url-encoded data
// in other words, form data:
// 'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ entended: false}))
// middleware for json
app.use(express.json())
// server static files
app.use(express.static(path.join(__dirname, 'public')))

app.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname})
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/table(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'boostrap_table.html'))
})

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page(.html)?', (req, res) => { // 301 is needed
    res.redirect(301, '/new-page.html') // 302 by default is sent
}) // 301 = permanently moved to a new page

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


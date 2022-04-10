const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname})
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

router.get('/table(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'boostrap_table.html'))
})

router.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'new-page.html'))
})

router.get('/old-page(.html)?', (req, res) => { // 301 is needed
    res.redirect(301, '/new-page.html') // 302 by default is sent
}) // 301 = permanently moved to a new page

module.exports = router
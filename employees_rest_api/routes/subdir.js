const express = require('express')
const { appendFile } = require('fs')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'index.html'))
})

router.get('/test(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'test.html'))
})

router.get('/jquery(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'subdir', 'jquery.html'))
})

module.exports = router
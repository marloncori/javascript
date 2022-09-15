const express = require('express')
const app = expres()

app.param('userId', (req, res, next, userId) => {
    res.write(` Looking up user: ${userId} in database\n`)
    req.user = { userId: userId }
    next()
})

app.get('/user/:userId', (req, res) => {
    res.end(' User is: ' + JSON.stringify(req.user))
})
app.listen(3000)
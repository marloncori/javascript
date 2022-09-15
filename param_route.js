
const express = require('express')
const app = express()

app.get('/user/:userId', (req, res) => {
    res.send('   ---> userId is: ' + req.params['userId'])
})
app.listen(3000)

//test it 
//curl http://127.0.0.1:3000/user/123
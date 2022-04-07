const HomeServer = require('./http-app')
const nginx = new HomeServer()

nginx.open()
nginx.connect('connection')
nginx.serve()


const connect = require('connect')

connect()
  .use((req, res, next) => { next()})
  .use((err, req, res, next) => { res.end(' Error!!!!')})
  .use((req, res, next) => { res.end(' No error :)')})
  .listen(3000)
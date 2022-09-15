
const EventEmitter = require('events').EventEmitter
const emitter = new eventEmitter()

emitter.emit('error', new Error('Something went really wrong'))
console.log('This never executes')



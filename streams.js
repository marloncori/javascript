const stream = require('stream')
const EventEmitter = require('events').EventEmitter

console.log(new stream.Stream() instanceof EventEmitter) // true

console.log(new stream.Writeable() instanceof EventEmitter) // false
console.log(new stream.Readable() instanceof EventEmitter)  // false
console.log(new stream.Duplex() instanceof stream.Stream) // true
console.log(new stream.Transform() instanceof stream.Stream) // true


const cl = require('./colors')
const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('loggedMsg', (msg) => {
    // raising an event with a listener
    let line = cl.p+'\n----------------------------------------\n'+cl.f
    console.log(`${line}\tA messsage has been logged!\n\'${msg}\'${line}`)
})

emitter.emit('loggedMsg', cl.r+'\tRoom temperature: 22.1*C'+cl.f)
emitter.emit('loggedMsg', cl.b+'\tRoom temperature: 23.8*C'+cl.f)
emitter.emit('loggedMsg', cl.g+'\tRoom temperature: 24.9*C'+cl.f)

emitter.emit('loggedMsg', cl.w+'\tRoom temperature: 25.0*C'+cl.f)
emitter.emit('loggedMsg', cl.c+'\tRoom temperature: 26.3*C'+cl.f)
emitter.emit('loggedMsg', cl.y+'\tRoom temperature: 24.7*C'+cl.f)

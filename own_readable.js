const Readable = require('stream').Readable
const util = require('util')

const Counter = () => {
    Readable.call(this)
    this._max = 1000
    this._index = 1
}
util.inherits(Counter, Readable)

Counter.prototype._read = () => {
    let i = this._index++
    if(i > this._max){
         this.push(null)
    } else {
       let str = ' ' + i
       this.push(str)
    }
}

const counter = new Counter()
counter.pipe(process.stdout)


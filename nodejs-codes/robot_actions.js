const print = require('./print')

const robot = {
  readSensor: (state) => {
    console.log(` CURRENT STATE: ${JSON.stringify(state)}`)
     print(" >> Checking analog sensors...")
  },

  moveForward: (state) => {
    console.log(` CURRENT STATE: ${JSON.stringify(state)}`)
     print(" >> Robot is moving forward!")
  },

  avoidObstacle: (state) => {
     console.log(` >> CURRENT STATE: ${JSON.stringify(state)}`)
     print(" !!! Robot is avoiding the obstacle!")
  },

  slowDown: (state) => {
     console.log(` CURRENT STATE: ${JSON.stringify(state)}`)
     print("  ---> Robot is slowing down a bit...")
   },

   run: (funct, arg) => {
        funct(arg)
   }
}

module.exports = robot
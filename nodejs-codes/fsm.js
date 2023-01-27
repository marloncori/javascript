// example of FINITE STATE MACHINE
const robot = require('./robot_actions')
const state = require('./states')
const print = require('./print')

// sample ENUM of enum
const actions = [
    state.WAIT,
    state.CHECK,
    state.RESET,
    state.TRIGGERED,
    state.CHECK,
    state.RESET,
    state.WAIT,
    state.TRIGGERED,
    state.WAIT
]

const FSM = (st) => {
    switch(st) {
        case 'CHECKING':
            robot.readSensor(state.CHECK)
            break;
        case 'WAIT':
            robot.avoidObstacle(state.WAIT)
            break;
        case 'TRIGGERED':
            robot.moveForward(state.TRIGGERED)
            break;
        case 'RESET':
            robot.slowDown(state.RESET)
            break;
    }
}

const delay = (time) => {
    return new Promise(r => setTimeout(r, time));
}

const robot_start = async () => {
    for(let action of actions){
        robot.run(FSM, action)            
        await Promise.all([delay(2500), delay(2500)]);
    }
}

try {
    robot_start()
} catch(error) {
    print(error)
} 
  print("\n\t Program has been successfully executed!")


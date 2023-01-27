const robot = require("./robot_actions");

actions = [
    'CHEKING',
    'WAIT',
    'TRIGGERED',
    'RESET'
]

const FSM = (state) => {
    switch(state){
        case 'CHEKING':
            robot.readSensor(state)
            break
        case 'WAIT':
            robot.avoidObstacle(state)
            break
        case 'TRIGGERED':
            robot.moveForward(state)
            break
        case 'RESET':
            robot.slowDown(state)
            break
    }
}

const delay = (time) => {
    return new Promise(r => setTimeout(r, time));
}

const ros_run = async (time) => {
    for(let action of actions){
        robot.run(FSM, action)            
        await Promise.all([delay(time), delay(time)]);
    }
}

ros_run(2000)
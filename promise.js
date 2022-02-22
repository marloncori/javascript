
const onFullfillment = (result) => {
     console.log(result)
     console.log(" The robot is still freely moving forward!")
     console.log("------------------------------------------")
}

const onFailure = (error) => {
    console.log(error)
    console.log(" The robot has stopped and is getting sensor readings.")
    console.log("------------------------------------------------------")
}

const moveOrStop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("[incoming message from HC-SR04 ultrassound sensor] \'The current distance to object is 1 meter.\'")
    }, 10000)
})

moveOrStop.then(onFullfillment)
moveOrStop.catch(onFailure)
//returns [incoming message from HC-SR04 ultrassound sensor] 'The current distance to object is 1 meter.'
VM825:3  The robot is still freely moving forward!
VM825:4 ------------------------------------------

const moveOrStop = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("[incoming message from HC-SR04 ultrassound sensor] WARNING: The distance to object is only 10 centimeters!!!")
    }, 10000)
})

moveOrStop.then(onFullfillment)
moveOrStop.catch(onFailure)

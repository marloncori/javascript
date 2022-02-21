
const getDistance = (number) => {
     console.log("The distance to obstacle is " + number + " meters.")
}

function read_HC_SR04_Sensor(getReading){
    let dist = 3
    getReading(dist)
}

read_HC_SR04_Sensor(getDistance)

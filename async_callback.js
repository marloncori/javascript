const sensorType = (value, func1, func2) => {
   if(value === 0 || value === 1){
      setTimeout(func1, 2000, value);
   } else {
      setTimeout(func2, 2000, value);
   }
}

const digitalSensor = (reading) => {
    var logic
    if(reading == 0){
       logic = "false";
    } else {
       logic = "true";
    }
    console.log("The sensor is digital and its state equals " + reading + ", that is, " + logic + ".")
}

const analogSensor = (reading) => {
    console.log("The sensor is analogic and its reading is " + reading + " at the moment.")
}

let digitalState = 1;

let analogReading = 897;

sensorType(digitalState, digitalSensor, analogSensor)
//returns "The sensor is digital and its state equals 1, that is, true."

sensorType(analogReading, digitalSensor, analogSensor)
//returns "The sensor is analogic and its reading is 897 at the moment."

const { profileEnd } = require("console")

const Robot = {
     name: '',
     wheels: 0,
     maker: '',
     model: '',
     year: 0,
     price: 0,
     speed: 0,

    setName: (value) => {
        if (value === undefined) console.log('Number of wheel must be defined!')
        this.name = value
    },

    setWheels: (value) => {
        if (value === undefined) console.log('Number of wheel must be defined!')
        this.wheels = value
    },
    
    setMaker: (value) => {
        if (value === undefined) console.log('Name of maker must be defined!')
        this.maker = value
    },

    setModel: (value) => {
        if (value === undefined) console.log('Model of robot must be defined!')
        this.model = value
    },

    setYear: (value) => {
        if (value === undefined) console.log('Year of production must be defined!')
        this.year = value
    },

    setPrice: (value) => {
        if (value === undefined) console.log('Price of robot must be defined!')
        this.price = value
    },

    setSpeed: (value) => {
        if (value === undefined) console.log('Name of maker must be defined!')
        this.speed = value
    },

    move: (cmd, time) => {
        switch(cmd) {
            case 'f':
                console.log(`\n[ROS INFO] Received command: ${cmd}`)
                console.log(`===> ${this.name} is moving forward \n  for ${time} seconds! ::::`)
                break
            case 'b':
                console.log(`\n[ROS INFO] Received command: ${cmd}`)
                console.log(`===> ${this.name} is moving backward \n  for ${time} seconds! ::::`)
                break
           case 'r': 
                console.log(`\n[ROS INFO] Received command: ${cmd}`)
                console.log(`===> ${this.name} is turning right \n  for ${time} seconds! ::::`)
                break
           case 'l': 
                console.log(`\n[ROS INFO] Received command: ${cmd}`)
                console.log(`===> ${this.name} is turning left \n  for ${time} seconds! ::::`)
                break
           case 's':
                console.log(`\n[ROS INFO] Received command: ${cmd}`)
                console.log(`===> ${this.name} is halting. \n It will be stopped for ${time} seconds! ::::`)
                break
           default: 
                console.log(`\n[ROS INFO] No command has been received`)
                console.log(`===> ${this.name} is waiting for instructions. ::::`)
                break
        }
    },
 
    show: () => {
        let line = '\n\t+++++++++++++++++++++++++++++++++++++\n'
        console.log(`${line}\t ROBOT NAME: ${this.name} \n\t NUM OF WHEELS: ${this.wheels} \n\t ROBOT MODEL: ${this.model} \n\t ROBOT MAKER: ${this.maker} \n\t YEAR OF PROD.: ${this.year} \n\t ROBOT PRICE: ${this.price} \n\t MAX SPEED: ${this.speed} ${line}`)
    },
}

module.exports = Robot
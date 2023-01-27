
class Shop {
    constructor(){}
    construct = (builder) => {
        builder.step1()
        builder.step2()
       return builder.get()
    }
}

class CarBuilder {
    constructor(){
        this.car = null
    }

    step1 = () => {
        this.car = new Car()
    }

    step2 = () => {
        this.car.addParts()
    }

    get = () => {
        return this.car
    }
}

class TruckBuilder {
    constructor(){
        this.truck = null
    }

    step1 = () => {
        this.truck = new Truck()
    }

    step2 = () => {
        this.truck.addParts()
    }

    get = () => {
       return this.truck
    }
}

class Car {
    constructor(){
        this.doors = 0
    }
      addParts = () => {
            this.doors = 4
      }
      
      say = () => {
          console.log("I am a " + this.doors + "-door car")
      }
}

class Truck {
    constructor(){
        this.doors = 0
    }

    addParts = () => {
        this.doors = 2
    }

    say = () => {
        console.log("I am a " + this.doors + "-door truck")
    }
}

const run = () => {
    const shop = new Shop()
    const carBuilder = new CarBuilder()
    const truckBuilder = new TruckBuilder()
    const car = shop.construct(carBuilder)
    const truck = shop.construct(truckBuilder)

    car.say()
    truck.say()
}

try{
    run()
} catch(error){
    console.log(error)
}
function Car(brand, model, year){
     this.brand = brand;
     this.model = model;
     this.year = year;
     this.showCar = function(){
        console.log(ln + "car maker: " + this.brand + "\ncar model: " + this.model + "\ncar year: " + this.year + ln);
     }
}

var jeep = new Car("Jeep", "Wrangler", 1997);
var dodge = new Car("Dodge", "Viper", 2000);

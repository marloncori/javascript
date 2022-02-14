//deklaracja literałów

var carPlant = {
     producedCars: 0,
     carsArr: [],
     makeCar: function(brand, model, year){
         var car = {
           brand: brand,
           model: model,
           year: year
         };
       
       this.producedCar++;
       this.carsArr.push(car);
       return car;
     },
  
    printStats: function(){
      alert(" You have produced " + this.producedCars + " up to now!");
      for(let i=0; i< this.carsArr.lenght; i++){
          console.log(this.carsArr[i] + "\n"); 
      }
    }
};

//use the the class-variable to instantialize objects

carPlant.makeCar("Jeep", "Wrangler", 1997);
carPlant.makeCar("Chevet", "Chevrolet", 1968);
carPlant.makeCar("Dodge", "Viper", 1995);

let shoppingCart = {
    items: [],
    total: 0,
    add: function(name, price){
       this.items.push({
         name: name,
         price: price
       });
      this.total++;
    },
  
   removeById: function(i){
      if(i >= this.items.length){
        alert("The index is out of range!");
        return;
      }
      this.items.splice(i, 1);
   },
  
   showProducts: function(){
      console.log(" There are " + this,total + " products in the car up to now.");
      if(this.items.length != null){
         for(let i=0; i<this.items.length; i++){
           let elem = this.items[i];
           console.log(ln + " >> item #" + (i+1) + ": " + elem.name + "\n price: " + elem.price + "zŁ." + ln);
         }
      }
   },
  
   printInfo: function(){
     let finalPrice = 0;
     for(let j=0; j<this.items.length; j++){
        let element = this.items[j];
        finalPrice += element.price;
        console.log(" The total price to be paid up to now is -->> " + finalPrice + " zŁ");
     }
   }
};



class numpy {
    constructor(){}

    randomWeight(){
        return Math.random() * 0.4 - 0.2
      }
      
    zeros(size){
        let array = new Array(size);
        for (let i = 0; i < size; i++) {
          array[i] = 0
        }
      return array
    }

   randos(size){
     let array = new Array(size);
     for (let i = 0; i < size; i++) {
       array[i] = this.randomWeight()
     }
     return array
    }
 
    mse(errors){
     // mean squared error
     let sum = 0
     for(let i = 0; i < errors.length; i++){
        sum += Math.pow(errors[i], 2)
     }
      return sum / errors.length
    }
    
    sigmoid(value){
        return 1 / (1 + Math.exp(-value))
    }
}

module.exports = numpy





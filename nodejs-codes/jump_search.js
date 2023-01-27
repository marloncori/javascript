
const JumpSearch = ({ array, query, size}) => ({
  array,
  query,
  size,
  
  newQuery (number) {
      this.query = number
  },
  
  start () {
      let step = Math.sqrt(this.size)
      // find the block where element is
      // present if it is present
      let previous = 0
      while (this.array[Math.min(step, this.size)-1] < this.query){
          previous = step
          step += Math.sqrt(this.size)
          if (previous >= this.size){
              return -1;
          }
      }
         // doing a linear search for query in block
         // beginning with previous
         while (this.array[previous] < this.query){
              previous++
              //if we reached next block or end of
              // array, element is not present.
              if (previous == Math.min(step, this.size)){
                  return -1;
              }
          }
        if (this.array[previous] == this.query){
             return previous
        }
      return -1;
   },

   showResult (value) {
       let line = "\n============================================\n"
       if (value < 0) {
           console.error(` ${line} The searched number ${this.query} has not been found! ${line}`)
       }
       console.log(`${line} The number ${this.query} has been \n found at the index # ${value}. ${line}`)
   }

});

module.exports = JumpSearch
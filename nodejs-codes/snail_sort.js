
const SnailSort = ({array}) => ({
    array,

    before(){
        console.log(` Now this is the unsorted array: ${this.array}.`)
    },

    start(){
        let size = this.array.length
        let sorted = []
        while(size) {
            sorted.push(this.array.shift())
            for(let i=0; i<size; i++){
                sorted.push(this.array[i].pop())
            }
            sorted.push((this.array.pop() || []).reverse())
            for(let i=size-1; i>=0; i--){
                sorted.push(this.array.shift())
             }
        }
        return sorted
    },

    after(){
        console.log(`And this is the sorted array: ${this.array}.`)
    }
})

module.exports = SnailSort
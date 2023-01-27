
class BinarySearch {

        index = 0
        element = 0
        begin = 0
        end = 0
        array = []

        search = (array, begin, end, element) => {
            this.begin = begin
            this.end = end
            this.element = element
            this.array = array
            if(this.end >= this.begin) {
                let mid = this.begin + Math.floor((this.end-1)/2)
                this.index = mid

                if(this.array[mid] === this.element){
                    return this.index
                }
                if(this.array[mid] > this.element){
                    return this.search(this.array, this.begin, this.index-1, this.element)
                }
                return this.search(this.array, this.index+1, this.end, this.element)
            }
            return -1
        }

        show = (result) => {
            if(result === -1){
                console.log("---------------------------------\n")
                console.log("  Element has not been found in list.")
                console.log("---------------------------------\n")
            } else {
                console.log("\t-----------------------------------------------------\n")
                console.log(`\t Element ${this.element} is located at index ${result}.`)
                console.log("\t------------------------------------------------------\n")
            }
        }
}

module.exports = BinarySearch
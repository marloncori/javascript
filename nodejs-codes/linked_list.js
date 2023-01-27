const print = require('./print')

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList{
        constructor(){
            this.head = null
            this.tail = null
            this.length = 0
        }
    
       insert(value) {
            this.length++
            let node = new Node(value)
            if (this.tail) {
                this.tail.next = node
                this.tail = node
                console.log("\t inserted --> values: " + JSON.stringify(node))
               return this
            }
            this.head = this.tail = node
            return this             
        }
    
        show() {
            let current = this.head
            while(current){
                print(`\t current.value: ${current.value}`)
                current = current.next        
            }
           return this
        }
        
        size() {
            print("\n\t Linked list length after removal --> " + this.length.toString())
            return this
        }

        remove() {
            if(this.isEmpty()){
                console.log(" STOP!!! Cannot remove anything, since the list is already empty!")
                return 
            } else {
              if(this.tail){
                 this.length--
                 const tailNode = this.tail
                 // search for the node before tail
                 let currentNode = this.head
                 // The while loop stops when the node next to tail node is found
                 if(currentNode.next == null){
                    return this.isEmpty()
                 }
                 while (currentNode.next != tailNode) {
                    currentNode = currentNode.next
                 }
                 const beforeTail = currentNode
                 this.tail = beforeTail
                 this.tail.next = null

                 return this
              }
            }
            return undefined
        }

        isEmpty(){
            if(this.length == 0){
                return true
            }
            return false
        }

        insertHead(value){
            this.length++
            let node = new Node(value)
            if(this.head){
                node.next = this.head
                this.head = node
                console.log("\n\t appended to the beginning ==>> \n\t value: " + JSON.stringify(this.head))
                return this
            }
            this.head = this.tail = node
            return this
        }
        
        removeHead() {
            if(this.isEmpty()){
                console.log(" STOP!!! Cannot remove anything, since the list is already empty!")
                return 
            }
            if (this.head) {
               this.length--
               const removedNode = this.head
               this.head = this.head.next
               print(" >>> removed node: " + JSON.stringify(this.head))
               return this
            }
            return this
        }

        insertIndex(value, index){
            if(!value || !index){
                throw new Error(
                    " >>> Neither VALUE nor INDEX params cannot be null!"
                )
            }
            if(index >= this.length){
                throw new Error(
                    " Insert index out of bounds!!!"
                )
            }
            if(index == 0){
                this.insertHead(value)
                return this
            }
            let prevNode = null
            let curNode = this.head
            for(let i=0; i<index; i++){
                prevNode = curNode
                curNode = curNode.next
            }
            const newNode = new Node(value)
            newNode.next = curNode
            prevNode.next = newNode
            this.length++
            return this
        }

        removeIndex(index){
            if(!index){
                throw new Error(
                    " >>>>  INDEX params cannot be null!"
                )
            }
            if(index >= this.length){
                throw new Error(
                    " Insert index out of bounds!!!"
                )
            }
            if(index == 0){
                this.removeHead()
                return this
            }
            let previousNode = null
            let currentNode = this.head
            for(let i = 0; i < index; i++) {
                previousNode = currentNode
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next
            this.length--
            print(` >>>>  Removed value from INDEX # ${index}!`)
            return this
        }
}

const node = new LinkedList()
        node.insert(true)
         .insert(20)
            .insert(34)
                .insert("Linked List")
                    .insert(false)
                        .insert(3.45)
                            .insert('M')
                                .insert(0.000089)
                                    .show()

print("\t Linked list length --> " + node.size().toString())
    
    node.remove()
    print("\t Linked list length after removal --> " + node.size().toString())
    node.remove().show()
    print("\t Linked list length after removal --> " + node.size().toString())
    node.remove().show()
    print("\t Linked list length after removal --> " + node.size().toString())
    node.remove()
    print("\t Linked list length after removal --> " + node.size().toString())
    node.remove().show()
    print("\t Linked list length after removal --> " + node.size().toString())
    node.remove()
    print("\t Linked list length after removal --> " + node.size().toString())
    node.remove()
    print("\t Linked list length after removal --> " + node.size().toString())

    node.remove()
    node.remove()
    if(node.isEmpty()){
        print(" The linked list is empty!")
        print("\t Linked list length after removal --> " + node.size().toString())
    }
    node.insert(true)
    .insert(20)
       .insert(34)
           .insert("Linked List")
               .insert(false)
                   .insert(3.45)
                       .insert('M')
                           .insert(0.000089)

    node.insertHead("Jesus Christ")
            .insertHead(777)
                .insertHead(47.0025)
                    .insertHead(true)

    node.removeHead()
        .removeHead().removeHead().removeHead()
        .removeHead()
        .removeHead().removeHead().removeHead()
        .removeHead().size()
    
    node.insertIndex(20, 1).show()
    node.insertIndex("Yeshua", 3).show()

    let sbrubles = 12224
    try{
        node.removeHead()
        .insertIndex(670, 2).show().size()
    }catch(error){
        console.error(error)
    }

    node.removeIndex(1).size().show()
    print(" ----->> Is list empty? " + node.isEmpty())

const Task = (
    name, description, finished, dueDate
) => {
    this.name = name
    this.description = description
    this.finished = finished
    this.dueDate = dueDate

    console.log(`\n\tsetName: (value) => {\n
            \t\t${this.name}\n
            \t\treturn this\n
        \t},\n
        \tsetDescription: (value) => {\n
            \t\t${this.description}\n
            \t\treturn this\n
        \t},\n
        \tsetFinished: (value) => {\n
            \t\t${this.finished}\n
            \t\treturn this\n
        \t},\n
        \tsetDueDate: (value) => {\n
            \t\t${this.dueDate}\n
            \t\treturn this\n`)
}

class TaskBuilder {
    constructor(){
         this.name = undefined
         this.description = undefined
         this.isFinished = false
         this.dueDate = undefined
         this.task = undefined
    }
     setName = (value) => {
         this.name = value
         return this
     }
     
     setDescription = (value) => {
            this.description = value
            return this
     }
     
     setFinished = (value) => {
         this.finished = value
         return this
     }
      
     setDueDate = (value) => {
         this.dueDate = value
         return this
     }
      
     build = () => {
         this.task = Task(this.name, this.description,
         this.isFinished, this.dueDate)
         return this.task
    }
     
}

my_task = new TaskBuilder().setName(" --> send e-mail")
              .setDescription(" the client is waiting for the info.")
              .setDueDate(new Date(2022, 5, 4)).build()

            
        
        
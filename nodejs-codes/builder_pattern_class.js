
class Person {
    constructor(){
        this.name = undefined
        this.age = undefined
        this.address = undefined
        this.height = undefined
        this.nation = undefined
    }

    setName(value){
        this.name = value
        return this
    }

    setAge(value){
        this.age = value
        return this
    }

    setAddress(value){
        this.address = value
        return this
    }

    setHeight(value){
        this.height = value
        return this
    }

    setNation(value){
        this.nation = value
        return this
    }
    showData(){
        let line = "\n\t=====================================\n\t\t PERSONAL INFORMATION\n\t=====================================\n"
        console.log(
            `\n\t ${line} 
            \n\t\t ${this.name !== undefined ?
                "name: " + this.name : ""}
            \n\t\t ${this.age !== undefined ?
                "age: " + this.age + "years" : ""}
            \n\t\t ${this.address !== undefined ?
                "address: " + this.address : ""}
            \n\t\t ${this.height !== undefined ?
                "height: " + this.height + " m": ""}
            \n\t\t ${this.nation !== undefined ?
                "nation: " + this.nation : ""}
            ${line}`
        )
        return this
    }
}

const human = new Person()
                .setName("Marlon")
                .setAge(35)
                .setAddress("Kilinskiego 14/5, Gliwice")
                .setHeight(1.91)
                .setNation("Brazil")
                .showData()
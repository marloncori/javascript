const print = require('./print')

const predictedClass = {
    top5: [],
    getInput: (value) => {
        this.top5 = value
     
    },
    showPredictionList: () => {
        this.top5.forEach( (p)=>{
           print(p.split(' ')[1]);
         });
     
    }
}

const predictions = [
    "1 Dog 78.405%",
    "2 Cat 89.004%",
    "3 Rabbit 68.741 %", 
    "4 Bug 91.789 %",
    "5 Monkey 99.785 %",
    "6 Flower 88.002 %",
    "7 Fruit 95.423 %"
];

predictedClass.getInput(predictions)
predictedClass.showPredictionList()


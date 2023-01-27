
const predictedClass = {
    top5: [],
    getInput: (value) => {
        this.top5 = value
    },
    appendToPredictionList: () => {
        $("#prediction-list").empty();
        top5.forEach( (p)=>{
        $("#prediction-list").append(`<li>${p.className}: ${p.probability.toFixed(6)}</li>`);
        });
    }
}

const filterClassesByProbability = (predictions) => {
    let topFive = Array.from(predictions)
                    .map( (p, i)=> {
                         return {
                             probability: p,
                             className: IMAGE_CLASSES[i]
                         };    
                    }).sort( (a, b)=> {
                        return b.probability - a.probability;
                    }).slice(0, 5);
    return topFive     
}

const _predictedClass = predictedClass;
export { _predictedClass as predictedClass };
const _filterClassesByProbability = filterClassesByProbability;
export { _filterClassesByProbability as filterClassesByProbability };
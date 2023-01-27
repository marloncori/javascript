
const predictedClass = require('./prediction-helper')
const { imageTransformation, imagePreprocessing } = 
                        require('./preprocessing')

// file for image detection with tensorflow.js
// there is over 500 MB of file to be loaded to the browser
$("#image-selector").change( ()=> {
    let reader = new FileReader()
    reader.onload = () => {
        let dataURL = reader.result
        // this will contain the image.js file
        $("#selected-image").attr("src", dataURL)
        $("#prediciton-list").empty()
    }
    let file = $("#image-selector").prop("files")[0]
    reader.readAsDataURL(file)
});

let model;
(async () => {
    // a promise is returened
    model = await tf.loadModel("http://10.0.0.14:81/tfjs-models/VGG16/model.json")
    $(".progress-bar").hide();
})(); // immediately invoked function expression - IIFE

$("#predict-button").click(async () =>{
    let picture = $("#selected-image").get(0);
    let tensorFromImage = imageTransformation(picture);
    // pre-processing to improve prediction accuracy
    let preprocessedTensor = imagePreprocessing(tensorFromImage);
    // there will be over 1000 elements here
    let predictions = await model.predict(preprocessedTensor).data();
    let topFiveCandidates = filterClassesByProbability(predictions);
    
    predictedClass.getInput(topFiveCandidates);
    predictedClass.appendToPredictionList();
});

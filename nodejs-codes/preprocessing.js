
const imageTransformation = (picture) => {
    let tensor = tf.fromPixels(picture)
                 .resizeNearestNeighbor([224, 224])
                 .toFloat()
                 .expandDims();
    return tensor;
};

const imagePreprocessing = (tensorFromImage) => {
    // zero centering the data
    // reverse the order from RGB to BGR (OpenCV requirement)
    let meanImageNetRGB = {
        red: 123.68,
        green: 116.779,
        blue: 103.939
    };
    let indices = [
        tf.tensor1d([0], "int32"),
        tf.tensor1d([1], "int32"),
        tf.tensor1d([2], "int32")
    ];
    let centeredRGB = {
      //center them by substracting the mean image
      //from each r/g/b value, reshape the tensor to
      // to one dimensional containing the data for each pixel
        red: tf.gather(tensorFromImage, indices[0], 2)
                .sub(tf.scalar(meanImageNetRGB.red))
                .reshape([50176]),
                // transform raw value into a scalar
        green: tf.gather(tensorFromImage, indices[1], 2)
                .sub(tf.scalar(meanImageNetRGB.green))
                .reshape([50176]),
        blue: tf.gather(tensorFromImage, indices[2], 2)
                .sub(tf.scalar(meanImageNetRGB.red))
                .reshape([50176])
    };

    let processedTensor = tf.stack([centeredRGB.red, centeredRGB.green, centeredRGB.blue], 1)
                        .reshape([224, 224, 3])
                        .reverse(2)
                        .expandDims();
    return processedTensor;
}

const _imagePreprocessing = imagePreprocessing;
export { _imagePreprocessing as imagePreprocessing };
const _imageTransformation = imageTransformation;
export { _imageTransformation as imageTransformation };

  const _ = require("underscore")._

const testPartition = (classifierConst, opts, trainOpts, trainSet, testSet) => {
   let classifier = new classifierConst(opts)
   let beginTrain = Date.now()
   let trainingStats = classifier.train(trainSet, trainOpts)
   let beginTest = Date.now()
   let testStats = classifier.test(testSet)

   let endTest = Date.now()
   let stats = _(testStats).extend({
     trainTime : beginTest - beginTrain,
     testTime : endTest - beginTest,
     iterations: trainingStats.iterations,
     trainError: trainingStats.error,
     learningRate: trainOpts.learningRate,
     hidden: classifier.hiddenSizes,
     network: classifier.toJSON()
   })

    return stats
}

module.exports = crossValidate = (classifierConst, data, opts, trainOpts, k) => {
   k = k || 4
   let size = data.length / k

    data = _(data).sortBy(function() {
        return Math.random()
    })

   let avgs = {
     error : 0,
     trainTime : 0,
     testTime : 0,
     iterations: 0,
     trainError: 0
    }

   let stats = {
      truePos: 0,
      trueNeg: 0,
      falsePos: 0,
      falseNeg: 0,
      total: 0
   }

   let misclasses = []

  let results = _.range(k).map(function(i) {
    let dclone = _(data).clone()
    let testSet = dclone.splice(i * size, size)
    let trainSet = dclone

    let result = testPartition(classifierConst, opts, trainOpts, trainSet, testSet)

     _(avgs).each(function(sum, stat) {
       avgs[stat] = sum + result[stat]
     })

     _(stats).each(function(sum, stat) {
       stats[stat] = sum + result[stat]
     })

     misclasses.push(result.misclasses)

     return result
  })

  _(avgs).each(function(sum, i) {
    avgs[i] = sum / k;
  })

   stats.precision = stats.truePos / (stats.truePos + stats.falsePos)
   stats.recall = stats.truePos / (stats.truePos + stats.falseNeg)
   stats.accuracy = (stats.trueNeg + stats.truePos) / stats.total

   stats.testSize = size;
   stats.trainSize = data.length - size

  return {
     avgs: avgs,
     stats: stats,
     sets: results,
     misclasses: _(misclasses).flatten()
   }
}
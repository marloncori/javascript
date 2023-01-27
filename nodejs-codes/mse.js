// MEAN SQUARED ERROR
let nRecords = aParameters[0]
let fitness = 0.0;
let modelMinusTargetSquared = 0.0
let MSE = 0.0
for (let nR=0; nR<nRecords; nR++)
{
    let temp1 = 0.0;
    temp1 = aOutputModel[nR] - aOutputTarget[nR] 
    temp1 *= temp1;
    modelMinusTargetSquared += temp1
} 

MSE = modelMinusTargetSquared / nRecords

if (MSE <= 0.000000001){
    MSE = 0.0
    let fitness = (1/(1+MSE))*1000
    return fitness
}
 
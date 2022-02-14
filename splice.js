var myArr = [12, true, "Marlon"];

var removeOne = function(data, i){
   data.splice(i, 1);
}

removeOne(myArr,0);

console.log(myArr);
  > (2) [true, "Marlon"

const myStr2 = "example1example2example3";

const myRegEx = /e(xam)(ple(\d?))/g;

const myArray = [...myStr2.matchAll(myRegEx)];

for(let i=0; i<myArray.length; i++){
   console.log(myArray[i]); 
}

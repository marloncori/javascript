const str = "example1example2example3";

console.log(str.length);
//output 30

console.log(str.padEnd(36, "!"));
//output "example1example2example3!!!!!!"

console.log(str.padStart(34, "+"));
//output "++++example1example2example3"

console.log(str.padEnd(37));
//output "example1example2example3       " 

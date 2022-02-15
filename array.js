let arr = new Array(1, 2, 3, 4, 5, 6);

arr.slice(-3, 6);
 >(3) [4, 5, 6] //it does not take into account the whole last number

arr.slice(-3, 5);
  >(2) [4, 5]

arr.slice(-4, 6);
  >(4) [3, 4, 5, 6]

arr.slice(0, 3);
  >(3) [1, 2, 3]

arr.toString();
  >(6) "1, 2, 3, 4, 5, 6"

arr.length;
  > 6

arr.splice(1, 1);
 >(5) [1, 3, 4, 5, 6]

arr.shift();
 >(1) 1 //returns the first element

arr.pop();
 >(1) 6 //returns the last element and remove it from the array

arr.unshift(7, 8, 9)
  >(7) [7, 8, 9, 3, 4, 5, 6] //adds the number to the front of the array


const myStr = "JavaScript is an implementation of ECMAScript and learning JavaScript for web development is a must.";

const myRegEx = /JavaScript/g;
console.log(myStr.match(myRegEx));
//output > (2) ['JavaScript', 'JavaScript']

const myRegEx2 = /javascript/i;
console.log(myStr.match(myRegEx2));
//output > ['JavaScript', index: 0, input: 'JavaScript is an implementation of ECMAScript \
//               and learning JavaScript for web development is a must.', groups: undefined]

const myRegEx2 = /javascript/gi;
console.log(myStr.match(myRegEx3));
//output > (2) ['JavaScript', 'JavaScript']

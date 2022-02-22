
const promise1 = Promise.resolve(2);

const promise2 = 42;

const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 500, "charging station");
});


Promise.all([promise1, promise2, promise3]).then((values) => {
   console.log(values);
})


//expected output
// (3) [2, 42, 'charging station']
// Promise {<fulfilled>: undefined}

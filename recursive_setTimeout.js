const greet = (name) => {
   console.log("Hello, " + name + "!");
};

setTimeout(function run() {
   greet("Marlon")
   setTimeout(run, 2000)
}, 2000);

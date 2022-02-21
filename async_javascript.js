/* asynchroniczne metody setTimeout() oraz setInterval() to nie część JavaScriptu, skoro to z natury język synchroniczny, lecz
 * wbudowane są w przeglądarkach, a JavaScript po prostu do nich dostęp. */

const test = () => {
    console.log("This is a simple test.");
}

const greet = (name) => {
   console.log("Hello, " + name + "!");
}

/* lub
 * function greet(name) {
 *    alert("Hello, " + name + "!");
 *  }
 **/

// mniej więcej po dwóch sekundach następuje wywołanie metody
setTimeout(test, 2000);

// mniej więcej po trzech sekundach następuje wywołanie metody
setTimeout(greet, 3000, "Marlon");

//ten kod będzie odpalane mniej więcej co sekundy, co dópoki
// nie następuje powołanie funckji "clearInterval(func, time)"
setInterval(greet, 1000, "Marlon")

const intervalId = setInterval(greet, 2000, "Marlon");
clearInterval(intervalId);
// stop kodu.

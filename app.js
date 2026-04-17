require("./xyz") // one module into another 

const { calculateSum, calculateMultiply } = require("./calculate");

var name = "Namaste NodeJS";

var a = 10;

var b = 20;

// console.log(name);
// console.log(a + b);

// Global Object of Nodejs is Global 
// console.log(global);

// console.log(this); // Empty object

// globalThis is a universal way to access the global object, regardless of the environment your code is running in (Browser, Node.js, or Web Workers)
// console.log(globalThis);

// console.log(globalThis === global);

calculateSum(a, b);
calculateMultiply(a, b);

console.log(x);
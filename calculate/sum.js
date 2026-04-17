// By default, Modules protect their variables and functions from leaking.

console.log("Sum executed");

// It will work perfectly fine in non-strict mode.
x = "Hello world";

function calculateSum(a, b) {
    const sum = a + b;
    console.log(sum);
}

// when more than one function / variable has to be exported.
// Initially, module.exports is an empty object.
module.exports = { x, calculateSum };

// module.exports.x = x;
// module.exports.calculateSum = calculateSum;
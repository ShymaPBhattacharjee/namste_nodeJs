console.log("Sum module executed");

// export var x = "Hello world from sum.js";

// export function calculateSum(a, b) {
//     const sum = a + b;

//     console.log(sum);
// }

const x = "Hello world from sum.js";

function calculateSum(a, b) {
    const sum = a + b;

    console.log(sum);
}

module.exports = { x, calculateSum };

// module.exports.x = x;
// module.exports.sum = sum;
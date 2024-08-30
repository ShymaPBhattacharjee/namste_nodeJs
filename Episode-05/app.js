require("./xyz");

// const { x, calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");

const { calculateSum, calculateMultiply } = require("./calculate");
const data = require("./data.json");

// import { x, calculateSum } from "./sum.js";

var courseName = "Namaste NodeJs";

var a = 10;
var b = 20;
calculateSum(a, b);
calculateMultiply(a, b);
console.log(data);
// console.log(x);



const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate called"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File read CB called");
});

setTimeout(() => console.log("setTimeout called"), 0);

process.nextTick(() => console.log("process.nextTick called"));

function printA() {
    console.log("a = ", a);
}
printA();
console.log("Last line of the code");
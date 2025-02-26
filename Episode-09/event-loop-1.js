const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate called"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("File read CB called");
});

function printA() {
    console.log("a = ", a);
}
printA();
console.log("Last line of the code");
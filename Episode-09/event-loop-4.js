// Last line of the code
// process.nextTick1 called
// process.nextTickInner called
// Promise CB called
// setTimeout1 called
// setImmediate1 called
// File read CB called

const fs = require("fs");

setImmediate(() => console.log("setImmediate1 called"));

setTimeout(() => console.log("setTimeout1 called"),0);

Promise.resolve("Promise CB called").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File read CB called");
});

process.nextTick(() => {
    process.nextTick(() => console.log("process.nextTickInner called"))
    console.log("process.nextTick1 called")
});

console.log("Last line of the code");

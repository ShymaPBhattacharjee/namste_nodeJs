const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate1 called"));

setTimeout(() => console.log("setTimeout1 called"),0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("setTimeout2 called"),0);
    
    process.nextTick(() => console.log("process.nextTick2 called"));

    setImmediate(() => console.log("setImmediate2 called"));

    console.log("File read CB called");
});

process.nextTick(() => console.log("process.nextTick1 called"));

console.log("Last line of the code");
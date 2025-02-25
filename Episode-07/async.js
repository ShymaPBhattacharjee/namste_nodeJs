const fs = require("fs");
const https = require("https");

console.log("Hello world!");

var a = 107;
var b = 20;

// synchronous 
// fs.readFileSync("./file.txt", "utf8"); //10ms
// console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data successfuly");
});

setTimeout(() => {
    console.log("SetTimeOut called after  seconds");
}, 5000);

// Asnc function
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File data: ", data);
});

function multiplyFn(a, b) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log(c);
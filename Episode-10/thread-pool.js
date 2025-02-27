process.env.UV_THREADPOOL_SIZE = 2; // is noto working, need to check

const fs = require("fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (error, key) => {
    console.log("1 - cryptoPbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (error, key) => {
    console.log("2 - cryptoPbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (error, key) => {
    console.log("3 - cryptoPbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (error, key) => {
    console.log("4 - cryptoPbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (error, key) => {
    console.log("5 - cryptoPbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (error, key) => {
    console.log("6 - cryptoPbkdf2 done");
});
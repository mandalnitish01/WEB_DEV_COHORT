const fs = require("fs");
// import fs from 'fs'
const crypto = require('crypto')
// import  crypto  from 'crypto';


setTimeout(() => console.log("set timeout"), 0);
setImmediate(() => console.log("set immediate"));
process.env.UV_THREADPOOL_SIZE = 7;
fs.readFile("sample.txt", "utf-8", (err, data) => {
  setTimeout(() => console.log("set timeout inside tge fs module"), 0);
  setImmediate(() => console.log("set immediate inside fs module"));
  const start = Date.now();
  crypto.pbkdf2("password1", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 1 hashed`);
  });
  crypto.pbkdf2("password2", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 2 hashed`);
  });
  crypto.pbkdf2("password3", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 3 hashed`);
  });
  crypto.pbkdf2("password4", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 4 hashed`);
  });
  crypto.pbkdf2("password5", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 5 hashed`);
  });
  crypto.pbkdf2("password6", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 6 hashed`);
  });
  crypto.pbkdf2("password7", "salt1", 100000, 1024, "sha512", (err, data) => {
    console.log(`[${Date.now() - start}ms] : password 7 hashed`);
  });
});

console.log("hello");

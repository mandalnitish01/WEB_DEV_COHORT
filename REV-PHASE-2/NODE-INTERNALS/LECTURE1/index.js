const fs = require('fs');
// fs is a built-in module in node.js that is used to interact with the file system
// require is a function that is used to get the module whatever i give the parameter to it
const path = require('./math');
      //default exports me hmm name change kr shakte hai
// fs is a built-in module in node.js that is used to interact with the file system
// path is a custom module that is created by the user and imported like this
fs.writeFile('text.txt',"Hello World", ()=>{}) //create a file with name text.txt and write Hello World in it
// writefile is a function that is used to write data to a file it execute internally on the file system
console.log(path.name);
console.log(path.add(2,3)); //5
console.log(path.subtract(5,3)); //2

















//Notes:- 

// what is require and how it works

// it is a function that is used to get the module whatever i give the parameter to it.
// the parameter that i give to it is a built-in function in node.js
// by using this parameter it will search in the node modules and get the module that i want to use.


// the second path is a custom module that are created by the user and import like this
// const path = require('./math'); // it will search in the current directory and get the

// how the node code will executed underthe hood
// when you ran the code the execute function will call
// inside the execute function
// execute(exports, require, module, __filename, __dirname)
// it bind inside the executeWrapperFunction(exports, require, module, __filename, __dirname)
// exports is an empty object
// require is a function that is used to get the module whatever i give the parameter to it
// module is an object that contains the exports object
// __filename is the current file name
// __dirname is the current directory name

function add(x, y) {
  return x + y;
}
// names exports
// exports.add = add;
// or you can also export like this
// exports.add = function(x, y) {
//   return x + y;
// }
function subtract(x, y) {
  return x - y;
}
// names exports
// exports.subtract = subtract;
// or you can also export like this
// exports.subtract = function(x, y) {
//   return x - y;
// }

//we exports the functions so that we can use them in other files
// this is known ad default exports :- default must be 1 in one file
// but named exports can be many in one file
module.exports = {
  add,
  subtract,
  name : "Nitish"
};



//execute is the built in object in node.js

// it bind inside the executewrapperfu(exports, require, module, __filename, __dirname)
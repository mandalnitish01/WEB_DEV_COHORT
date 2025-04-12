const fs = require('fs');
// const math = require('./math');
const {add , sub , mul} = require('./math'); //object destructuring

fs.writeFile('./test.txt','hello jii',()=>{})
// console.log(math.add(2,5));
// console.log(math.sub(2,5));
// console.log(math.mul(2,5));
console.log(add(2,8));
console.log(sub(2,8));
console.log(mul(2,8));
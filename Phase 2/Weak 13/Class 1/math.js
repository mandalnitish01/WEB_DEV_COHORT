//This is named export
// exports.add = function (){
//     let sum = 0;
//   for(let i=0;i<arguments.length;i++){
//     sum = sum + arguments[i]; //arguements is a special object that contains all the arguments passed to the function. it is inbuild in js.
//   }
//   return sum;
// }

// exports.sub = function (x,y){ //export :- comes from the wrapper function that are the part of the node build in.
//    return x-y;
// }

// exports.mul = function (){
//     let mul = 1;
//   for(let i=0;i<arguments.length;i++){
//     mul = mul * arguments[i]; //arguements is a special object that contains all the arguments passed to the function. it is inbuild in js.
//   }
//   return mul;
// }




//this is default export example
const add = function (){
    let sum = 0;
  for(let i=0;i<arguments.length;i++){
    sum = sum + arguments[i]; //arguements is a special object that contains all the arguments passed to the function. it is inbuild in js.
  }
  return sum;
}

const sub = function (x,y){ //export :- comes from the wrapper function that are the part of the node build in.
   return x-y;
}

const mul = function (){
    let mul = 1;
  for(let i=0;i<arguments.length;i++){
    mul = mul * arguments[i]; //arguements is a special object that contains all the arguments passed to the function. it is inbuild in js.
  }
  return mul;
};
module.exports = {
    add,
    sub,
    mul
}
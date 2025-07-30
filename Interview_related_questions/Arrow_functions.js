//Arrow functions

//syntax

const sayname = () => {
  console.log("hyy");
};
sayname(); //hyy
//'arguements' keyword
const add = (...args) => {
  let sum = 0;
  args.forEach((number) => {
    sum += number;
  });
  return sum;
};
console.log(add(2, 3, 4)); //5

//Hoisting
hyythere(); //hyy there
//in normal function hoisting is avaliable 
//hoisting is a js feature where we can call the function before it is declared.
function hyythere() {
  console.log("hyy there");
}


firstfun();  
// in arrow function hoisting is not avaliable.
// hoisting is a js feature where we can call the function before it is declared.
// but in arrow function case it return ReferenceError.

const firstfun = ()=>{
    console.log("hyy there"); //ReferenceError: Cannot access 'firstfun' before initialization
}
firstfun();



//this keyword

const obj = {
    name : "nitish",
    myfunvtion : function(){
        console.log("name is " + this.name); //nitish //this refers to the object obj.
    },
    myfun : ()=>{
        console.log("name is " + this.name); //undefined //this refers to the global object.
    }
}
obj.myfunvtion()
// //in normal function this refers to the object obj.

obj.myfun(); //undefined
// //in arrow function this refers to the global object. means window object


// 1. Difference b/w var, let and const
// var :- it is global scopped variable
// Let & Const :- it is a blocked scoped variable

//Var:- it can be redeclear and redefined
//Let:- it can be reinitilized but not redeclared
//Const:- it can neither be redeclared nor reinitialized

// 2. Hoisting
//Hoisting in js is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

// In JavaScript, variables declared with VAR are hoisted to the top of their scope and initialized with undefined.
//but let and const are not initilized, so if we try to access them before decelaration, it will throw a referance error.
// Example of Hoisting
// {
//     console.log(a); // undefined
//     var a = 10;
//     console.log(a); // 10
//     // console.log(b); // ReferenceError: Cannot access 'b' before initialization
//     let b = 20;
//     console.log(b); // 20
//     // console.log(c); // ReferenceError: Cannot access 'c' before initialization
//     const c = 30;
//     console.log(c); // 30
// }
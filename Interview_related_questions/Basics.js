// console.log(+true) //1 
// console.log(+false) //0
// //conclusion of both prv line, we write 2 console statements and then under the console we write +true in js true refers 1 and false refers 0 and after + js will under true/false as a number
// console.log(+[]) //0
// console.log(+{}) //NaN
// console.log(+null) //0
// console.log(+undefined) //NaN
// console.log(+Infinity) //Infinity
// console.log(+NaN) //NaN
// console.log(+0) // 0
// console.log(+1) //1
// console.log(+2) //2
// console.log(true + true) //2
// console.log(true + false) //1
// console.log(true + null) //1
// console.log(true + undefined) //NaN
// console.log(true + Infinity) //Infinity
// console.log(true + NaN) //NaN
console.log("A" - 1) //NaN
console.log("tilak" + "100") //tilak100
console.log("2" + 2 + "2")
let num = "2" + 2;
console.log(typeof(num))
let num2 = num - "2"
console.log(typeof(num2))
console.log("2" + 2 - "2") //becaues of - it converted into number.

//Temporal dead zone:-
// {
// // The temporal dead zone (TDZ) is a behavior in JavaScript that occurs when a variable is accessed before it has been declared.
// // This behavior is particularly relevant for variables declared with let and const.
// //but in var case it return undefined.
// // In the TDZ, the variable is in scope but not yet initialized, leading to a ReferenceError if accessed.

// // ex:-
// // {
// //     // TDZ starts at beginning of scope
// //     console.log(bar); // "undefined"
// //     console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
// //     console.log(foo1); // ReferenceError: Cannot access 'foo' before initialization
// //     var bar = 1;
// //     let foo = 2; // End of TDZ (for foo)
// //     const foo1 = 5; // End of TDZ (for foo1)
// //   }

// //   ex:-
// // var a = 1;
// // var b = 2;
// // let c= 3;

// // {
// //   var a = 11; // the scope is global
// //   let b = 22; // the scope is inside the block
// //   let c = 34;

// //   console.log(a); // 11
// //   console.log(b); // 22
// //     console.log(c); // 34
// // }

// // console.log(a); // 11
// // console.log(b); // 2
// // console.log(c); // 3

// // NOTE :-
// // 1. var is function scoped or global scoped.
// // 2. let and const are block scoped.

// // 3. var can be redeclared and updated.
// // 4. let and const can be updated but not redeclared.

// // 5. const cannot be updated or redeclared.
// // 6. let and const are hoisted but not initialized.
// // 7. var is hoisted and initialized with undefined.
// // 8. let and const are not hoisted.
// // 9. var can be used before declaration but it will return undefined.
// // 10. let and const cannot be used before declaration.

  


// // ec :-
// let a= 10;
// const b = 20;

// // let a = 34; //redeclearation is not possible in let keyword

// a = 90; //it can be redeclared 
// // b = 100; // TypeError: Assignment to constant variable.

// console.log(a);
// console.log(b);

// }





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
// console.log("A" - 1) //NaN
// console.log("tilak" + "100") //tilak100
// console.log("2" + 2 + "2")
// let num = "2" + 2;
// console.log(typeof(num))
// let num2 = num - "2"
// console.log(typeof(num2))
// console.log("2" + 2 - "2") //becaues of - it converted into number.

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

//reverse problem
// :- reverse of sentence in word and also reverse the letters of each word

// console.log("Try programiz.pro");
// let num = "i am Nitish kumar";
// // const result = num.split("").reverse().join(""); //reverse the simple string or number

// // now i write the code for reverse the sentence of word like "i am Nitish mandal" to "mandal Nitish am I";
// // const result = num.split(" ").reverse().join(" "); //giving space in split function to ensure that convert it into word reverse.
// // join function me bracket nhi karenge to comma se separate ho jayega.
// const result = num.split(" ").reverse();
// // console.log(result); // ["mandal", "Nitish", "am", "I"]

// const reversedArray = [];
// result.forEach((element)=>{
//     let splitword = element.split("").reverse();
//     reversedArray.push(splitword)
// })
// console.log(result) //reverse the words in array
// console.log(reversedArray) //reverse the words in array and also reverse the letters of each word

//pallindrom number check
// let num = 121;
// let reverse = num.toString().split("").reverse().join("");
// if(num == reverse){
//     console.log("Pallindrom number");
// }
// else{
//     console.log("Not a pallindrom number");
// }

// armstrong number

// let armstrong = 153;
// let sum = 0;
// let temp = armstrong;
// while(temp > 0){
//     let digit = temp % 10; //get the last digit
//     sum += digit ** 3; //cube the digit and add to sum
//     temp = Math.floor(temp / 10); //remove the last digit
// }
// if(sum == armstrong){
//     console.log("Armstrong number");
// }else{
//     console.log("Not an Armstrong number");
// }

// FizzBuzz problem
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   }
//    else if (i % 3 == 0) {
//     console.log("Fizz");
//   }
//    else if (i % 5 == 0) {
//     console.log("Buzz");
//   } 
//   else {
//     console.log(i);
//   }
// }



//check two array elements are equal or not
// let arr1 = [100, 200, 300, 400];
// let arr2 = [100, 200, 300, 400];
// arr1.toString() === arr2.toString() ? console.log("All elements are equal") : console.log("Not Equal");arr1 = [100, 200, 300, 400];
// let 


// console.log(null == undefined); // true
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined
// console.log(typeof Number); // function
// console.log(null == Number); // false



//concate two array each element in alternate way and the element should be in string format
// let arr1= "Nitish";
let arr1= [1,3,5,7,9];
// let arr2 = "Mandal";
let arr2 = [2,4,6,8,10];
let arr3 = [];
let maxLength = Math.max(arr1.length, arr2.length);
for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
        arr3.push(arr1[i]);
    }
    if (i < arr2.length) {
        arr3.push(arr2[i]);
    }
}
arr3 = arr3.map(String); //i convert each element of arr3 into string format and if i not do this then it will return number format
console.log(arr3);  // Output: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]


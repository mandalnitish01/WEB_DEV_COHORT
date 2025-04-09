// Output guess questions

//functions:-
// 1. What is a function?
// 2. What is the difference between a function declaration and a function expression?
// 3. What is a first-class function?
// 4. What is a higher-order function?
// 5. What is a callback function?
// 6. What is a pure function?
// 7. What is an impure function?
// 8. What is function currying?
// 9. What is a closure?
// 10. What is the difference between call, apply, and bind?
// 11. What is the difference between a function and a method?
// 12. What is the difference between an arrow function and a regular function?
// 13. What is the difference between a constructor function and a regular function?
// 14. What is the difference between a generator function and a regular function?
// 15. What is the difference between a recursive function and a regular function?
// 16. What is the difference between a synchronous function and an asynchronous function?
// 17. What is the difference between a promise and a callback?
// 18. What is the difference between a promise and an async/await?
// 19. What is the difference between a promise and an observable?


// 1. What is a function?
{
// -> A function is a blocl of code that performs a specific task. 
// It can take input parameters, perform operations, and return a value.
//  Functions are used to organize code, promote reusability, and improve readability.

// ex:-
//jbb koe data fetch krte hai tbb hmm  usse kesi function ke under isolate kr dete hai to perform this operation.


// example of function 
          // arguements
          //  |
// function add(a,b){
//   console.log(a+b);
//   return a+b;
// }
//   // parameters
//   // |
// add(2,3);


// function mul(a,b){
//   console.log(a*b);
//   let ans = a*b;
//   return ans;
// }

// let result = mul(2,3);
// console.log(`the result is ${result}`); // template literals

// unlimited arguements and parameters pass

// one way 
// function testArray(...args){ //... is a spread operator
//   let sum = 0;
//  args.forEach((number)=>{
//     sum += number;
//   })
//   return sum;
// }

// second way 
// function testArray(){
//   let sum = 0;
//   for(let i=0;i<arguments.length;i++){
//     sum = sum + arguments[i]; //arguements is a special object that contains all the arguments passed to the function. it is inbuild in js.
//   }
//   return sum;
// }
 
// let sum = testArray(1,2,3,4,5,6,7,8,9);
// console.log(`the sum is ${sum}`); // template literals
}
































//Topics covered :-
                    //pure and impure functions
                    //function currying
                    // template literals 
                    // optional chaining (?.)
                    // turnary operator
                    // higher order function


// pure and impure functions
// {

// // // Pure function - calculate the area of a circle
// // function calcCircleArea(radius) {
// //     return (Math.PI * radius * radius).toFixed(2);
// //   }
  
// //   // Perform follow to execute the function
// //   const radius = 5;
// //   const area = calcCircleArea(radius);
// // //   console.log(`Circle area of radius ${radius} is ${area}`);


// // // Impure function - increment the global counter
// //  // Global variable
// //  let counter = 0;

// // function incrCounter() {
// //   counter++;
// // }

// // // Usage
// // incrCounter();
// // // console.log(`Counter value: ${counter}`); // Output: "Counter value: 1"
// // incrCounter();
// // // console.log(`Counter value: ${counter}`); // Output: "Counter value: 2"
// }

// //function currying
// {

// // // Normal Function
// // function add(a, b) {
// //     return a + b;
// // }
// // // console.log(add(2, 3)); 


// // // Function Currying :- it breaks the arguments into multiple function calls.
// // function add(a) {
// //     return function(b) {
// //         return a + b;
// //     }
// // }
// // const addTwo = add(5);  // First function call with 5
// // // console.log(addTwo(4));  

// // // Output : 9
// // // In this example

// // // Normal Function: Directly takes two arguments (a and b) and returns their sum.
// // // Function Currying: Breaks the add function into two steps. First, it takes a, and then, when calling addTwo(4), it takes b and returns the sum.


// // // probelm  1

// // // myfun(); //in js we can call function before initilization.

// // // var myfun = function(){ //anonymous function is self-invoking or self-executing funxtion.
// // //     console.log("this is first first");
// // // }
// // // //this line of code only valid for var variable not let and const. 
// // // // if we are doing in let and const then error is :- SyntaxError: Identifier 'myfun' has already been declared 

// // // myfun(); //undefined 

// // // function myfun(){
// // //     console.log("this is second");
// // // }
// // // myfun();
// // // // final output is : this is second

// }

// // template literals 
// {
//   let names = "sohanji"
// console.log(`this is my name ${names}`)
// }

// // optional chaining (?.)
// {
// // // 1.
// // const adventurer = {
// //     name: "Alice",
// //     cat: {
// //       name: "Dinah",
// //     },
// //   };
  
// //   const dogName = adventurer.dog?.name;
// // //   console.log(dogName); //through undefined this property is not defined!
// // //   console.log(adventurer.someNonExistentMethod?.()); //through undefined error


// // // 2.
// //   const customer = {
// //     name: "Carl",
// //     details: {
// //       age: 82,
// //       location: "kuch to hai", // Detailed address is unknown
// //     },
// //   };
// //   const customerCity = customer.details?.address?.city;
// // //   console.log(customerCity)//through  undefined
  
// //   // This also works with optional chaining function call
// //   const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
// //   const customerNames = customer.name?.details?.location; //finde details insed the name obj. 
// // //   console.log(customerNames)
// //   const customerNames1 = customer.details?.location;
// // //   console.log(customerNames1)


// // // 3.
// //   function printCustomerCity(customer) {
// //     //The nullish coalescing operator[??] may be used after optional chaining in order to build a default value when none was found:

// //     const customerCity = customer?.city ?? "Unknown city"; 
// //     console.log(customerCity);
// //     const customerCity2 = customer?.details?.city ?? "Unknown city"; 
// //     console.log(customerCity2);
// //   }
  
// //   printCustomerCity({
// //     name: "Nathan",
// //     city: "Paris",
// //   }); // "Paris"
// //   printCustomerCity({
// //     name: "Carl",
// //     details: {
// //          age: 82,
// //         city:"gurugram"
// //         },
// //   }); // "Unknown city"
// }

// // turnary operator
// {
// // //   problem 4

// // let age = 18;
// // console.log(age>18? "eligible for vote":"not eligible for vote");
// // const age = 38;
// // const eligibleforvote = age>18? "eligible":"not";
// // console.log(eligibleforvote)
// }

// // problem 5;
// // higher order function :- a function that takes a function as an arguement

function add(a,b,callback){
    let result = a + b;
    callback(result);
}

function showresult(result){
    console.log(result)
}

add(2,4,showresult)

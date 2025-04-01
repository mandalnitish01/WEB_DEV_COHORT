// Output guess questions

//pure and impure functions

// Pure function - calculate the area of a circle
function calcCircleArea(radius) {
    return (Math.PI * radius * radius).toFixed(2);
  }
  
  // Perform follow to execute the function
  const radius = 5;
  const area = calcCircleArea(radius);
//   console.log(`Circle area of radius ${radius} is ${area}`);


// impure function 

  // Global variable
let counter = 0;

// Impure function - increment the global counter
function incrCounter() {
  counter++;
}

// Usage
incrCounter();
// console.log(`Counter value: ${counter}`); // Output: "Counter value: 1"
incrCounter();
// console.log(`Counter value: ${counter}`); // Output: "Counter value: 2"



//function currying


// Normal Function
function add(a, b) {
    return a + b;
}
// console.log(add(2, 3)); 


// Function Currying :- it breaks the arguments into multiple function calls.
function add(a) {
    return function(b) {
        return a + b;
    }
}
const addTwo = add(5);  // First function call with 5
// console.log(addTwo(4));  

// Output : 9
// In this example

// Normal Function: Directly takes two arguments (a and b) and returns their sum.
// Function Currying: Breaks the add function into two steps. First, it takes a, and then, when calling addTwo(4), it takes b and returns the sum.


// probelm  1

// myfun(); //in js we can call function before initilization.

// var myfun = function(){ //anonymous function is self-invoking or self-executing funxtion.
//     console.log("this is first first");
// }
// //this line of code only valid for var variable not let and const. 
// // if we are doing in let and const then error is :- SyntaxError: Identifier 'myfun' has already been declared 

// myfun(); //undefined 

// function myfun(){
//     console.log("this is second");
// }
// myfun();
// // final output is : this is second


// problem 2
// template literals 





// problem 3
// optional chaining (?.)

// 1.
const adventurer = {
    name: "Alice",
    cat: {
      name: "Dinah",
    },
  };
  
  const dogName = adventurer.dog?.name;
//   console.log(dogName); //through undefined this property is not defined!
//   console.log(adventurer.someNonExistentMethod?.()); //through undefined error


// 2.
  const customer = {
    name: "Carl",
    details: {
      age: 82,
      location: "kuch to hai", // Detailed address is unknown
    },
  };
  const customerCity = customer.details?.address?.city;
//   console.log(customerCity)//through  undefined
  
  // This also works with optional chaining function call
  const customerName = customer.name?.getName?.(); // Method does not exist, customerName is undefined
  const customerNames = customer.name?.details?.location; //finde details insed the name obj. 
//   console.log(customerNames)
  const customerNames1 = customer.details?.location;
//   console.log(customerNames1)


// 3.
  function printCustomerCity(customer) {
    //The nullish coalescing operator[??] may be used after optional chaining in order to build a default value when none was found:

    const customerCity = customer?.city ?? "Unknown city"; 
    console.log(customerCity);
    const customerCity2 = customer?.details?.city ?? "Unknown city"; 
    console.log(customerCity2);
  }
  
  printCustomerCity({
    name: "Nathan",
    city: "Paris",
  }); // "Paris"
  printCustomerCity({
    name: "Carl",
    details: {
         age: 82,
        city:"gurugram"
        },
  }); // "Unknown city"
  

//   problem 4
// turnary operator

const age = 38;
const eligibleforvote = age>18? "eligible":"not";
console.log(eligibleforvote)

// problem 5;
// higher order function :- a function that takes a function as an arguement

function add(a,b,callback){
    let result = a + b;
    callback(result);
}
function showresult(result){
    console.log(result)
}

add(2,4,showresult)
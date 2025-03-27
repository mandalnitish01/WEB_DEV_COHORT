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



//pure and impure functions

// Pure function - calculate the area of a circle
function calcCircleArea(radius) {
    return (Math.PI * radius * radius).toFixed(2);
  }
  
  // Perform follow to execute the function
  const radius = 5;
  const area = calcCircleArea(radius);
  console.log(`Circle area of radius ${radius} is ${area}`);


// impure function 

  // Global variable
let counter = 0;

// Impure function - increment the global counter
function incrCounter() {
  counter++;
}

// Usage
incrCounter();
console.log(`Counter value: ${counter}`); // Output: "Counter value: 1"
incrCounter();
console.log(`Counter value: ${counter}`); // Output: "Counter value: 2"



//function currying


// Normal Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); 


// Function Currying :- it breaks the arguments into multiple function calls.
function add(a) {
    return function(b) {
        return a + b;
    }
}
const addTwo = add(5);  // First function call with 5
console.log(addTwo(4));  

// Output : 9
// In this example

// Normal Function: Directly takes two arguments (a and b) and returns their sum.
// Function Currying: Breaks the add function into two steps. First, it takes a, and then, when calling addTwo(4), it takes b and returns the sum.
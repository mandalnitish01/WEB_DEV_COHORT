// Creating an Array
// let arr = [
//     'aman',
//     'suman',
//     'gagan',
//     'chuck'
// ]
// let arr1 = ["aman", "suman", "gagan", "chuck"];
// const arr2 = [];
// arr2[0] = 'aman';
// arr2[1] = 'suman';
// console.log(arr2)
// console.log(arr2[1])

// Using the JavaScript Keyword new
// const arr   =   new  Array('nitish','suresh','mukesh');
//                     // |
                    //    |
//                 // this Array must need to define
// console.log(arr)



// Accessing Array Elements
// const car = ['volvo','fortuner','mercedes','KIA']
// console.log(car[3])
// console.log(car[0])

// Changing an Array Element
// const car = ['volvo','fortuner','mercedes','KIA']
// car[1] = "Wagonr" //it menuplate the car[1] array at index 1st; and changed to "Wagonr".
// console.log(car) //[ 'volvo', 'Wagonr', 'mercedes', 'KIA' ]

// Converting an Array to a String
// const car = ['volvo','fortuner','mercedes','KIA']
// console.log(car.toString()) //volvo,fortuner,mercedes,KIA, here it convert array to string by using toString() function

// Access full array
// <!DOCTYPE html>
// <html>
// <body>
// <h1>JavaScript Arrays</h1>

// <p id="demo"></p>

// <script>
// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;
// </script>

// </body>
// </html>

// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// But, JavaScript arrays are best described as arrays.
// Arrays use numbers to access its "elements". In this example, person[0] returns John:













// Array Methods in js :- Array methods in js is used for easy the task for the devloper.

// 1. Array.at ;-
//  syntax [array.at(index)] :- The at() method of Array  takes an integer value and returns the item at that index.
//Allowing for positive and negative integers.
// Negative integers count back from the last item in the array.
// const array1 = [5, 12, 8, 130, 44];
// let index = array1.indexOf(130)
// if(index > -1){
// console.log(`An index of ${index} returns ${array1.at(index)}`);
// }
// Expected output: "An index of 3 returns 130"
// let index = -2;
// console.log(`An index of ${index} returns ${array1.at(-1)}`); //negative array index work at the last last element of the give array size.
// Expacted output is :- An index of 2 returns 44



// 2. Array.concat() :- 
// Concate method in an array is used for merge/add two or mpre then two arrays.
//This method is not change the existing array but it return the new array after the concat.
// ex:-
// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];
// let arr3 = [1, 2, 3, 4];
// let arr4 = [4, 5, 7, 8];
// const newarr = arr1.concat(arr2);
// // console.log(newarr)
// const newarr2 = arr2.concat(arr1, arr4, arr4);
// console.log(newarr2)


// array.every():- 
// chech every element in the array if any ine is false it will return false.
// syntax :- arrar.evert(function_name);
// it return true or false 
// const isbellowthval = (currentval) => currentval < 40;
// const arr = [1,2,3,4,50,6]
// console.log(arr.every(isbellowthval));


// Array.filter():- filter the element on the give condition and return the new array.
// syntax :- arrar_name.filter(function_name);
// const filterarray = [12,24,12,23,45,15];
// let votingeligiblity = filterarray.filter((age) => age >=18)
// console.log(votingeligiblity)

// # Example1:- 
// find cafinated teas 
// const teas = ["caftea1", "caftea2", "caftea3", "Notcaftea1", "caftea4"]
// const chechcaffinatedtea = (tea)=>{
//     return tea !== "Notcaftea1";
// }
// let caffineatedtea = teas.filter(chechcaffinatedtea)
// console.log(caffineatedtea);

// # Example2:- 
// find wooden trees 
// const tree = ["Mangotree","Appletree","pomigranetTree","GuavaTree","PalmTree","orangeTree","jackfruitTree","grapshTree"]
// const woodentreefinder =(tree)=>{
//  return   tree == "Mangotree" || tree == "jackfruitTree"
// }
// let woodentree = tree.filter(woodentreefinder)
// console.log(woodentree)

// Example3:- 
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// const Isprimenum =(num)=>{
//     for(let i=2;num > i;i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return num > 1;
// }
// let Isprime = array.filter(Isprimenum)
// console.log(Isprime)


// Array.find():- The find() method of Array instances returns the first element in the provided array
// Example1:-
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
//   function isCherries(fruit) {
//     // return fruit.quantity === 2;
//     return fruit.name === "cherries";
//   }
//   console.log(inventory.find(isCherries));
//   // { name: 'cherries', quantity: 5 }

// Example2:-
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
//   const result = inventory.find(({ name }) => name === "cherries");
//   console.log(result); // { name: 'cherries', quantity: 5 }



// Array.unshift() :- used to add element at the begning fo the array
// const arr = [2,3]
// const arr1 = "A"
// let result = arr.unshift(arr1)
// console.log(result)


// Array.shift()
bus.shift() //used for remove the first element of the array




// # Array Iteration Methods:

// The Array every() Method
// The Array entries() Method //Skip for now
// The Array filter() Method
// The Array forEach() Method
// The Array keys() Method
// The Array map() Method

// 3. array.Every(function) :- 

// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array

// EX
// const isBelowThreshold = (currentValue) => currentValue < 40;
// const array = [18, 30, 3, 40];
// function checkvotingeligiblity(age){
//     if(age >= 18){
//         return age;
//     }
// }
// const checkvotingeligiblity = (age) =>{
//     return age >= 18
// }
// const newa = array.every(checkvotingeligiblity)
// // console.log(newa)


// array.filter() Method :-
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// // const result = words.filter((word) =>  word.length>6)
// const result = words.filter(
//     function(word) {
//         return word.length>6;
//     }
// )
// console.log(result)
// Expected output: Array ["exuberant", "destruction", "present"]



// array question practics 
// const teas = ["lemon tea", "orange tea","oolong tea","black tea","green tea"]

// teas.push("new tea")
// const index = teas.indexOf("oolong tea")
// if(index > -1){
//     teas.splice(index, 1)
// }



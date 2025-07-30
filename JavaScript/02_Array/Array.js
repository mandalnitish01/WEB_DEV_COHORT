//All array methods
// #Array :- an array that can store multiple values in a single variable.
// #Array constructor :- The Array constructor creates Array objects.
// #Array methods :- The Array object has many built-in methods.
// #Array properties :- The Array object has many built-in properties.
// #Array length :- The length property of an array returns the number of elements in that array.
// #Array index :- The index of an array is the position of an element in that array.
// #Array elements :- The elements of an array are the values stored in that array.

// #Array methods :-

// 1. Array.isArray() :- The Array.isArray() method returns true if the argument is an array, and false otherwise.
// example
// const fruits = ["apple", "banana", "cherry","hello"];
// console.log(Array.isArray(fruits)); // true
// console.log(Array.isArray("Apple")); // false
// console.log(Array.isArray({})); // false


// 2. Array.from() :- The Array.from() method creates a new array from an array-like or iterable object.
// example
// const fruits = ["apple", "banana", "cherry","hello"];
// const fruits2 = Array.from(fruits);
// // fruits2.push("newthings"); //add the element at the end of the array
// // fruits2.pop(); //remove the element that are present at the end of the array
// console.log(fruits2); // ["apple", "banana", "cherry"]
// const str = "hello";
// const str2 = Array.from(str);
// console.log(str2); // ["h", "e", "l", "l", "o"]
// const str3 = Array.from("hello");
// console.log(str3); // ["h", "e", "l", "l", "o"]
// const str4 = Array.from("hello", (val) => val.toUpperCase());
// console.log(str4); // ["H", "E", "L", "L", "O"]
// // The second argument is a map function that is called for each element of the array.
// const str5 = Array.from("hello", (val) => val.toLowerCase());
// console.log(str5); // ["h", "e", "l", "l", "o"]


//3. ###  array.find() :- The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// example
// const heros = [
//   { name: "spiderman", age: 20 , IQ: 100},
//   { name: "batman", age: 30 , IQ: 200},
//   { name: "superman", age: 40 , IQ: 300},
// ];
// const genious = heros.find((hero)=>{
//     return hero.IQ > 150;
// })
// console.log(genious); // { name: "superman", age: 40 , IQ: 300}





//4. ### map :- The map() method creates a NEW ARRAY populated with the results of calling a provided function on every element in the chero.IQ > 150;
// })
//5.  ### filter :- The filter() method creates a NEW ARRAY with all elements that pass the test implemented by the provided function.
// example
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

//6. ### reduce :- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// example

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );
// console.log(sum); // 15
//   # accumulator: stores the result of the previous iteration (it starts with the initialValue you provide).
// # currentValue: the current item in the array that is being processed.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     console.log(accumulator, currentValue);
//     return accumulator + currentValue;
// }, 0);
// console.log(sum); // 15

// 🔄 Iteration steps:
// Iteration	accumulator	currentValue	return
//     1	          0	         1	          1
//     2	          1          2	          3
//     3	          3 	     3	          6
//     4	          6 	     4	          10
//     5	          10 	     5	          15
// total is 60.

//7. ### ARRAY.SORT() :- The sort() method sorts the elements of an array in place and returns the sorted array. The sort order can be either alphabetic or numeric, and non-numeric values are converted to numbers.
// example
// const fruits = ["banana", "apple", "cherry"];
// fruits.sort();
// console.log(fruits); // ["apple", "banana", "cherry"]

// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a, b) => a - b); // Numeric sort assending order
// console.log(numbers); // [1, 2, 3, 4, 5]
// const numbers1 = [4, 2, 5, 1, 3];
// numbers1.sort((a, b) => b - a); // Numeric sort desending order
// console.log(numbers1); // [5, 4, 3, 2, 1]

// const fruits = ["banana", "apple", "cherry"];
// fruits.sort((a, b) => a.length - b.length); // Sort by length no metter alphabet
// console.log(fruits); // ["apple", "banana", "cherry"]
// const fruits = ["banana", "apple", "cherry"];
// fruits.sort((a, b) => b.length - a.length); // Sort by length
// console.log(fruits); // ["banana", "apple", "cherry"]

// const fruits = ["baana", "apple", "bacherry"];
// fruits.sort((a, b) => a.localeCompare(b)); // Sort by locale ##=> localeCompare() is a string method used to compare two strings based on locale (language/cultural rules).
// console.log(fruits); // ["apple", "banana", "cherry"]

// const fruits = ["banana", "apple", "cherry"];
// fruits.sort((a, b) => b.localeCompare(a)); // Sort by locale
// console.log(fruits); // ["cherry", "banana", "apple"]
// const fruits = ["banana", "apple", "cherry"];

//8. ### forEach() :- execute a function for each element in the array
// The forEach() method of Array instances executes a provided function once for each array element.
// example
// const array = [1, 2, 3, 4, 6];
// const newarray = [];
// array.forEach((item) => {
//     newarray.push(item);
//   });
// console.log("pushing array element into newarray",newarray)

//9. ### includes() :-

//10. ### every() :-

//11. ### concat() :-

// 1.
const arr = [1,2,3,4,5,6];
console.log(arr.some((elt) => elt === 2))
//some method in js
//The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.


// 2.
// every methos in js 
//The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const NAMES = [
    {name:"Nitish", answer:"yes"},
    {name:"niraj kutta", answer:"yes"},
    {name:"maa", answer:"yes"},
    {name:"baap", answer:"yes"},
    {name:"bhai", answer:"yes"},
];
const result = NAMES.every((val)=> val.answer === "yes");
const result2 = NAMES.every((val)=>{ return val.answer === "yes"});
console.log(result);
console.log(result2);



const numbers = [-2, 4, -8, 16, -32];
const isIncreasing = numbers
  .filter((num) => num > 0)
  .every((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    if (idx === 0) return true;
    return num > arr[idx - 1];
  });
console.log(isIncreasing); // true

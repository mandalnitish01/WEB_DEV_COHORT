// Array:-  [storing a collection of multiple items under a single variable name]

// Array Rules 
// Array is a collection of multiple items under a single variable name.
// Array is an object in JavaScript.
// Array can store multiple data types.

// Array Declaration

const array = [1,2,3,4,5,76,8,6];
console.log(array);

//Accessing the array element
console.log(array[0])
// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// }
const mapresult = array.map((a) => a * 2)
console.log(mapresult)

const filterarray = array.filter((num)=>{ 
    return num >5
})
console.log(filterarray)
console.log(filterarray.sort())

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));
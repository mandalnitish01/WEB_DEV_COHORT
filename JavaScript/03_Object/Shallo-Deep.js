let arr = [1,2,[3,4,5],6];



// let copyarray = arr; //in this case we pass a refrence of arr that means if you want to change in new array it will reflect on the main array.
// copyarray[1]= 39;
// console.log(copyarray);
// console.log(arr);
// output :-
// [ 1, 39, [ 3, 4, 5 ], 6 ]
// [ 1, 39, [ 3, 4, 5 ], 6 ]

//shallow copy
// let copyarray = [...arr]; // means it can copy the value only at 1 level of the array not on the nexted array;
// copyarray.push(7)
// copyarray.push(10)
// copyarray[2].push(10) //it will change both the array 
// console.log("original array",arr);
// console.log("shallow copy",copyarray)


 //Deep copy
let copyarray = JSON.parse(JSON.stringify(arr)); //it will not affect the original array whether i want to update an array as well as nested array;
copyarray[2].push(7)
copyarray.push(8)
console.log("original array",arr);
console.log("deep copy",copyarray);


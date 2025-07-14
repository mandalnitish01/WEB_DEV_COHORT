// let arr = [,,,] //3
// console.log(arr.length)
// let arr2 = [1,2,3,4]; //4
// console.log(arr2.length)
// let arr3 = [[1,2,3],[4,5,6]];//2
// console.log(arr3.length)



// let arr = [1,18,9,81,98,124,78]
// console.log(arr.sort((a,b)=> a-b));
// a - b sorts in ascending order.
// b - a sorts in descending order.


// const arr = [1,200,3,4,500];
// let  result = arr.map(num=> num>100); //map run on every element of the array and then return a new array with the result value
// console.log(result) //[ false, false, false, false, true ]

// const filteredResult = arr.filter(num => num>100) //filter retunr the vlaue where it get true in whole array.it retunr only truthy value in an array not falsi value.
// console.log(filteredResult) 



// slice & splice 
// const arr = [1,2,3,4,5,6,7];
// let spliceresult = arr.splice(0,4) //[0th index to n-1 index] //[it will changes in new array] //splice is used forextract the element from the array.leaves the original untouched
// console.log("original array before splice",arr)
// console.log("spliced ",spliceresult)
// console.log("original array After splice",arr)

// const arr1 = [1,2,3,4,5,6,7];
// let sliceresult = arr1.slice(0,3) //[0th index to nth index value] //[it donsent change in new array]//slice is used to deduct thoes element that are occur in range
// console.log("Original array before slice ",arr1)
// console.log(" sliced ",sliceresult)
// console.log("Original array After slice ",arr1)



//delete the array element's:- 
const arr= [1,2,3,4,5,6]
// console.log(arr.pop())
arr.length =0
console.log(arr)

// const fname = 'kunal'
// console.log(typeof(fname))

// a things that can grow with time then we use the heap memory 

const p1 = {
    name:"Nitish"
}
let p2 = {};
p2.name = "sumit";
console.log(p2)
console.log(p1)

// const p1 = {
//     name:"Nitish",
//     address:{
//         h:1,
//         s:1,
//     }
// }
// // let p2 = {
// //     ...p1, //use spread operator {spread opreator shallow copy (upar-upar se) bnata hai nested me nhi jata hai}
// // };

// // write the function to convert obj to string 
// const p1tostring = JSON.stringify(p1);
// //write a sunction for convert string to obj
// let p2 = JSON.parse(p1tostring);

// p2.name = "sumit";
// p2.address.h = "4"

// p1.name = "aman"
// p1.address.s = 3

// console.log(p2)
// console.log(p1)

// array1 solution
const obj = {
    guestlist:["niraj","nitish"],
    newguestlist :"subham",
}
// console.log(obj.guestlist.push(obj.newguestlist))
const arr = [2,3]
const arr1 = "A"
let result = arr1.concat(arr)
console.log(result)
// let result = arr1.concat(arr)
// console.log(result)
// let result = obj.guestlist.concat(obj.newguestlist) 
// let result = obj.newguestlist.concat(obj.guest/
// console.log(obj.guestlist.push(obj.newguestlist))


// array2 solution
// const arr = ["alpenliebe","juztzelly","kacchamangobyte"]
// arr.pop()
// console.log(arr)
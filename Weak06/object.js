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
// const obj = {
//     guestlist:["niraj","nitish"],
//     newguestlist :"subham",
// }
// // console.log(obj.guestlist.push(obj.newguestlist))
// const arr = [2,3]
// const arr1 = "A"
// let result = arr1.concat(arr)
// console.log(result)
// let result = arr1.concat(arr)
// console.log(result)
// let result = obj.guestlist.concat(obj.newguestlist) 
// let result = obj.newguestlist.concat(obj.guest/
// console.log(obj.guestlist.push(obj.newguestlist))


// array2 solution
// const arr = ["alpenliebe","juztzelly","kacchamangobyte"]
// arr.pop()
// console.log(arr)


//SHALLOW COPY AND DEEP COPY 

//shallo copy me hmm bss upar upar se copy karte hai nested me nhi jaate hai or ek chnage dusre prr affect daalta hai
// but in deep copy we can go into the nested into the object and change things and that chnage will not affest any other keys.

const teas = {
    name:"oolone tea",
    caffeine:"medium",
    tea1: {
        name:"black tea",
        caffeine:"High",
        tea2:{
            name: "green tea",
            caffeine:"Low",
        }
    }
}
// console.log(teas)

//FOR SHALLOW COPY
let teascopy = {...teas} //shallow copy of the teas object
teascopy.tea1.name = "blue tea"
console.log(teascopy)

let teascopy1 = teas //referance pass kr rha hai only
teascopy1.name = "white tea"
console.log(teascopy1)

//DEEP COPY the teas object
//first we change teas into string and then
// we convert string into object
const teastostring = JSON.stringify(teas);
let teascopy2 = JSON.parse(teastostring)

teascopy2.caffeine = "low"
teascopy2.tea1.name = "orange tea"

console.log(teascopy2)

// Quokka solution
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
// console.log(obj.guestlist.push(obj.newguestlist))

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

// arr4 solution
// const arr = [2,3,4,5]
// console.log(arr.shift())
// console.log("hello")

// array5 solution 
// const books = ["Math","English","Science","History"]
// let result = books.sort();
// console.log(result)

// array6 solution
// const arr = ["banana","apple","orange","burger"]
// arr.filter()

// const arr = [2,3]
// const arr1 = "A"
// let result = arr.unshift(arr1)
// console.log(result)


// sort methos in array 
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
  



  //class bk####
  const PizzaOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
    const isStock = true;
    if (isStock) {
    resolve("Pizza Delivered!");
    } else {
    reject("Pizza Out of Stock");
    }
    }, 2000);
    });
    
    PizzaOrder.then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Pizza Eaten");
    });
    }, 1000);
    }).then((message) => {
    console.log(message);
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Feedback given");
    });
    }, 500);
    }).then((message) => {
    console.log(message);
    })
    .catch((e) => console.log(e));
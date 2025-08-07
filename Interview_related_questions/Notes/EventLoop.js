

//Event Loop
// console.log("Event get's initilized");
// setTimeout(() => {
//     console.log("A")
// }, 0);
// setTimeout(() => {
//     console.log("B")
// }, 0);
// setTimeout(() => {
//     console.log("C")
// }, 2*1000);
// console.log("Event loop ended");

// console.log("Event get's initilized");
// setTimeout(() => {
//   console.log("This is from callback queue - setTimeout 1");
//   setTimeout(() => {
//     console.log("This is from callback queue - setTimeout 2");
//     setTimeout(() => {
//       console.log("This is from callback queue - setTimeout 3");
//     }, 0);
//   }, 5000);
// }, 0);
// Promise.resolve().then(() => {
//   console.log("This is from microtask queue - Promise 1");
//   Promise.resolve().then(() => {
//     console.log("This is from microtask queue - Promise 2");
//     Promise.resolve().then(() => {
//       console.log("This is from microtask queue - Promise 3");
//       Promise.resolve().then(() => {
//         console.log("This is from microtask queue - Promise 4");
//       });
//     });
//   });
// });
// console.log("Event loop ended");

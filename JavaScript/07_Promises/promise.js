// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise 1 called!")
//         resolve()
//     }, 1000);
// })

// promiseOne.then(()=>{
//     setTimeout(() => {
//         console.log("Promise 1 resolved!")
//     }, 1000);
// })



// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promise 2 called!")
//         resolve()
//     }, 1000);
// }).then(()=>{
//     setTimeout(() => {
//         console.log("Promise 2 resolved!")
//     }, 1000);
// })


// const PromiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise 3 Called!")
//         resolve({name: "NITISH", age: 22});
//     }, 1000);
// })

// PromiseThree.then((data)=>{
//     console.log(data);
// })


// const PromiseFour = new Promise((resolve, reject)=>{
 
//     setTimeout(() => {
//            let error = false;
//            if(!error){
//             resolve({name: "NITISH", age: 22, city: "Delhi"});
//            }else{
//             reject("Error: Something went wrong");
//            }
//     }, 1000);
// })

// PromiseFour.then((data)=>{
//     console.log(data);

//     // You can access the properties of the resolved data object here
//     // console.log(data.name); // Accessing the name property
//     // console.log(data.age); // Accessing the age property
//     // console.log(data.city); // Accessing the city property

//     //and also you can send it to next then
//     // return data; //you send whole data object to next then
// //    return {name: data.name , city: data.city}; // it return from here and goes to next then
//    return data.name; // it return from here and goes to next then
// }).then((data)=>{
//     console.log(data)
// //    console.log(data.name); //here you can access the name property
// //    console.log(data.city); //here you can access the city property
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Promise execution completed");
// });




// const PromiseFive = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({ name: "NITISH", age: 22, city: "Delhi" });
//         }
//         else{
//             reject("Error: Something went wrong");
//         }
//     }, 1000);
// })


// const consumePromiseFive = async ()=>{
// try {
//     const data = await PromiseFive;
//     console.log(data)
    
// } catch (error) {
//     console.error("Error:", error);
// }
// }
// consumePromiseFive();




//usinge fetch and try&catch

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()


//example using fetch and .then .catch .finally
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.error("Error:", error);
})
.finally(()=>{
    console.log("Fetch operation completed");
});


// promise:- it is a object that represents an asynchronous operation.
// it is used to handle asynchronous operations and provide a way to handle success and failure cases.  
const mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully");
        // reject("Promise rejected"); // Uncomment to test rejection
    }, 2000); // Simulating a 2-second delay
}); 

mypromise
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
})
.finally(()=>{
    console.log("Promise execution completed");
})
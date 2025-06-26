console.log("Welcome to ProCoder Interview Questions");

// const mypromise = new Promise((resolve, reject) => {
//     document.getElementById("mybtn1").addEventListener("click", ()=>{
//         resolve("Promise resolved");
//     });
//     document.getElementById("mybtn2").addEventListener("click", ()=>{
//         reject("Promise rejected");
//     });
// }); 
// mypromise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// async function fetchData(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             // const data = { id: 1, name: "John Doe" };
//             resolve("data");
//         }, 1000); // Simulating a 2-second delay
//     });
// }
// const myPromise =  fetchData();
// console.log(myPromise);



//Check the vowels
let str = "NITISH kumar mandal";
let vowels = "aeiouAEIOU";

function checkVowels(str) {
    const resultArray = [];
    for(let i=0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            resultArray.push(str[i]);
        }
    }
    return  resultArray;
}
let result = checkVowels(str);
// console.log(`The number of vowels in "${str}" is: ${vowelCount}`);
console.log(`The vowels in "${str}" are: ${result.join(", ")}`);
console.log("Total number of vowels: " + result.length);

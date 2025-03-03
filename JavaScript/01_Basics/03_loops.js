// node SumofArrayElement.js

// SumofArrayElement.js

function addnum(arr) {
    let sum = 0;
    for (let l = 0; l < arr.length; l++) {
        // sum = sum + arr[l];
        sum += arr[l];
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5, 6];  // Array definition
let totalsum = addnum(arr);  // Call the function correctly
console.log(totalsum);  // Output: 21



let cars = ["Mercedes", "BMW", "Audi", "Porsche"];

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

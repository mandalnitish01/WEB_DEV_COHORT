//Currying:- Currying is a way to break a function with multiple arguemennts into a series of functions that each take one arguement at a time.




//by using normal function
// function sum(a,b,c){
//     return a+b+c;
// }
// const result = sum(1,2,3);
// console.log(result)


//by using currying 
// function myFun(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// //call the function
// // # Way 1
// let sum = myFun(1)(2)(3);
// console.log(sum);

// // # Way 2
// let result = myFun(1);
// console.log(result) //retunr a function
// let result1 = result(2);
// console.log(result1) //retunr a function
// let result2 = result1(3); //retunr value
// console.log(result2)



//practical usecase
function greet(greetType){
    return function(name){
        console.log(`${greetType} ${name}`)
    }
}

let sayHello = greet("Hello");
sayHello("Nitish")
sayHello("kant")

let sayNamaste = greet("Namaste");
sayNamaste("Nitish")
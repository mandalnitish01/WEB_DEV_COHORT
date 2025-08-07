// #Before ES6  Comes inti the picture 
// we use normal and constructor using litterals function to create objects.


//Normal object creation
// created using object literal syntax
// const obj = {
//     name:"nitish",
//     age:22
// address:{
//          city:"patna",
//         state:"bihar"
// }
// }
// console.log(obj);


// using constructor function 

function person(fName,lName,contact,address){
    this.fName = fName;
    this.lName = lName;
    this.contact = contact;
    this.address = {
        city: address.city,
        state: address.state
    };

    this.getFullName = function(){
        console.log(`FullName : ${this.fName} ${this.lName}`);
    }
    this.getContactInfo = function(){
        console.log(`Contact : ${this.contact}`);
    }
    this.getAddress = function(){
        console.log(`Address : ${this.address.city}, ${this.address.state}`);
    }
}
const person2 = new person("nitish","kumar",1234567890,{city:"patna",state:"bihar"});
// console.log(person2);
person2.getFullName(); // calling the method to print full name
const person1 = new person("Niraj","kumar",1234567890,{city:"Vasant Vihar",state:"Delhi"});
// console.log(person1);
person1.getFullName(); // calling the method to print full name
person1.getAddress(); // calling the method to print address





//After ES6 
//class based Object creation

// we use class to create objects.
// class Person{
//     constructor(fName, lName, contact, address) {
//         this.fName = fName;
//         this.lName = lName;
//         this.contact = contact;
//         this.address = {
//             city: address.city,
//             state: address.state
//         };
//     }

//     // Method to display full name
//     getFullName() {
//         console.log( `${this.fName} ${this.lName}`);
//     }   
//     // Method to display contact information
//     getContactInfo() {
//         console.log(`Contact: ${this.contact}`);
//     }
//     // Method to display address
//     getAddress() {
//         console.log( `Address: ${this.address.city}, ${this.address.state}`);
//     }
// }

// const person1 = new Person("Niraj","kumar",1234567890,{city:"Vasant Vihar",state:"Delhi"});
// // console.log(person1);
// person1.getFullName();
// person1.getAddress();
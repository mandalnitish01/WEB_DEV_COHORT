// console.log("Nitish")

let numberofGuest = 4;
let pizzasize;
// small -2 medium-5 large -8

if(numberofGuest <= 2){
    pizzasize = "Small"

}
else if(numberofGuest <= 5){
    pizzasize = "Medium" 

}
else if(numberofGuest <= 8){ 
    pizzasize = "Large"  
   
}
else {
    console.log("Multiple pizza orders")
}
console.log( `${pizzasize} pizza order`) 
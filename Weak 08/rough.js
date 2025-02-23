function calculatetotal(amount){
    let amountinnum = Math.floor(amount);
     if(amountinnum >= 1000){
        return amountinnum * 0.9;
     }
     else return "Saara paisa bharo nhi to Bartan dhooow"
}
console.log(calculatetotal(500)) 


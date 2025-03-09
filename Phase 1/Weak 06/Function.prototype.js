Function.prototype.describe = function(){
    console.log(`function name is ${this.name}`)
};

function greatfun(name){
    return `Hello ${name}`;
}   
console.log(greatfun("World!"))
greatfun.describe() 
                                             
// another function 
function chai(){}  
chai.describe();   



// An IIFE (Immediately Invoked Function Expression) is an idiom in which a JavaScript function runs as soon as it is defined. It is also known as a self-executing anonymous function.
// standard IIFE
(function () {
    // statements…
  })();
  
  // arrow function variant
  (() => {
    // statements…
  })();
  
  // async IIFE
  (async () => {
    // statements…
  })();


// #interview questions 

// function paramater(parameter_aata_hai){}    
// paramater("yha_arguement_pass_hota_hai") 




//function decleration/ decleration function
function add(a,b){
    return a+b;
}
//function expression /expression function
const substract = function(a,b){
    return a-b;
}

// arrow functiton 
const mult = (a,b)=>{
     return a*b;
}


// first class function 
function applyoperation(a,b,operation){
    // console.log(operation(a,b));
    return operation(a,b);
}
//ek function parameter ke form me jaa bhi sakta hai or aa bhi sakta hai
const result = applyoperation(15 ,3,(x , y) => x/y)


// tiffin function /Closure in JavaScript
//closure function jo hai na woo apne aas pass wale environment pr kaam kr sakta hai means apna variable le sakta hai parent se
function countervar(){ //parent function
    let count = 0;
   
    return function(){ //child function, yha prr child function jo hai woo apne parent function ke variables ko le sakta hai apne work ke liye.
        count++;
        console.log(count)
        // return count;
    }
}
const counter = countervar();
console.log(counter)

// perfect example of clouser function 

function tiffin (){
    let items = [];
    return{
        addItems: function(food){
            items.push(food);
            // here we can return items but i just console it
            console.log(`food: ${food},added to the tiffin.`)
        },
        showfood: function(){
             // here we can return items but i just console it
            console.log(`there are ${items.length} kinds of food in the box that is`,items.join(', '),);
        },
        removefood: function(food){
          const index = items.indexOf(food);
            if( index !== -1){
                items.splice(index,1);
                 // here we can return items but i just console it
                console.log(`food: ${food},removed from the tiffin box.`)
            }
            else{
                 // here we can return items but i just console it
                console.log("Box is empty/or this item is not avaliable in the box")
            }
        }

    }
}
const tifinbox = tiffin();
tifinbox.addItems("Apple")
tifinbox.addItems("mango")
tifinbox.addItems("Orange")
tifinbox.addItems("banana")
tifinbox.showfood()
tifinbox.removefood("banana")
tifinbox.showfood()

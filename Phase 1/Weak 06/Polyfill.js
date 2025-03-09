//Polyfill :- functions ka alternative ya backup code hai. for example map function agar kesi browser me kaam nhi kr rha hai then uss time hamara website craash ho jayega for that particular user. issliye hmm map function ka ek polyfill creatre kr lete hai. taaki usse prototype/inbuild method ko run karne ki jarurat hee nhi pade.(.map function prototype me nhi tha then hmm iska polyfill likhna padeha .map ka)
Object.prototype.chai = function(){
    console.log("Chai pee lo!")
}
const obj = {
    name:"garam chai"
}
obj.chai(); //output chai pee lo!

// console.log(Array.prototype)
// console.log(Object.prototype)
Array.prototype.chai2 = function(){
    console.log("Chai mtt peeo!")
}
const arr = [1,2,3,4]
let result = arr.map(a => a*3) 
// console.log(result)
// console.log(Array.prototype) //prototype functionality browser provide karta hai hame caahe wooo array ho ya object

if(!Array.prototype.fill){
    Array.prototype.fill = function(){
        console.log("Chai pee lo ji!")
    }
}
arr.fill();
// console.log(arr.fill())



// Polyfill for map  :)  Array.map((current_index_element, current_index,array) => { })
// 1.

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
      const result = [];
  
      for (let i = 0; i < this.length; i++) {
        const value = userFn(this[i], i);
        result.push(value);
      }
  
      return result;
    };
  }
//   Ex:-
const num = [1,2,3,4]
const multipleof2 = num.myMap((num)=>{
    return num*2;
});
console.log(multipleof2)

// 2.:) Array.map((current_index_element, current_index,array) => { })

    if (!Array.prototype.mymap){
Array.prototype.mymap =  function(cb){
    const result = [];
    for(let i=0;i<this.length;i++){
        const value = cb(this[i],i);
        result.push(value);
        // result.push(cb(this[i],i,this))
    }
    return result;
};
    }
// Examples 
const multipleof3 = num.mymap((num)=>{
    return num*3;
});
console.log(multipleof3);


// Polyfill for filter

// another polyfill for filter
if(!Array.prototype.myfilter2){
    Array.prototype.myfilter2 = function(userFun){
        const result = [];
            for(let i=0;i<this.length;i++){
                if(userFun(this[i]))
                {
                    result.push(this[i]);
                }
            }
            return result;
    }
}

// #Example
const newarr = [2,3,4,6,8,9,3];
const myfilterarray2 = newarr.myfilter2((num)=>{
return num % 2 == 0;
})
console.log(myfilterarray2)

// polyfill for filter
Array.prototype.myfilter = function(callbck){
    let temp = [];
    for(let i=0;i<this.length;i++){
    if(callbck(this[i],i,this))
    {
        temp.push(this[i]);
    }
}
    return temp;
}

const arr1 = [2,3,4,6,8,9,3];
const myfilterarray = arr1.myfilter((num)=>{
return num >3;
})
console.log(myfilterarray)


// Polyfill for foreach
// 1
if(!Array.prototype.myforeach){
    Array.prototype.myforeach = function(callback){
        const temp = this;
        for(let i=0;i<temp.length;i++){
            callback(temp[i],i);
        }
    }
}

const arr2 = [1,2,3,4,5,6,7]
const result2 = arr2.myforeach((num,index)=>{
    console.log(`The index ${index} at present value is ${num}`)
})
console.log(result2)

// 2.
if(!Array.prototype.myforeach1){
    Array.prototype.myforeach = function(callback){
        for(let i=0;i<this.length;i++){
            callback(temp[i],i);
        }
    }
}
const arr3 = [1,2,3,4,5,6,7]
const result3 = arr2.myforeach1((num,index)=>{
    console.log(`The index ${index} at present value is ${num}`)
})
console.log(result3)




if(!Array.prototype.Myreduce) {
    Array.prototype.Myreduce = function(callback,initialValue){
        let accumulator = initialValue === undefined ? undefined : initialValue;
        for(let i=0;i<this.length;i++){
            if(accumulator !== undefined){
                accumulator = callback.call(undefined,accumulator,this[i],i,this)
            }else{
                accumulator = this[i];
            }
        }
        return accumulator;
    }
}
const arr4 = [1,2,3,4,5,6,7]
const result4 = arr4.Myreduce((acc,num)=>{
    return acc+num;
},0)
console.log(result4)
//shallow copy and deep copy 

//shallo copy me hmm bss upar upar se copy karte hai nested me nhi jaate hai or ek chnage dusre prr affect daalta hai
// but in deep copy we can go into the nested into the object and change things and that chnage will not affest any other keys.

const teas = {
    name:"oolone tea",
    caffeine:"medium",
    tea1: {
        name:"black tea",
        caffeine:"High",
        tea2:{
            name: "green tea",
            caffeine:"Low",
        }
    }
}
// console.log(teas)

//FOR SHALLOW COPY
let teascopy = {...teas} //shallow copy of the teas object
teascopy.tea1.name = "blue tea"
console.log(teascopy)

let teascopy1 = teas //referance pass kr rha hai only
teascopy1.name = "white tea"
console.log(teascopy1)

//DEEP COPY the teas object
//first we change teas into string and then
// we convert string into object
const teastostring = JSON.stringify(teas);
let teascopy2 = JSON.parse(teastostring)

teascopy2.caffeine = "low"
teascopy2.tea1.name = "orange tea"

console.log(teascopy2)

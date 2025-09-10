// Clouser:- clouser is a combination of functions and it's lexical scope or require data or surrounding satae

function OuterFunction(){
let name = "Nitish"
    function InnerFunction(){
         name = "Mandal"
        console.log(name)
    }
    InnerFunction();
}
OuterFunction();


// function outerfunction(){
// {
//     let name = "Nitish"; //let -> blocked kscope
// }
// let name = "babu Lal"
// function innerfunction(){
//     console.log(name) //not acces name here
// }
// innerfunction();
// }
// outerfunction();
let fname = "nitish";

function saymyname(){ //function ka apna scope hota hai apna memory phase hota hai
    const lname = "mandal"
    function innerfun(){
        console.log(`first name is : ${fname} and last name is : ${lname}`)
    }
    innerfun();
}

// console.log(fname)
// saymyname();
//execution context has 2 phase :- memory phase and code phase

let count = 0
function increment(){

    setTimeout(() => {
        count+=1;
        console.log(count)
    }, 3000);
}
increment()
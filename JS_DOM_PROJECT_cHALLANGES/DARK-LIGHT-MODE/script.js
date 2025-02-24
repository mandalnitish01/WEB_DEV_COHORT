const theamchanger = document.getElementById('theam-change');
const buttons = document.querySelectorAll('button');
function changebgcolor(color){
    document.body.style.backgroundColor = color;
}

theamchanger.addEventListener('click', ()=>{
    const currentcolor = document.body.style.backgroundColor; //access the current color of the body
    if(!currentcolor || currentcolor == 'white' ){
        changebgcolor('black');
        theamchanger.innerText ="Dark mode"
    }
    else{
        changebgcolor('white');
        theamchanger.innerText = "Light mode"
    }
})
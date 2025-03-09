const buttonid = document.getElementById("buttonid");
buttonid.addEventListener("click", function changebodycolorblack() {
    document.body.style.backgroundColor =
    document.body.style.backgroundColor === "black" ? "white" : "black";
});

const buttonid1 = document.getElementById("buttonid1");
buttonid1.addEventListener("click", function changebodycolorwhite(){
    document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "red" ? "white" : "red";
})


function changebodycolor(color){
    document.body.style.backgroundColor = color
}
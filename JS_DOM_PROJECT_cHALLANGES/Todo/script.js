// const todoinput = document.getElementById('todo-input');
// const addbtn = document.getElementById('add-btn');
// const taskadd = document.getElementById('adding-task-into-the-list');

// addbtn.addEventListener('click', () => {
//     const value = todoinput.value;
//      const li = document.createElement('li');
//     if (!value) {
//        li.textContent = "not a number!"
//       taskadd.appendchild(li)
//     }

//     li.textContent = value;
//     taskadd.appendChild(li);
    
//     // Clear input field
//     todoinput.value = "";

//     // Create delete button
//     const delbtn = document.createElement('button');
//     delbtn.textContent = "X";
//     delbtn.style.marginLeft = "10px";
//     delbtn.addEventListener('click', () => li.remove());
    
//     li.appendChild(delbtn);
// });






const todoinput = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const taskadd = document.getElementById('adding-task-into-the-list');

addbtn.addEventListener('click', function(){
  const inputval = todoinput.value; //read input value
  // console.log(inputval)
if(inputval !== ""){ 
  //create new li tag
  let li = document.createElement("li")
  li.innerText = inputval;
  // console.log(li)
  // append li tag into ul tag
  taskadd.appendChild(li);
  todoinput.value = "";

  //create delete btn 
  const delbtn = document.createElement("button")
  delbtn.innerText = "X";
  delbtn.addEventListener('click',()=> li.remove());
  li.appendChild(delbtn)

  //update todo
  const updatebtn = document.createElement("button")
  updatebtn.innerText = "EDIT"
  li.appendChild(updatebtn)

  updatebtn.addEventListener('click' , function(){
    todoinput.value = li.innerText;
    addbtn.innerText = "edit"
    if(addbtn === "edit"){
      addbtn.addEventListener('click',function(){
        li.innerText = inputval;
      todoinput.value = ""
      addbtn.innerText = "Add"
      })
      
    }
  })
  
}
})

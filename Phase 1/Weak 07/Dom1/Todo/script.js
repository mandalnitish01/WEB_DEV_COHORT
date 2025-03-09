const todoinput = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const taskadd = document.getElementById('adding-task-into-the-list');
addbtn.addEventListener('click', ()=>{

    //adding task into the list
    const value = todoinput.value;
    // console.log(value)
    const li = document.createElement('li');
    li.innerHTML = value;
    // console.log(li)
    taskadd.appendChild(li);

    //after adding empty input
    todoinput.value = "";

    //delete the task from the todo
    const delbtm = document.createElement('button');
    delbtm.innerHTML = "X";
    li.appendChild(delbtm);
    
    delbtm.addEventListener('click', ()=>{
        li.remove();
    })
})
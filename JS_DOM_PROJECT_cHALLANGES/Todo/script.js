const todoinput = document.getElementById('todo-input');
const addbtn = document.getElementById('add-btn');
const taskadd = document.getElementById('adding-task-into-the-list');

addbtn.addEventListener('click', () => {
    const value = todoinput.value;
     const li = document.createElement('li');
    if (!value) {
       li.textContent = "not a number!"
      taskadd.appendchild(li)
    }

    li.textContent = value;
    taskadd.appendChild(li);
    
    // Clear input field
    todoinput.value = "";

    // Create delete button
    const delbtn = document.createElement('button');
    delbtn.textContent = "X";
    delbtn.style.marginLeft = "10px";
    delbtn.addEventListener('click', () => li.remove());
    
    li.appendChild(delbtn);
});

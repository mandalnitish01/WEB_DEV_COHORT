const todoinput = document.getElementById("inputbox");
const addtask = document.getElementById("addBtn");
const Tasklist = document.getElementById("TaskList");
const date = document.getElementById("start");
const priority = document.getElementById("priority");

let editLi = null; // keeps track of which <li> is being edited

addtask.addEventListener("click", () => {
  const inputvalue = todoinput.value.trim();
  const dateValue = date.value.trim();
  const priorityValue = priority.value;

  if (inputvalue.length === 0) return;

  if (editLi) {
    // we are editing an existing todo
    const textSpan = editLi.querySelector(".todo-text");
    const dateSpan = editLi.querySelector(".todo-date");

    textSpan.textContent = inputvalue + " ";
    dateSpan.textContent = dateValue + " ";
    editLi.priorityLevel = priorityValue;

    // update color based on new priority
    if (priorityValue === "high") {
      textSpan.style.color = "red";
    } else if (priorityValue === "medium") {
      textSpan.style.color = "orange";
    } else if (priorityValue === "low") {
      textSpan.style.color = "green";
    }

    editLi = null;
    addtask.innerText = "Add";
    todoinput.value = "";
    date.value = "";
    priority.value = "";
  } else {
    // we are adding a new todo
    const li = document.createElement("li");
    li.priorityLevel = priorityValue; // store priority for later

    const textSpan = document.createElement("span");
    textSpan.className = "todo-text";
    textSpan.textContent = inputvalue + " ";

    if (priorityValue === "high") {
      textSpan.style.color = "red";
    } else if (priorityValue === "medium") {
      textSpan.style.color = "orange";
    } else if (priorityValue === "low") {
      textSpan.style.color = "green";
    }
    li.appendChild(textSpan);

    const datespan = document.createElement("span");
    datespan.className = "todo-date";
    datespan.style.color = "#87CEEB";
    datespan.textContent = dateValue + " ";
    li.appendChild(datespan);

    // delete button
    const delbtn = document.createElement("button");
    delbtn.innerText = "X";
    delbtn.addEventListener("click", () => li.remove());
    li.appendChild(delbtn);

    // edit button
    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.addEventListener("click", () => {
      todoinput.value = textSpan.textContent.trim();
      date.value = datespan.textContent.trim();
      priority.value = li.priorityLevel;

      addtask.innerText = "Save";
      editLi = li;
    });
    li.appendChild(editbtn);

    Tasklist.appendChild(li);
    todoinput.value = "";
    date.value = "";
    priority.value = "";
  }
});

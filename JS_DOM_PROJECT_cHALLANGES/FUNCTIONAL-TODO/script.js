const addtextbtn = document.getElementById("addtextbtn");
const addbtn = document.getElementById("addbtn");
const taskdiv = document.getElementById("taskdiv");
const incrment = document.getElementById("incrementcount")
const whennotextadded = document.getElementById("whennotextadded")
let counter = 0;
addbtn.addEventListener("click", () => {
    
    const value = addtextbtn.value.trim();
    console.log(value)
    if (value === "") return; // Prevent empty tasks

    const div = document.createElement("div");
    div.classList.add("addedtasks");

    let uniqueId = `edit-${counter}`; // Unique ID for the edit button
    counter++;

    div.innerHTML = `
        <div class="checktask">
            <input id="checkbox"  type="checkbox">
            <p class="task-text">${value}</p>
        </div>
        <div>
            <button class="edit-btn" data-id="${uniqueId}">Edit</button>
            <button class="del-btn">Delete</button>
        </div>
    `;
    incrment.innerText = counter;
    whennotextadded.innerText = ""
    taskdiv.appendChild(div);
    addtextbtn.value = "";

    // Add event listener for edit button
    div.querySelector(".edit-btn").addEventListener("click", (event) => {
        const taskText = div.querySelector(".task-text");
        const newText = prompt("Edit your task:", taskText.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    });

    // Add event listener for delete button
    div.querySelector(".del-btn").addEventListener("click", () => {
        div.remove();
        counter--;
        incrment.innerText = counter;
        
    });
});


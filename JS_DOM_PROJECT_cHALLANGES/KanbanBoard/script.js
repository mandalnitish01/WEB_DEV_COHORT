// alert("testing ")
const addTaskBtn = document.getElementById("add-task-btn");
const taskBoard = document.getElementById("todo-board");

addTaskBtn.addEventListener("click", () => {
  const input = prompt("Enter the task name:");
  if (!input) return;

const taskCard = document.createElement("p");
taskCard.classList.add('item');
taskCard.innerText = input;
taskCard.setAttribute("draggable", "true");
taskBoard.appendChild(taskCard);

});



const allBoards = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".item");

allItems.forEach(item =>{
    item.addEventListener('dragstart',()=>{
        item.classList.add('flying');
    });
    item.addEventListener('dragend',()=>{
        item.classList.remove('flying');
    });
})

allBoards.forEach(board =>{
    board.addEventListener('dragover',()=>{
        console.log(board,"something is being dragged over the board");
    })
})
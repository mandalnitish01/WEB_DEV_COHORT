const addnewcard = document.getElementById("add-new-card");
const cardintodiv = document.getElementById("todo-cards");
const addnewboard = document.getElementById("add-new-board");
addnewcard.addEventListener("click", function () {
  const pararesult = prompt("Enter the detail!");

  if (pararesult) {
    const card = document.createElement("div"); // Create a new div element
    card.classList.add("todo-card"); // Add a class name

    card.innerHTML = `
            <p>${pararesult}</p>
            <small class="date">${new Date().toLocaleDateString()}</small>
            <small class="date">${new Date().getHours()}:${new Date().getMinutes()}</small> 
        `;

    cardintodiv.appendChild(card); // Append the new element properly
  }
});
const container = document.getElementById("container")

addnewboard.addEventListener("click", function () {
  const boarddata = prompt("enter the board name");
  console.log(boarddata)
  if (boarddata) {
    const board = document.createElement("section");
    board.classList.add("board")


    
    board.innerHTML = `
    <header class="board-header">
          <div class="header-title">
            <p class="circle" id="todo-circle"></p>
            <h4>${boarddata}</h4>
          </div>
          <div class="display">
            <p id="todo-count" class="cards-count"></p>
            <button class="del-btn"><i class="fa-solid fa-trash"></i></button>
            <button class="edit-board-btn del-btn"><i class="fa-solid fa-pen"></i></button>
          </div>
        </header>

        <div  id="todo-cards"></div>
    `
    console.log(board)
    container.appendChild(board)
  }
});














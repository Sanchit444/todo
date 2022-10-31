const textInputfiled = document.querySelector("#text-input");
const addBtn = document.querySelector("#addbtn");
const todocontainer = document.querySelector(".todo-container");

addBtn.addEventListener("click", () => {
  if (textInputfiled.value.trim().length == "") return;
  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todo-item-container");
  todocontainer.appendChild(todoItemContainer);
  const todoText = document.createElement("p");
  todoText.id = "todo-text";
  todoText.innerText = textInputfiled.value;
  todoItemContainer.appendChild(todoText);
  textInputfiled.value = "";

  todoText.addEventListener("dblclick", () => {
    todoText.classList.add("line-through");
    editButton.setAttribute("disabled", "disabled");
  });

  const editButton = document.createElement("button");
  editButton.id = "edit-button";

  editButton.innerHTML = `<i class="fas fa-pen"></i>`;

  todoItemContainer.appendChild(editButton);

  editButton.addEventListener('click',()=>{
    textInputfiled.value=todoText.innerText;
    const parent = editButton.parentElement;
    parent.parentElement.removeChild(parent)
  })

  const deleteButton = document.createElement("button");
  deleteButton.id = "delete-button";
  deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoItemContainer.appendChild(deleteButton);

  deleteButton.addEventListener('click',()=>{
    const parent = deleteButton.parentElement;
    parent.parentElement.removeChild(parent)
  });

  //    editButton.setAttribute('')
});

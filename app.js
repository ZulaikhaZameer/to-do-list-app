const form = document.querySelector(".form");
const input = form.querySelector(".form__input");
const ul = document.querySelector(".toDoList");

function addItemToDOM(itemId, toDoItem) {
  const li = document.createElement('li');
  li.setAttribute("data-id", itemId);
  
  const span = document.createElement('span');
  span.innerText = toDoItem;
  
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const delBtn = document.createElement('button');
  delBtn.innerText = "Delete";
  delBtn.addEventListener("click", () => {
    removeItemFromDOM(itemId);
  });

  const editBtn = document.createElement('button');
  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", () => {
    editItem(itemId);
  });

  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(delBtn);

  li.appendChild(span);
  li.appendChild(buttonContainer);
  ul.appendChild(li);
}

form.addEventListener("submit", e => {
  e.preventDefault();
  let d = new Date();
  let now = d.getTime();
  let itemId = now.toString();
  let toDoItem = input.value;
  addItemToDOM(itemId, toDoItem);
  input.value = "";
});

function editItem(id) {
  let newText = prompt("Edit the item:", "");
  if (newText !== null && newText.trim() !== "") {
    var li = document.querySelector('[data-id="' + id + '"] span');
    li.innerText = newText;
  }
}

function removeItemFromDOM(id) {
  const li = document.querySelector('[data-id="' + id + '"]');
  ul.removeChild(li);
}

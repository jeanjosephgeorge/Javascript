// Used to track id for delete and update
id = 0;
function addTodo(input) {
  // Create elements for new Todo
  var newDiv = document.createElement("div");
  var newLi = document.createElement("li");
  var newDelete = document.createElement("button");
  var newComplete = document.createElement("button");

  newLi.setAttribute("class", "text");
  // Set value of new elements
  newDelete.innerHTML = "X";
  //   Unicode for checkmark
  newComplete.innerHTML = "&#x2713";
  //   Add event listener
  newDelete.addEventListener("click", deleteTodo);
  newComplete.addEventListener("click", completeTodo);
  // Get text from input
  var input = document.getElementById("newTodo");
  newLi.textContent = input.value;
  newDiv.setAttribute("id", id);
  // Increments ID
  id++;
  //   console.log(id);

  //   Gets ol element so we can append new items
  ol = document.getElementById("todoList");
  //   Appends new div
  ol.appendChild(newDiv);
  //   Appends text and buttons to newDiv
  newDiv.appendChild(newLi);
  newDiv.appendChild(newComplete);
  newDiv.appendChild(newDelete);

  // Sets class for newDiv
  newDiv.setAttribute("class", "todoListItem");

  // Clears input
  input.value = "";
}

function deleteTodo() {
  console.log("delete");
  var id = this.parentElement.id;
  console.log("parent element id: " + id);
  ol = document.getElementById("todoList");
  item = document.getElementById(id);
  ol.removeChild(item);
}

function completeTodo() {
  //   console.log("complete")
  //   Gets ID of parent
  var id = this.parentElement.id;
  //   console.log("parent element id: " + id);

  //   Gets 1st child of parent div
  item = document.getElementById(id);
  var text = item.childNodes[0];
  //   Adds complete class instead of over writting all classes
  text.classList.add("complete");
  // text.setAttribute("class", "complete");
}
var button = document.getElementById("submit");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addAfterClick() {
  if (input.value.length > 0) {
    createListElement();
  }}

button.addEventListener("click", addAfterClick)

function addAfterEnter(event) {
    if (input.value.length > 0 && event.which === 13){
    createListElement();
  }
}

input.addEventListener("keypress", addAfterEnter)

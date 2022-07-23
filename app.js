const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");
const tokeep = document.getElementById("keep")
const listElArray = [];

function addAction() {
  const newstraight = "You need to put some element!";
  const listElementCreator = document.createElement("li");
  listElementCreator.textContent = newstraight;
  if (inputEl.value.length == 0) {
    alert(newstraight);
    listEl.appendChild(listElementCreator);
    return;
  }
  const listElArray = inputEl.value;
  const listElementCreatorr = document.createElement("li");
  listElementCreatorr.textContent = listElArray;
  listEl.appendChild(listElementCreatorr);
  inputEl.value = "";
  console.log(listElArray);
  console.log(listElArray.length);
}

buttonEl.addEventListener("click", addAction);

function remove() {
    listEl.innerHTML = '';
  }

const start = document.getElementById("firstofall");

function play() {
  console.log("TESTING");

  const test = document.createElement("p");
  const saying = "You can add 10 elements here.";
  test.textContent = saying;
  start.appendChild(test);
}
window.onload = play;
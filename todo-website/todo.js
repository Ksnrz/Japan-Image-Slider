let list = [];
let emptyHtml = "";

function renderList() {
  emptyHtml = ""; // empty because i will print only one index in list not the whole.
  for (let i = 0; i < list.length; i++) {
    // list = {test, sport, name}
    let createHtml = `<div class="list-context">
                    <input type="checkbox" onchange="toggleLineThrough(this)">
                    <span class="list-name">${list[i].task}</span>
                    <div class="list-delete"><button onclick='deleteList(${i})'>&#10005;</button></div>
                </div>
                <div class="list-date">${list[i].date}</div>`;
    emptyHtml += createHtml;
  }
  let showList = document.querySelector(".show-list");
  showList.innerHTML = emptyHtml;
}

const addList = () => {
  let todoInput = document.querySelector(".input");
  let input = todoInput.value.trim();
  let dateTimeInput = document.querySelector(".input-datetime");
  let dateTime = dateTimeInput.value; //เพิ่มการเก็บค่า input วันและเวลา
  if (input && dateTime) {
    list.push({ task: input, date: dateTime }); // Add input to list
    console.log(list);
    renderList();
  }
};

const deleteList = (index) => {
  list.splice(index, 1);
  renderList();
};

function toggleLineThrough(checkbox) {
  // span tag is after checkbox which is the input tag so it refer to span tag
  const span = checkbox.nextElementSibling;
  if (checkbox.checked) {
    span.style.textDecoration = "line-through";
    span.style.textDecorationColor = "red";
  } else {
    span.style.textDecoration = "none";
  }
}

let todoInput = document.querySelector(".input");
todoInput.addEventListener("keydown", function (event) {
  // make press enter to add list
  if (event.key === "Enter") {
    addList();
  }
});

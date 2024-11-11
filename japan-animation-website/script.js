let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

const nextItems = () => {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]); // take the first item
};

const prevItems = () => {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]); // take the last item
};
next.addEventListener("click", function () {
  nextItems();
});

prev.addEventListener("click", function () {
  prevItems();
});

// const dropDownInput = document.querySelector('.js-dropdown');
// const dropDownMenu = document.querySelector('.dropdown');
// const dropDownLi = dropDownMenu.querySelectorAll('li');

// dropDownInput.addEventListener('click', showDropDown());

// const showDropDown = () =>{

// }

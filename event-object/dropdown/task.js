const listItems = document.querySelectorAll(".dropdown__item");
const list = document.querySelector(".dropdown__list");
const value = document.querySelector(".dropdown__value");

const arrayItems = Array.from(listItems);

function addSelector() {
  list.classList.add("dropdown__list_active");
}

value.addEventListener("click", addSelector);

function selectItem(event) {
  event.preventDefault();
  value.textContent = event.target.textContent;
  list.classList.remove("dropdown__list_active");
}
arrayItems.forEach((item) => {
  item.addEventListener("click", selectItem);
});

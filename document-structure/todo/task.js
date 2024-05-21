const form = document.querySelector(".tasks__control");
const list = document.querySelector(".tasks__list");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = document.getElementById("task__input").value;
  console.log(text);
  if (text !== "") {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <div class="task__title">${text}</div>
        <a href="#" class="task__remove">&times;</a>`;
    list.appendChild(task);
    document.getElementById("task__input").value = "";
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("task__remove")) {
    e.target.parentElement.remove();
  }
});

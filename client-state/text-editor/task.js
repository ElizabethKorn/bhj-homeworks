const editor = document.getElementById("editor");
const card = document.querySelector(".card");

if (localStorage.getItem("text")) {
  editor.value = localStorage.getItem("text");
}

editor.addEventListener("input", () => {
  localStorage.setItem("text", editor.value);
  console.log(localStorage.text);
});

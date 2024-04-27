const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let isIncreasing = true;
function clicker() {
  counter.textContent++;
  if (isIncreasing) {
    cookie.width = 250;
  } else {
    cookie.width = 190;
  }
  isIncreasing = !isIncreasing;
}
cookie.onclick = clicker;

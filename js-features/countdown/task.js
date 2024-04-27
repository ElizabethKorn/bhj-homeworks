reductionTime = () => {
  const timerCountDown = document.getElementById("timer");
  timerCountDown.textContent--;
  if (timerCountDown.textContent === "0") {
    clearInterval(interval);
    alert("Вы победили в конкурсе!");
  }
};
let interval = setInterval(reductionTime, 1000);

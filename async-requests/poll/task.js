document.addEventListener("DOMContentLoaded", () => {
  const pollTitleElement = document.getElementById("poll__title");
  const pollAnswersElement = document.getElementById("poll__answers");
  function loadNewPoll() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        pollTitleElement.textContent = response.data.title;
        pollAnswersElement.innerHTML = "";
        response.data.answers.forEach((answer) => {
          const button = document.createElement("button");
          button.classList.add("poll__answer");
          button.textContent = answer;
          button.addEventListener("click", () => {
            alert("Спасибо, ваш голос засчитан!");
            loadNewPoll();
          });
          pollAnswersElement.appendChild(button);
        });
      }
    };
  }
  loadNewPoll();
});

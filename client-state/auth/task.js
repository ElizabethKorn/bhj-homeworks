document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signin__form");
  const userIdSpan = document.getElementById("user_id");
  const welcome = document.getElementById("welcome");
  const signin = document.getElementById("signin");
  const logout = document.getElementById("logout");

  const savedUser = localStorage.getItem("user_id");

  if (savedUser) {
    userIdSpan.textContent = savedUser;
    welcome.classList.add("welcome_active");
    signin.classList.remove("signin_active");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        const data = JSON.parse(xhr.responseText);
        if (data.success) {
          localStorage.setItem("user_id", data.user_id);
          userIdSpan.textContent = data.user_id;
          welcome.classList.add("welcome_active");
          signin.classList.remove("signin_active");
          form.reset();
        } else {
          alert("Неверный логин/пароль");
        }
      } else {
        alert("Произошла ошибка при отправке запроса");
      }
    };
    xhr.send(formData);
  });
  logout.addEventListener("click", () => {
    localStorage.removeItem("user_id");
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
  });
});

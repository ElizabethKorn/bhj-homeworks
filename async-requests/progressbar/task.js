document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const progress = document.getElementById("progress");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("file");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.upload.onprogress = function (event) {
      if (event.lengthComputable) {
        const percentComplete = event.loaded / event.total;
        if (!isNaN(percentComplete) && isFinite(percentComplete)) {
          progress.value = percentComplete;
        }
      }
    };

    xhr.onload = function () {
      if (xhr.status === 200 || xhr.status === 201) {
        progress.value = 1;
        alert("Файл успешно загружен!");
        location.reload();
      } else {
        alert("Произошла ошибка при загрузке файла.");
      }
    };
    xhr.send(formData);
  });
});

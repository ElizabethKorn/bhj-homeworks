const items = document.querySelector("#items");
const loader = document.getElementById("loader");

let xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const data = response.response.Valute;
    loader.classList.remove("loader_active");
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        const data_item = data[key];
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
                <div class="item__code">${data_item.CharCode}</div>
                <div class="item__value">${data_item.Value}</div>
                <div class="item__currency">руб.</div>
                  `;
        items.appendChild(item);
      } else if (xhr.readyState === 4) {
        loader.classList.remove("loader_active");
        items.innerHTML = "<p>Не удалось загрузить данные о курсах валют.</p>";
      }
    }
  }
};

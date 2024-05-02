const pages = document.querySelectorAll(".tab");
const pagesContent = document.querySelectorAll(".tab__content");

const pagesArray = Array.from(pages);
const contentArray = Array.from(pagesContent);

function pagesSwitch(event) {
  let index = pagesArray.indexOf(event.target);

  pagesArray.forEach((page) => {
    page.classList.remove("tab_active");
  });

  event.target.classList.add("tab_active");

  contentArray.forEach((content) => {
    content.classList.remove("tab__content_active");
  });

  contentArray[index].classList.add("tab__content_active");
}

pagesArray.forEach((item) => {
  item.addEventListener("click", pagesSwitch);
});

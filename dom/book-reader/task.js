const fontSize = document.querySelectorAll(".font-size");
const book = document.querySelectorAll(".book");

fontSize.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.preventDefault();
    fontSize.forEach((item) => {
      item.classList.remove("font-size_active");
    });
    this.classList.add("font-size_active");

    const newSize = this.getAttribute("data-size");

    book.forEach((bookItem) => {
      bookItem.classList.remove("book_fs-big", "book_fs-small");

      if (newSize === "small") {
        bookItem.classList.add("book_fs-small");
      } else if (newSize === "big") {
        bookItem.classList.add("book_fs-big");
      }
    });
  });
});

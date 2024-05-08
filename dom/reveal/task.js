const reveal = document.querySelectorAll(".reveal");

function scrolling() {
  const windowHeight = window.innerHeight;
  reveal.forEach((el) => {
    const elTop = el.getBoundingClientRect().top;
    const elBottom = el.getBoundingClientRect().bottom;
    if (elTop < windowHeight && elBottom > 0 ) {
        el.classList.add("reveal_active");
    } else {
        el.classList.remove("reveal_active");
    }
  });
}

window.addEventListener("scroll", scrolling);

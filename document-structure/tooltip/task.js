const tooltip = document.querySelectorAll(".has-tooltip");
const tooltipElem = document.createElement("div");
tooltipElem.classList.add("tooltip");

document.body.appendChild(tooltipElem);

tooltip.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    const title = elem.getAttribute("title");

    if (tooltipElem.classList.contains("tooltip_active")) {
      tooltipElem.classList.remove("tooltip_active");
      tooltipElem.style.display = "none";
    } else {
      tooltipElem.innerText = title;
      tooltipElem.classList.add("tooltip_active");
      tooltipElem.style.display = "block";

      const rect = elem.getBoundingClientRect();
      tooltipElem.style.left = `${rect.left}px`;
      tooltipElem.style.top = `${rect.bottom}px`;
    }
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".has-tooltip")) {
    tooltipElem.classList.remove("tooltip_active");
    tooltipElem.style.display = "none";
  }
});

const tooltip = document.querySelectorAll(".has-tooltip");

tooltip.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    removeActiveTooltip();

    let tooltipElem = elem.querySelector(".tooltip");
    const title = elem.getAttribute("title");

    if (!tooltipElem) {
      tooltipElem = document.createElement("div");
      tooltipElem.classList.add("tooltip");
      tooltipElem.innerText = title;
      elem.appendChild(tooltipElem);
    }

    const rect = elem.getBoundingClientRect();
    tooltipElem.style.left = `${rect.left}px`;
    tooltipElem.style.top = `${rect.bottom}px`;
    tooltipElem.classList.add("tooltip_active");
  });
});

function removeActiveTooltip() {
  document.querySelectorAll(".tooltip").forEach((tooltip) => {
    tooltip.classList.remove("tooltip_active");
    tooltip.remove();
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".has-tooltip")) {
    removeActiveTooltip();
  }
});

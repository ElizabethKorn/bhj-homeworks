const rotator = document.querySelectorAll(".rotator__case");
let currentIndex = 0;

function change() {
  let previousIndex =
    currentIndex === 0 ? rotator.length - 1 : currentIndex - 1;
  rotator[previousIndex].classList.remove("rotator__case_active");
  rotator[currentIndex].classList.add("rotator__case_active");
  currentIndex = (currentIndex + 1) % rotator.length;
}

setInterval(change, 1000);

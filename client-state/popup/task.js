document.addEventListener("DOMContentLoaded", () => {
  const modalW = document.querySelector(".modal");
  if (!document.cookie) {
    modalW.classList.add("modal_active");
  }
  const modalClose = document.querySelector(".modal__close_times");
  modalClose.addEventListener("click", () => {
    if (modalW.classList.contains("modal_active")) {
      modalW.classList.remove("modal_active");
      document.cookie = "modal=close";
      console.log(document.cookie);
    }
  });
});

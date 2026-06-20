const modal = document.querySelector("[data-modal]");
const modalOpenBtns = document.querySelectorAll("[data-open-modal]");
const modalCloseBtn = document.querySelector("[data-close-modal]");

const openModal = () => {
  modal.showModal();
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.close();
  document.body.style.overflow = "";
};

modalOpenBtns.forEach((item) => {
  item.addEventListener("click", () => {
    openModal();
  });
});

modalCloseBtn.addEventListener("click", () => {
  closeModal();
});

const form = document.querySelector("[data-modal-form]");
const emailInput = document.querySelector("[data-modal-input]");
const emailError = document.querySelector("[data-modal-error]");
const formSubmitBtn = document.getElementById("form__submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailInput.classList.remove("error");
  emailError.classList.remove("show");

  if (!emailInput.value || !emailInput.validity.valid) {
    emailInput.classList.add("error");
    emailError.classList.add("show");
    return;
  }

  formSubmitBtn.setAttribute("disabled", true);
  formSubmitBtn.style.cursor = "wait";

  setTimeout(() => {
    form.submit();
  }, 1500);
});

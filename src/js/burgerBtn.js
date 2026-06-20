const burgerBtn = document.querySelector("[data-burger-btn]");
const headerNavList = document.querySelector("[data-header-nav]");
const headerNavLinks = document.querySelectorAll(".header__nav-link");
const overlay = document.querySelector("[data-body-overlay]");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  overlay.classList.toggle("active");

  if (burgerBtn.classList.contains("active")) {
    headerNavList.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  } else {
    headerNavList.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

headerNavLinks.forEach((item) => {
  item.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    headerNavList.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  overlay.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    headerNavList.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
});

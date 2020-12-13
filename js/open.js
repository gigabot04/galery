const btnOpen = document.querySelector(".btn__open");
const bodyHidden = document.querySelector(".body__hidden");

btnOpen.addEventListener("click", () => {
  btnOpen.classList.add("btn__open--hidden");
  bodyHidden.classList.add("body__hidden--del");
});

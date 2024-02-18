let icon = document.querySelector(".bar-icon");
let bar = document.querySelector(".long");

icon.addEventListener("click", () => {
  bar.classList.toggle("disappear");
});

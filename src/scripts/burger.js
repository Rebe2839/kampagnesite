const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  btn.classList.toggle("change");
  const menuShown = menu.classList.contains("shown");
  console.log(menuShown);
}

btn.addEventListener("click", toggleMenu);

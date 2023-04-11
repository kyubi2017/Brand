import "./styles/style.css";
import "./styles/reset.css";


const navToggle = document.querySelector("#checkbox");
const navLinks = document.querySelectorAll(".nav-link");
const navList = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("toggle-active");
  navList.classList.toggle("nav-active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.toggle("toggle-active");
    navList.classList.toggle("nav-active");
  });
});



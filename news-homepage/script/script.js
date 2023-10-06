const menu = document.querySelector(".mobile-navbar-btn");
const header = document.querySelector(".header");

menu.addEventListener("click", () => {
    header.classList.toggle("active");
})
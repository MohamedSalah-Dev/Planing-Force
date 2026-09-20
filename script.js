const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links ul");
hamburger.addEventListener("click", function() {
    navLink.classList.toggle("show");
});
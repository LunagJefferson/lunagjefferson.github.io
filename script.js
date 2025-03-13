//Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("nav-menu");
    const toggleButton = document.querySelector(".nav-toggle");

    function toggleMenu() {
        menu.classList.toggle("active");
    }

    function closeMenu(event) {
        if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
            menu.classList.remove("active");
        }
    }

    toggleButton.addEventListener("click", toggleMenu);
    document.addEventListener("click", closeMenu);
});

//Login Toggle
document.addEventListener("DOMContentLoaded", function () {
    const loginMenu = document.getElementById("login-menu");
    const loginToggle = document.querySelector(".login-toggle");

    function toggleLoginMenu() {
        loginMenu.classList.toggle("active");
    }

    function closeLoginMenu(event) {
        if (!loginMenu.contains(event.target) && !loginToggle.contains(event.target)) {
            loginMenu.classList.remove("active");
        }
    }

    loginToggle.addEventListener("click", toggleLoginMenu);
    document.addEventListener("click", closeLoginMenu);
});

//Hide Title
function updateHeaderTitle() {
    const title = document.querySelector("h1");

    if (window.innerWidth <= 768) {
        title.style.display = "none";
    } else {
        title.style.display = "block";
    }
}


updateHeaderTitle();

window.addEventListener("resize", updateHeaderTitle);
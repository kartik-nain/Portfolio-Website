/**
 * Skill scrolling code
 */
let currentScrollPosition = 0;
let scrollAmount = 100;

const sCont = document.querySelector(".scroll");
const hScroll = document.querySelector(".horizontal-scroll");

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition >= 0) {
        currentScrollPosition = 0;
    }

    if (currentScrollPosition <= maxScroll) {
        currentScrollPosition = maxScroll;
    }
    sCont.style.left = currentScrollPosition + "px";
}

/**
 * Hamburger menu code
 */

const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
        navbar.classList.add("open");
        document.body.classList.add("stop-scrolling");
    } else {
        closeMenu();
    }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));
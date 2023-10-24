const burgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar");

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */
    });
}

const navLink02 = document.querySelector(".navbar-dropdown-links-02");
const links02 = document.querySelector(".navbar-links-02");

const navLink01 = document.querySelector(".navbar-dropdown-links-01");
const links01 = document.querySelector(".navbar-links-01");


const btnResource = document.querySelector("#btn-navbar-links-02");
const btnProjects = document.querySelector("#btn-navbar-links-01");


if (navLink02) {
    navLink02.addEventListener('click', () => {
        links02.classList.toggle('show'); /* toggles class */
    });
}

if (navLink01) {
    navLink01.addEventListener('click', () => {
        links01.classList.toggle('show'); /* toggles class */
    });
}
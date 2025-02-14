/* Mobile Nav */
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-show'); /* toggles class */
    });
}
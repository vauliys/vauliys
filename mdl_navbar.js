/* Mobile Nav */
const burgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-show'); /* toggles class */
    });
}
const navProjects = document.getElementById("nav-projects");
const navLinks01 = document.getElementById("nav-links01");

const navResources = document.getElementById("nav-resources");
const navLinks02 = document.getElementById("nav-links02");


if (navProjects) {
    navProjects.addEventListener('click', () => {
        navLinks01.classList.toggle('nav-link-show'); /* toggles class */
        navLinks02.classList.remove('nav-link-show'); /* toggles class */
    });
}
if (navResources) {
    navResources.addEventListener('click', () => {
        navLinks02.classList.toggle('nav-link-show'); /* toggles class */
        navLinks01.classList.remove('nav-link-show'); /* toggles class */
    });
}

/* Desktop Nav */

const navProjectsDesktop = document.getElementById("nav-projects-desktop");
const navResourcesDesktop = document.getElementById("nav-resources-desktop");

const navDesktop = document.getElementById("nav");

const navLinks01Desktop = document.getElementById("nav-links01-desktop");
const navLinks02Desktop = document.getElementById("nav-links02-desktop");




if (navProjectsDesktop) {
    navProjectsDesktop.addEventListener('click', () => {
        navDesktop.classList.toggle('nav-show'); /* toggles class */
        navLinks01Desktop.classList.add('show'); /* toggles class */
        navLinks02Desktop.classList.add('hide'); /* toggles class */

    });
}



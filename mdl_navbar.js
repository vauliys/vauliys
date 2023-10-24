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

/* Footer Projectsscroll to */
const navlinksocial = document.querySelector('#mdl_nav-links_social');
const navlinkmotion = document.querySelector('#mdl_nav-links_motion');
const navlinkdesign = document.querySelector('#mdl_nav-links_design');
const navlinkart = document.querySelector('#mdl_nav-links_art');

if (navlinksocial) {
    navlinksocial.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = 'index#projects';

        tabSocial.classList.toggle('mdl_tab-slider_item_active'); /* toggles class */
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabDesign.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabArt.classList.remove('mdl_tab-slider_item_active'); /* removes class */

        gridSocial.classList.remove('mdl_tab-slider_hide'); /* toggles class */
        gridMotion.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridDesign.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridArt.classList.add('mdl_tab-slider_hide'); /* toggles class */
    });
}

if (navlinkmotion) {
    navlinkmotion.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = 'index#projects';

        tabMotion.classList.add('mdl_tab-slider_item_active'); /* toggles class */
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabDesign.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabArt.classList.remove('mdl_tab-slider_item_active'); /* removes class */

        gridMotion.classList.remove('mdl_tab-slider_hide'); /* toggles class */
        gridSocial.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridDesign.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridArt.classList.add('mdl_tab-slider_hide'); /* toggles class */
    });
}

if (navlinkdesign) {
    navlinkdesign.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = 'index#projects';

        tabMotion.classList.add('mdl_tab-slider_item_active'); /* toggles class */
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabArt.classList.remove('mdl_tab-slider_item_active'); /* removes class */

        gridDesign.classList.remove('mdl_tab-slider_hide'); /* toggles class */
        gridSocial.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridMotion.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridArt.classList.add('mdl_tab-slider_hide'); /* toggles class */
    });
}

if (navlinkart) {
    navlinkart.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = '#art';

        tabArt.classList.add('mdl_tab-slider_item_active'); /* toggles class */
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabDesign.classList.remove('mdl_tab-slider_item_active'); /* removes class */
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /* removes class */

        gridArt.classList.remove('mdl_tab-slider_hide'); /* toggles class */
        gridSocial.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridDesign.classList.add('mdl_tab-slider_hide'); /* toggles class */
        gridMotion.classList.add('mdl_tab-slider_hide'); /* toggles class */
    });
}

const navlinkabout = document.querySelector('#mdl_nav-links_about');
const navlinkprojects = document.querySelector('#mdl_nav-links_projects');
const navlinkclients = document.querySelector('#mdl_nav-links_clients');

if (navlinkabout) {
    navlinkabout.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = '/#about';
    });
}

if (navlinkprojects) {
    navlinkprojects.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = '/#projects';
    });
}

if (navlinkclients) {
    navlinkclients.addEventListener('click', () => {
        navBar.classList.toggle('show'); /* toggles class */

        document.location.href = '/#clients';
    });
}


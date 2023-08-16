const burgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar_link-container");

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/
    });
}





const navHome = document.querySelector(".mdl_dropbox_navbar-home");
const homeLinks = document.querySelector(".mdl_dropbox_navbar-home_links");

const navResource = document.querySelector(".mdl_dropbox_navbar-resources");
const resourceLinks = document.querySelector(".mdl_dropbox_navbar-resources_links");

const navProjects = document.querySelector(".mdl_dropbox_navbar-projects");
const projectLinks = document.querySelector(".mdl_dropbox_navbar-projects_links");

const btnHome = document.querySelector("#btn_dropbox_navbar-home");
const btnResource = document.querySelector("#btn_dropbox_navbar-resources");
const btnProjects = document.querySelector("#btn_dropbox_navbar-projects");


if (navHome) {
    navHome.addEventListener('click', () => {
        homeLinks.classList.toggle('navbar-show'); /*toggles class*/
        btnHome.classList.toggle('btn_chevron-up'); /* toggles arrow rotation */
    });
}

if (navResource) {
    navResource.addEventListener('click', () => {
        resourceLinks.classList.toggle('navbar-show'); /*toggles class*/
        btnResource.classList.toggle('btn_chevron-up'); /* toggles arrow rotation */
    });
}

if (navProjects) {
    navProjects.addEventListener('click', () => {
        projectLinks.classList.toggle('navbar-show'); /*toggles class*/
        btnProjects.classList.toggle('btn_chevron-up'); /* toggles arrow rotation */
    });
}




/*== Footer Projectsscroll to ==*/
const navlinksocial = document.querySelector('#mdl_nav-links_social');
const navlinkmotion = document.querySelector('#mdl_nav-links_motion');
const navlinkdesign = document.querySelector('#mdl_nav-links_design');
const navlinkart = document.querySelector('#mdl_nav-links_art');



if (navlinksocial) {
    navlinksocial.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#projects';

        tabSocial.classList.toggle('mdl_tab-slider_item_active'); /*toggles class*/
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabDesign.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabArt.classList.remove('mdl_tab-slider_item_active'); /*removes class*/

        gridSocial.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        gridMotion.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridDesign.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridArt.classList.add('mdl_tab-slider_hide'); /*toggles class*/
    });
}

if (navlinkmotion) {
    navlinkmotion.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#projects';

        tabMotion.classList.add('mdl_tab-slider_item_active'); /*toggles class*/
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabDesign.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabArt.classList.remove('mdl_tab-slider_item_active'); /*removes class*/

        gridMotion.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        gridSocial.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridDesign.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridArt.classList.add('mdl_tab-slider_hide'); /*toggles class*/
    });
}

if (navlinkdesign) {
    navlinkdesign.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#projects';

        tabMotion.classList.add('mdl_tab-slider_item_active'); /*toggles class*/
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabArt.classList.remove('mdl_tab-slider_item_active'); /*removes class*/

        gridDesign.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        gridSocial.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridMotion.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridArt.classList.add('mdl_tab-slider_hide'); /*toggles class*/
    });
}


if (navlinkart) {
    navlinkart.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#projects';

        tabArt.classList.add('mdl_tab-slider_item_active'); /*toggles class*/
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabDesign.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /*removes class*/

        gridArt.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        gridSocial.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridDesign.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridMotion.classList.add('mdl_tab-slider_hide'); /*toggles class*/
    });
}



const navlinkabout = document.querySelector('#mdl_nav-links_about');
const navlinkprojects = document.querySelector('#mdl_nav-links_projects');
const navlinkclients = document.querySelector('#mdl_nav-links_clients');


if (navlinkabout) {
    navlinkabout.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#about';
    });
}

if (navlinkprojects) {
    navlinkprojects.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#projects';
    });
}

if (navlinkclients) {
    navlinkclients.addEventListener('click', () => {
        navBar.classList.toggle('navbar-show'); /*toggles class*/

        document.location.href = 'index#clients';
    });
}


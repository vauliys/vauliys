/*================ Module: Dropbox ================*/
/*=== Automatically Showing ===*/
const footerhome = document.querySelector(".mdl_dropbox_home");
const footerprojects = document.querySelector(".mdl_dropbox_projects");
const footerresources = document.querySelector(".mdl_dropbox_resources");

/*=== Hidden Links ===*/
const footerhomelinks = document.querySelector('.mdl_dropbox_home-links');
const footerprojectslinks = document.querySelector('.mdl_dropbox_projects-links');
const footerresourceslinks = document.querySelector('.mdl_dropbox_resources-links');

/*== Footer Projects (Desktop) scroll to ==*/
const footerlinkdsocial = document.querySelector('#mdl_footer-links_d-social');
const footerlinkdmotion = document.querySelector('#mdl_footer-links_d-motion');
const footerlinkddesign = document.querySelector('#mdl_footer-links_d-design');
const footerlinkdart = document.querySelector('#mdl_footer-links_d-art');

/*== Footer Projects (Mobile) scroll to ==*/
const footerlinkmsocial = document.querySelector('#mdl_footer-links_m-social');
const footerlinkmmotion = document.querySelector('#mdl_footer-links_m-motion');
const footerlinkmdesign = document.querySelector('#mdl_footer-links_m-design');
const footerlinkmart = document.querySelector('#mdl_footer-links_m-art');


/*=== Rotating Arrow ===*/
const btnfooterhome = document.querySelector("#btn_dropbox_home");
const btnfooterresources = document.querySelector("#btn_dropbox_resources");
const btnfooterprojects = document.querySelector("#btn_dropbox_projects");

const btnChevronUp = document.querySelector(".btn-chevron-up");


/*==*/

/*======*/
if (footerhome) {
    footerhome.addEventListener('click', () => {
        footerhomelinks.classList.toggle('show'); /*toggles class*/
        btnfooterhome.classList.toggle('btn_chevron-up'); /* toggles arrow rotation */
    });
}

if (footerprojects) {
    footerprojects.addEventListener('click', () => {
        footerprojectslinks.classList.toggle('show'); /*toggles class*/
        btnfooterprojects.classList.toggle('btn_chevron-up'); /* toggles arrow rotation */
    });
}

if (footerresources) {
    footerresources.addEventListener('click', () => {
        footerresourceslinks.classList.toggle('show'); /*toggles class*/
        btnfooterresources.classList.toggle('btn_chevron-up'); /* toggles arrow rotation */
    });
}
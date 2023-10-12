/*== Footer Projects (Desktop) scroll to ==*/
const footerlinkdsocial = document.querySelector('#mdl_footer-links_d-social');
const footerlinkdmotion = document.querySelector('#mdl_footer-links_d-motion');
const footerlinkddesign = document.querySelector('#mdl_footer-links_d-design');
const footerlinkdart = document.querySelector('#mdl_footer-links_d-art');

if (footerlinkdsocial) {
    footerlinkdsocial.addEventListener('click', () => {
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

if (footerlinkmsocial) {
    footerlinkmsocial.addEventListener('click', () => {
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
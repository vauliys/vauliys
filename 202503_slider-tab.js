/*================ Slider Tab (Page: Hub)================*/
const tabArt = document.querySelector('#tab-art');
const gridArt= document.querySelector('.projects-art');

const tabDesign = document.querySelector('#tab-design');
const gridDesign = document.querySelector('.projects-design');

const tabMotion = document.querySelector('#tab-motion');
const gridMotion = document.querySelector('.projects-motion');


if (tabArt) {
    /* when Slider item (Social) is clicked perform code*/
    tabArt.addEventListener('click', () => {
        tabArt.classList.add('tab-active'); /* toggles class */
        tabDesign.classList.remove('tab-active'); /* toggles class */
        tabMotion.classList.remove('tab-active'); /* toggles class */

        gridArt.classList.remove('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
    });
}

if (tabDesign) {
    /* when Slider item (Social) is clicked perform code*/
    tabDesign.addEventListener('click', () => {
        tabDesign.classList.add('tab-active'); /* toggles class */
        tabArt.classList.remove('tab-active'); /* toggles class */
        tabMotion.classList.remove('tab-active'); /* toggles class */

        gridDesign.classList.remove('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
    });
}

if (tabMotion) {
    /* when Slider item (Social) is clicked perform code*/
    tabMotion.addEventListener('click', () => {
        tabMotion.classList.add('tab-active'); /* toggles class */
        tabArt.classList.remove('tab-active'); /* toggles class */
        tabDesign.classList.remove('tab-active'); /* toggles class */

        gridMotion.classList.remove('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
    });
}
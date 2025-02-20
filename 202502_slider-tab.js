/*================ Slider Tab (Page: Hub)================*/
const tabServices = document.querySelector('#tab-services');
const gridServices= document.querySelector('.tab-services');

const tabAudience = document.querySelector('#tab-audience');
const gridAudience = document.querySelector('.tab-audience');


if (tabServices) {
    /* when Slider item (Social) is clicked perform code*/
    tabServices.addEventListener('click', () => {
        tabServices.classList.add('tab-active'); /* toggles class */
        tabAudience.classList.remove('tab-active'); /* toggles class */

        gridServices.classList.remove('hide'); /* toggles class */
        gridAudience.classList.add('hide'); /* toggles class */
    });
}

if (tabAudience) {
    /* when Slider item (Social) is clicked perform code*/
    tabAudience.addEventListener('click', () => {
        tabAudience.classList.add('tab-active'); /* toggles class */
        tabServices.classList.remove('tab-active'); /* toggles class */

        gridAudience.classList.remove('hide'); /* toggles class */
        gridServices.classList.add('hide'); /* toggles class */
    });
}



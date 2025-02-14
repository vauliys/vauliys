/*================ Slider Tab (Page: Hub)================*/
const tabFeature = document.querySelector('#tab-feature');
const gridFeature= document.querySelector('.tab-feature');

const tabShop = document.querySelector('#tab-shop');
const gridShop = document.querySelector('.tab-shop');

const tabArt = document.querySelector('#tab-art');
const gridArt= document.querySelector('.tab-art');

const tabContent = document.querySelector('#tab-content');
const gridContent = document.querySelector('.tab-content');

if (tabFeature) {
    /* when Slider item (Social) is clicked perform code*/
    tabFeature.addEventListener('click', () => {
        tabFeature.classList.add('tab-active'); /* toggles class */
        tabShop.classList.remove('tab-active'); /* toggles class */
        tabArt.classList.remove('tab-active'); /* removes class */
        tabContent.classList.remove('tab-active'); /* removes class */

        gridFeature.classList.remove('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridShop.classList.add('hide'); /* toggles class */
        gridContent.classList.add('hide'); /* toggles class */
    });
}

if (tabShop) {
    /* when Slider item (Social) is clicked perform code*/
    tabShop.addEventListener('click', () => {
        tabShop.classList.add('tab-active'); /* toggles class */
        tabArt.classList.remove('tab-active'); /* removes class */
        tabFeature.classList.remove('tab-active'); /* toggles class */
        tabContent.classList.remove('tab-active'); /* removes class */

        gridShop.classList.remove('hide'); /* toggles class */
        gridFeature.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridContent.classList.add('hide'); /* toggles class */
    });
}

if (tabArt) {
    /* when Slider item (Social) is clicked perform code*/
    tabArt.addEventListener('click', () => {
        tabArt.classList.add('tab-active'); /* removes class */
        tabFeature.classList.remove('tab-active'); /* toggles class */
        tabShop.classList.remove('tab-active'); /* removes class */
        tabContent.classList.remove('tab-active'); /* removes class */

        gridArt.classList.remove('hide'); /* toggles class */
        gridFeature.classList.add('hide'); /* toggles class */
        gridShop.classList.add('hide'); /* toggles class */
        gridContent.classList.add('hide'); /* toggles class */
    });
}

if (tabContent) {
    /* when Slider item (Social) is clicked perform code*/
    tabContent.addEventListener('click', () => {
        tabContent.classList.add('tab-active'); /* toggles class */
        tabShop.classList.remove('tab-active'); /* removes class */
        tabArt.classList.remove('tab-active'); /* removes class */
        tabFeature.classList.remove('tab-active'); /* removes class */

        gridContent.classList.remove('hide'); /* toggles class */
        gridFeature.classList.add('hide'); /* toggles class */
        gridShop.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
    });
}



/*================ Module: Tabbed Slider (Homepage)================*/
const tabArt = document.querySelector('#mdl-tab-slider-art');
const gridArt= document.querySelector('.mdl-tab-slider-art');

const tabDesign = document.querySelector('#mdl-tab-slider-design');
const gridDesign = document.querySelector('.mdl-tab-slider-design');

const tabMotion = document.querySelector('#mdl-tab-slider-motion');
const gridMotion= document.querySelector('.mdl-tab-slider-motion');

const tabAnimation = document.querySelector('#mdl-tab-slider-animation');
const gridAnimation = document.querySelector('.mdl-tab-slider-animation');


if (tabArt) {
    /* when Slider item (Social) is clicked perform code*/
    tabArt.addEventListener('click', () => {
        tabArt.classList.toggle('mdl-tab-slider-item_active'); /* toggles class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabAnimation.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridArt.classList.remove('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
        gridAnimation.classList.add('hide'); /* toggles class */
    });
}

if (tabDesign) {
    /* when Slider item (Motion) is clicked perform code*/
    tabDesign.addEventListener('click', () => {
        tabDesign.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabAnimation.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridDesign.classList.remove('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
        gridAnimation.classList.add('hide'); /* toggles class */
    });
}

if (tabMotion) {
    /* when Slider item (Social) is clicked perform code*/
    tabMotion.addEventListener('click', () => {
        tabMotion.classList.toggle('mdl-tab-slider-item_active'); /* toggles class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabAnimation.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridMotion.classList.remove('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridAnimation.classList.add('hide'); /* toggles class */
    });
}

if (tabAnimation) {
    /* when Slider item (Social) is clicked perform code*/
    tabAnimation.addEventListener('click', () => {
        tabAnimation.classList.toggle('mdl-tab-slider-item_active'); /* toggles class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridAnimation.classList.remove('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
    });
}

/*================ Tab Slider: Art.html ================*/
const tab2024 = document.querySelector('#mdl-tab-slider-2024');
const tab2023 = document.querySelector('#mdl-tab-slider-2023');
const tab2022 = document.querySelector('#mdl-tab-slider-2022');
const tab2021 = document.querySelector('#mdl-tab-slider-2021');

const grid2024 = document.querySelector('.art-2024');
const grid2023 = document.querySelector('.art-2023');
const grid2022 = document.querySelector('.art-2022');
const grid2021 = document.querySelector('.art-2021');


/* when Slider item is clicked perform code*/
if (tab2024) {
    tab2024.addEventListener('click', () => {
        tab2024.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tab2023.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2022.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2021.classList.remove('mdl-tab-slider-item_active'); /* removes class */


        grid2024.classList.remove('hide'); /* toggles class */
        grid2022.classList.add('hide'); /* toggles class */
        grid2023.classList.add('hide'); /* toggles class */
        grid2021.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item is clicked perform code*/
if (tab2023) {
    tab2023.addEventListener('click', () => {
        tab2023.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tab2022.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2021.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2024.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        grid2023.classList.remove('hide'); /* toggles class */
        grid2022.classList.add('hide'); /* toggles class */
        grid2021.classList.add('hide'); /* toggles class */
        grid2024.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tab2022) {
    tab2022.addEventListener('click', () => {
        tab2022.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tab2023.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2021.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2024.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        grid2022.classList.remove('hide'); /* toggles class */
        grid2023.classList.add('hide'); /* toggles class */
        grid2021.classList.add('hide'); /* toggles class */
        grid2024.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tab2021) {
    tab2021.addEventListener('click', () => {
        tab2021.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tab2023.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2022.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tab2024.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        grid2021.classList.remove('hide'); /* toggles class */
        grid2022.classList.add('hide'); /* toggles class */
        grid2023.classList.add('hide'); /* toggles class */
        grid2024.classList.add('hide'); /* toggles class */
    });
}


/*================ Tab Slider: Links.html ================*/
const tabdiscounts = document.querySelector('#mdl-tab-slider-discounts');
const tabshop = document.querySelector('#mdl-tab-slider-shop');
const tabfreebies = document.querySelector('#mdl-tab-slider-freebies');

const griddiscounts = document.querySelector('.mdl-tab-slider-discounts ');
const gridshop = document.querySelector('.mdl-tab-slider-shop');
const gridfreebies = document.querySelector('.mdl-tab-slider-freebies');

/* when Slider item is clicked perform code*/
if (tabdiscounts) {
    tabdiscounts.addEventListener('click', () => {
        tabdiscounts.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabshop.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabfreebies.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        griddiscounts.classList.remove('hide'); /* toggles class */
        gridshop.classList.add('hide'); /* toggles class */
        gridfreebies.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tabshop) {
    tabshop.addEventListener('click', () => {
        tabshop.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabdiscounts.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabfreebies.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridshop.classList.remove('hide'); /* toggles class */
        griddiscounts.classList.add('hide'); /* toggles class */
        gridfreebies.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tabfreebies) {
    tabfreebies.addEventListener('click', () => {
        tabfreebies.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabdiscounts.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabshop.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridfreebies.classList.remove('hide'); /* toggles class */
        griddiscounts.classList.add('hide'); /* toggles class */
        gridshop.classList.add('hide'); /* toggles class */
    });
}

/*================ Tab Slider: mediakit.html ================*/
const tabinstagram = document.querySelector('#mdl-tab-slider-instagram');
const tabtiktok = document.querySelector('#mdl-tab-slider-tiktok');
const tabyoutube = document.querySelector('#mdl-tab-slider-youtube');

const gridinstagram = document.querySelector('.mdl-tab-slider-instagram ');
const gridtiktok = document.querySelector('.mdl-tab-slider-tiktok');
const gridyoutube = document.querySelector('.mdl-tab-slider-youtube');

/* when Slider item is clicked perform code*/
if (tabinstagram) {
    tabinstagram.addEventListener('click', () => {
        tabinstagram.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabtiktok.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabyoutube.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridinstagram.classList.remove('hide'); /* toggles class */
        gridtiktok.classList.add('hide'); /* toggles class */
        gridyoutube.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tabtiktok) {
    tabtiktok.addEventListener('click', () => {
        tabtiktok.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabinstagram.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabyoutube.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridtiktok.classList.remove('hide'); /* toggles class */
        gridinstagram.classList.add('hide'); /* toggles class */
        gridyoutube.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tabyoutube) {
    tabyoutube.addEventListener('click', () => {
        tabyoutube.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabinstagram.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabtiktok.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridyoutube.classList.remove('hide'); /* toggles class */
        gridinstagram.classList.add('hide'); /* toggles class */
        gridtiktok.classList.add('hide'); /* toggles class */
    });
}
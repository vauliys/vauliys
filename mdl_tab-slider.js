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
const tabPC = document.querySelector('#mdl-tab-slider-pc');
const tabLighting = document.querySelector('#mdl-tab-slider-lighting');
const tabDecor = document.querySelector('#mdl-tab-slider-decor');
const tabArtSupplies = document.querySelector('#mdl-tab-slider-artsupplies');
const tabPeripherals = document.querySelector('#mdl-tab-slider-peripherals');
const tabFilming = document.querySelector('#mdl-tab-slider-filming');


const gridPC = document.querySelector('.mdl-tab-slider-pc');
const gridLighting = document.querySelector('.mdl-tab-slider-lighting ');
const gridDecor = document.querySelector('.mdl-tab-slider-decor ');
const gridArtSupplies = document.querySelector('.mdl-tab-slider-artsupplies ');
const gridPeripherals = document.querySelector('.mdl-tab-slider-peripherals ');
const gridFilming = document.querySelector('.mdl-tab-slider-filming ');



/* when Slider item is clicked perform code*/
if (tabPC) {
    tabPC.addEventListener('click', () => {
        tabPC.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabLighting.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDecor.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArtSupplies.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFilming.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabPeripherals.classList.remove('mdl-tab-slider-item_active'); /* toggles class */

        gridPC.classList.remove('hide'); /* toggles class */
        gridDecor.classList.add('hide'); /* toggles class */
        gridLighting.classList.add('hide'); /* toggles class */
        gridArtSupplies.classList.add('hide'); /* toggles class */
        gridFilming.classList.add('hide'); /* toggles class */
        gridPeripherals.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item is clicked perform code*/
if (tabLighting) {
    tabLighting.addEventListener('click', () => {
        tabLighting.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabPC.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArtSupplies.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDecor.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFilming.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabPeripherals.classList.remove('mdl-tab-slider-item_active'); /* toggles class */

        gridLighting.classList.remove('hide'); /* toggles class */
        gridDecor.classList.add('hide'); /* toggles class */
        gridPC.classList.add('hide'); /* toggles class */
        gridArtSupplies.classList.add('hide'); /* toggles class */
        gridFilming.classList.add('hide'); /* toggles class */
        gridPeripherals.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item is clicked perform code*/
if (tabDecor) {
    tabDecor.addEventListener('click', () => {
        tabDecor.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabPC.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArtSupplies.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabLighting.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFilming.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabPeripherals.classList.remove('mdl-tab-slider-item_active'); /* toggles class */

        gridDecor.classList.remove('hide'); /* toggles class */
        gridLighting.classList.add('hide'); /* toggles class */
        gridPC.classList.add('hide'); /* toggles class */
        gridArtSupplies.classList.add('hide'); /* toggles class */
        gridFilming.classList.add('hide'); /* toggles class */
        gridPeripherals.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item is clicked perform code*/
if (tabArtSupplies) {
    tabArtSupplies.addEventListener('click', () => {
        tabArtSupplies.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabPC.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabLighting.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDecor.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFilming.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabPeripherals.classList.remove('mdl-tab-slider-item_active'); /* toggles class */

        gridArtSupplies.classList.remove('hide'); /* toggles class */
        gridDecor.classList.add('hide'); /* toggles class */
        gridPC.classList.add('hide'); /* toggles class */
        gridLighting.classList.add('hide'); /* toggles class */
        gridFilming.classList.add('hide'); /* toggles class */
        gridPeripherals.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item is clicked perform code*/
if (tabPeripherals) {
    tabPeripherals.addEventListener('click', () => {
        tabPeripherals.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabPC.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabLighting.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDecor.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArtSupplies.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFilming.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridPeripherals.classList.remove('hide'); /* toggles class */
        gridDecor.classList.add('hide'); /* toggles class */
        gridPC.classList.add('hide'); /* toggles class */
        gridLighting.classList.add('hide'); /* toggles class */
        gridArtSupplies.classList.add('hide'); /* toggles class */
        gridFilming.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item is clicked perform code*/
if (tabFilming) {
    tabFilming.addEventListener('click', () => {
        tabFilming.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabPC.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabLighting.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDecor.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArtSupplies.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabPeripherals.classList.remove('mdl-tab-slider-item_active'); /* toggles class */

        gridFilming.classList.remove('hide'); /* toggles class */
        gridDecor.classList.add('hide'); /* toggles class */
        gridPC.classList.add('hide'); /* toggles class */
        gridLighting.classList.add('hide'); /* toggles class */
        gridArtSupplies.classList.add('hide'); /* toggles class */
        gridPeripherals.classList.add('hide'); /* toggles class */
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
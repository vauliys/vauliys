/*================ Module: Tabbed Slider (Homepage)================*/
const tabFeatured = document.querySelector('#mdl-tab-slider-featured');
const gridFeatured = document.querySelector('.mdl-tab-slider-featured');

const tabSocial = document.querySelector('#mdl-tab-slider-social');
const gridSocial = document.querySelector('.mdl-tab-slider-social');

const tabMotion = document.querySelector('#mdl-tab-slider-motion');
const gridMotion = document.querySelector('.mdl-tab-slider-motion');

const tabDesign = document.querySelector('#mdl-tab-slider-design');
const gridDesign = document.querySelector('.mdl-tab-slider-design');

const tabArt = document.querySelector('#mdl-tab-slider-art');
const gridArt = document.querySelector('.mdl-tab-slider-art');

if (tabFeatured) {
    /* when Slider item (Social) is clicked perform code*/
    tabFeatured.addEventListener('click', () => {
        tabFeatured.classList.toggle('mdl-tab-slider-item_active'); /* toggles class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabSocial.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridFeatured.classList.remove('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridSocial.classList.add('hide'); /* toggles class */
    });
}

if (tabSocial) {
    /* when Slider item (Social) is clicked perform code*/
    tabSocial.addEventListener('click', () => {
        tabSocial.classList.toggle('mdl-tab-slider-item_active'); /* toggles class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFeatured.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridSocial.classList.remove('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridFeatured.classList.add('hide'); /* toggles class */
    });
}

if (tabMotion) {
    /* when Slider item (Motion) is clicked perform code*/
    tabMotion.addEventListener('click', () => {
        tabMotion.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabSocial.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFeatured.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridMotion.classList.remove('hide'); /* toggles class */
        gridSocial.classList.add('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridFeatured.classList.add('hide'); /* toggles class */
    });
}

if (tabDesign) {
    /* when Slider item (Motion) is clicked perform code*/
    tabDesign.addEventListener('click', () => {
        tabDesign.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabSocial.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabArt.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFeatured.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFeatured.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridDesign.classList.remove('hide'); /* toggles class */
        gridSocial.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
        gridArt.classList.add('hide'); /* toggles class */
        gridFeatured.classList.add('hide'); /* toggles class */
    });
}

/* when Slider item (Art) is clicked perform code*/
if (tabArt) {
    /* when Slider item (Motion) is clicked perform code*/
    tabArt.addEventListener('click', () => {
        tabArt.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabSocial.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabDesign.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabMotion.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabFeatured.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridArt.classList.remove('hide'); /* toggles class */
        gridSocial.classList.add('hide'); /* toggles class */
        gridDesign.classList.add('hide'); /* toggles class */
        gridMotion.classList.add('hide'); /* toggles class */
        gridFeatured.classList.add('hide'); /* toggles class */
    });
}



/*================ Module: Tabbed Slider (Solar Opposites)================*/
const SOLpropsTab = document.querySelector('#sol-props-tab');
const SOLcharTab = document.querySelector('#sol-char-tab');


const SOLpropsGrid = document.querySelector('.sol-props-grid');
const SOLcharGrid = document.querySelector('.sol-char-grid ');

/* when Slider item (Props) is clicked perform code*/
if (SOLpropsTab) {
    SOLpropsTab.addEventListener('click', () => {
        SOLpropsTab.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        SOLcharTab.classList.remove('mdl-tab-slider-item_active'); /* removes class */


        SOLcharGrid.classList.add('hide'); /* toggles class */
        SOLpropsGrid.classList.remove('hide'); /* toggles class */
    });
}
/* when Slider item (Character) is clicked perform code*/
if (SOLcharTab) {
    SOLcharTab.addEventListener('click', () => {
        SOLcharTab.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        SOLpropsTab.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        SOLcharGrid.classList.remove('hide'); /* toggles class */
        SOLpropsGrid.classList.add('hide'); /* toggles class */
    });
}



/*================ Module::: Tabbed Slider (Solar Opposites)================*/
const cbEasterTab = document.querySelector('#cb-easter-tab');
const cbXmasTab = document.querySelector('#cb-xmas-tab');

const cbEasterText = document.querySelector('#cb-easter-text');
const cbXmasText = document.querySelector('#cb-xmas-text');

const cbEasterGrid = document.querySelector('.cb-easter-grid');
const cbXmasGrid = document.querySelector('.cb-xmas-grid');

/* when Slider item (Art) is clicked perform code*/
if (cbEasterTab) {
    cbEasterTab.addEventListener('click', () => {
        cbEasterTab.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        cbXmasTab.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        cbXmasText.classList.add('hide'); /* toggles class */
        cbEasterText.classList.remove('hide'); /* toggles class */

        cbXmasGrid.classList.add('hide'); /* toggles class */
        cbEasterGrid.classList.remove('hide'); /* toggles class */
    });
}


/* when Slider item (Art) is clicked perform code*/
if (cbXmasTab) {
    cbXmasTab.addEventListener('click', () => {
        cbXmasTab.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        cbEasterTab.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        cbXmasText.classList.remove('hide'); /* toggles class */
        cbEasterText.classList.add('hide'); /* toggles class */

        cbXmasGrid.classList.remove('hide'); /* toggles class */
        cbEasterGrid.classList.add('hide'); /* toggles class */
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
const tabsupport = document.querySelector('#mdl-tab-slider-support');
const tabshop = document.querySelector('#mdl-tab-slider-shop');
const tabassets = document.querySelector('#mdl-tab-slider-assets');

const gridsupport = document.querySelector('.mdl-tab-slider-support ');
const gridshop = document.querySelector('.mdl-tab-slider-shop');
const gridassets = document.querySelector('.mdl-tab-slider-assets');

/* when Slider item is clicked perform code*/
if (tabsupport) {
    tabsupport.addEventListener('click', () => {
        tabsupport.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabshop.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabassets.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridsupport.classList.remove('hide'); /* toggles class */
        gridshop.classList.add('hide'); /* toggles class */
        gridassets.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tabshop) {
    tabshop.addEventListener('click', () => {
        tabshop.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabsupport.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabassets.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridshop.classList.remove('hide'); /* toggles class */
        gridsupport.classList.add('hide'); /* toggles class */
        gridassets.classList.add('hide'); /* toggles class */
    });
}
/* when Slider item is clicked perform code*/
if (tabassets) {
    tabassets.addEventListener('click', () => {
        tabassets.classList.add('mdl-tab-slider-item_active'); /* toggles class */
        tabsupport.classList.remove('mdl-tab-slider-item_active'); /* removes class */
        tabshop.classList.remove('mdl-tab-slider-item_active'); /* removes class */

        gridassets.classList.remove('hide'); /* toggles class */
        gridsupport.classList.add('hide'); /* toggles class */
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
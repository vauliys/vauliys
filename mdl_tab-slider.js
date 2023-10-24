/*================ Module::: Tabbed Slider (Homepage)================*/
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



/*================ Module::: Tabbed Slider (Solar Opposites)================*/
const tabSOLProps = document.querySelector('#mdl_tab-slider_sol-props');
const textSOLProps = document.querySelector('#mdl_tab-slider_sol-props-t'); 
const gridSOLProps = document.querySelector('.mdl_tab-slider_sol-props');

const tabSOLChar = document.querySelector('#mdl_tab-slider_sol-char');
const textSOLChar = document.querySelector('#mdl_tab-slider_sol-char-t'); 
const gridSOLChar = document.querySelector('.mdl_tab-slider_sol-char');

/* when Slider item (Art) is clicked perform code*/
if (tabSOLProps) {
    tabSOLProps.addEventListener('click', () => {
        tabSOLProps.classList.add('mdl-tab-slider-item_inv_active'); /* toggles class */
        tabSOLChar.classList.remove('mdl-tab-slider-item_inv_active'); /* removes class */

        textSOLProps.classList.remove('hide'); /* toggles class */        
        textSOLChar.classList.add('hide'); /* toggles class */

        gridSOLProps.classList.remove('hide');
        gridSOLChar.classList.toggle('hide');
    });
}


/* when Slider item (Art) is clicked perform code*/
if (tabSOLChar) {
    tabSOLChar.addEventListener('click', () => {
        tabSOLChar.classList.add('mdl-tab-slider-item_inv_active'); /* toggles class */
        tabSOLProps.classList.remove('mdl-tab-slider-item_inv_active'); /* removes class */

        textSOLChar.classList.remove('hide'); /* toggles class */
        textSOLProps.classList.add('hide'); /* toggles class */

        gridSOLChar.classList.remove('hide');
        gridSOLProps.classList.toggle('hide');

    });
}



/*================ Module::: Tabbed Slider (Solar Opposites)================*/
const tabChocEaster = document.querySelector('#mdl_tab-slider_choc-easter');
const textChocEaster = document.querySelector('#mdl_tab-slider_choc-easter-t'); 
const gridChocEaster = document.querySelector('.mdl_tab-slider_choc-easter');

const tabChocXmas = document.querySelector('#mdl_tab-slider_choc-xmas');
const textChocXmas = document.querySelector('#mdl_tab-slider_choc-xmas-t'); 
const gridChocXmas = document.querySelector('.mdl_tab-slider_choc-xmas');

/* when Slider item (Art) is clicked perform code*/
if (tabChocEaster) {
    tabChocEaster.addEventListener('click', () => {
        tabChocEaster.classList.add('mdl-tab-slider-item_inv_active'); /* toggles class */
        tabChocXmas.classList.remove('mdl-tab-slider-item_inv_active'); /* removes class */

        textChocEaster.classList.remove('hide'); /* toggles class */        
        textChocXmas.classList.add('hide'); /* toggles class */

        gridChocEaster.classList.remove('hide');
        gridChocXmas.classList.toggle('hide');
    });
}


/* when Slider item (Art) is clicked perform code*/
if (tabChocXmas) {
    tabChocXmas.addEventListener('click', () => {
        tabChocXmas.classList.add('mdl-tab-slider-item_inv_active'); /* toggles class */
        tabChocEaster.classList.remove('mdl-tab-slider-item_inv_active'); /* removes class */

        textChocXmas.classList.remove('hide'); /* toggles class */
        textChocEaster.classList.add('hide'); /* toggles class */

        gridChocXmas.classList.remove('hide');
        gridChocEaster.classList.toggle('hide');

    });
}
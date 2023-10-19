/*================ Module:: Tabbed Slider (Homepage)================*/
const tabSocial = document.querySelector('#mdl_tab-slider_social');
const gridSocial = document.querySelector('.mdl_tab-slider_social');

const tabMotion = document.querySelector('#mdl_tab-slider_motion');
const gridMotion = document.querySelector('.mdl_tab-slider_motion');

const tabDesign = document.querySelector('#mdl_tab-slider_design');
const gridDesign = document.querySelector('.mdl_tab-slider_design');

const tabArt = document.querySelector('#mdl_tab-slider_art');
const gridArt = document.querySelector('.mdl_tab-slider_art');




if (tabSocial) {
    /* when Slider item (Social) is clicked perform code*/
    tabSocial.addEventListener('click', () => {
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

if (tabMotion) {
    /* when Slider item (Motion) is clicked perform code*/
    tabMotion.addEventListener('click', () => {
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

if (tabDesign) {
    /* when Slider item (Motion) is clicked perform code*/
    tabDesign.addEventListener('click', () => {
        tabDesign.classList.add('mdl_tab-slider_item_active'); /*toggles class*/
        tabSocial.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabMotion.classList.remove('mdl_tab-slider_item_active'); /*removes class*/
        tabArt.classList.remove('mdl_tab-slider_item_active'); /*removes class*/

        gridDesign.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        gridSocial.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridMotion.classList.add('mdl_tab-slider_hide'); /*toggles class*/
        gridArt.classList.add('mdl_tab-slider_hide'); /*toggles class*/
    });
}

/* when Slider item (Art) is clicked perform code*/
if (tabArt) {
    /* when Slider item (Motion) is clicked perform code*/
    tabArt.addEventListener('click', () => {
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



/*================ Module:: Tabbed Slider (Solar Opposites)================*/
const tabSOLProps = document.querySelector('#mdl_tab-slider_sol-props');
const textSOLProps = document.querySelector('#mdl_tab-slider_sol-props-t'); 
const gridSOLProps = document.querySelector('.mdl_tab-slider_sol-props');

const tabSOLChar = document.querySelector('#mdl_tab-slider_sol-char');
const textSOLChar = document.querySelector('#mdl_tab-slider_sol-char-t'); 
const gridSOLChar = document.querySelector('.mdl_tab-slider_sol-char');

/* when Slider item (Art) is clicked perform code*/
if (tabSOLProps) {
    tabSOLProps.addEventListener('click', () => {
        tabSOLProps.classList.add('mdl_tab-slider_item_inv_active'); /*toggles class*/
        tabSOLChar.classList.remove('mdl_tab-slider_item_inv_active'); /*removes class*/

        textSOLProps.classList.remove('mdl_tab-slider_hide'); /*toggles class*/        
        textSOLChar.classList.add('mdl_tab-slider_hide'); /*toggles class*/

        gridSOLProps.classList.remove('mdl_tab-slider_hide');
        gridSOLChar.classList.toggle('mdl_tab-slider_hide');
    });
}


/* when Slider item (Art) is clicked perform code*/
if (tabSOLChar) {
    tabSOLChar.addEventListener('click', () => {
        tabSOLChar.classList.add('mdl_tab-slider_item_inv_active'); /*toggles class*/
        tabSOLProps.classList.remove('mdl_tab-slider_item_inv_active'); /*removes class*/

        textSOLChar.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        textSOLProps.classList.add('mdl_tab-slider_hide'); /*toggles class*/

        gridSOLChar.classList.remove('mdl_tab-slider_hide');
        gridSOLProps.classList.toggle('mdl_tab-slider_hide');

    });
}



/*================ Module:: Tabbed Slider (Solar Opposites)================*/
const tabChocEaster = document.querySelector('#mdl_tab-slider_choc-easter');
const textChocEaster = document.querySelector('#mdl_tab-slider_choc-easter-t'); 
const gridChocEaster = document.querySelector('.mdl_tab-slider_choc-easter');

const tabChocXmas = document.querySelector('#mdl_tab-slider_choc-xmas');
const textChocXmas = document.querySelector('#mdl_tab-slider_choc-xmas-t'); 
const gridChocXmas = document.querySelector('.mdl_tab-slider_choc-xmas');

/* when Slider item (Art) is clicked perform code*/
if (tabChocEaster) {
    tabChocEaster.addEventListener('click', () => {
        tabChocEaster.classList.add('mdl_tab-slider_item_inv_active'); /*toggles class*/
        tabChocXmas.classList.remove('mdl_tab-slider_item_inv_active'); /*removes class*/

        textChocEaster.classList.remove('mdl_tab-slider_hide'); /*toggles class*/        
        textChocXmas.classList.add('mdl_tab-slider_hide'); /*toggles class*/

        gridChocEaster.classList.remove('mdl_tab-slider_hide');
        gridChocXmas.classList.toggle('mdl_tab-slider_hide');
    });
}


/* when Slider item (Art) is clicked perform code*/
if (tabChocXmas) {
    tabChocXmas.addEventListener('click', () => {
        tabChocXmas.classList.add('mdl_tab-slider_item_inv_active'); /*toggles class*/
        tabChocEaster.classList.remove('mdl_tab-slider_item_inv_active'); /*removes class*/

        textChocXmas.classList.remove('mdl_tab-slider_hide'); /*toggles class*/
        textChocEaster.classList.add('mdl_tab-slider_hide'); /*toggles class*/

        gridChocXmas.classList.remove('mdl_tab-slider_hide');
        gridChocEaster.classList.toggle('mdl_tab-slider_hide');

    });
}
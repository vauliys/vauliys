/*================ Wiki reveal (Page: Hub)================*/
const tabContents = document.querySelector('#tab-contents');
const Contents= document.querySelector('#wiki-contents');

const tabGeneral = document.querySelector('#wiki-general');
const General= document.querySelector('#wiki-general-details');

const tabPhysical = document.querySelector('#wiki-physical');
const Physical= document.querySelector('#wiki-physical-details');


if (tabContents) {
    /* when Slider item (Social) is clicked perform code*/
    tabContents.addEventListener('click', () => {
        Contents.classList.toggle('hide'); /* toggles class */
    });
}

if (tabGeneral) {
    /* when Slider item (Social) is clicked perform code*/
    tabGeneral.addEventListener('click', () => {
        General.classList.toggle('hide'); /* toggles class */
    });
}

if (tabPhysical) {
    /* when Slider item (Social) is clicked perform code*/
    tabPhysical.addEventListener('click', () => {
        Physical.classList.toggle('hide'); /* toggles class */
    });
}
/*================ Slider Tab (Page: Hub)================*/
const pryth = document.querySelector('#prythian');
const morepryth = document.querySelector('#more-prythian');

const choc = document.querySelector('#chocolate');
const morechoc = document.querySelector('#more-chocolate');

const nuvei = document.querySelector('#nuvei');
const morenuvei = document.querySelector('#more-nuvei');

const sleet = document.querySelector('#sleet');
const moresleet = document.querySelector('#more-sleet');

const hff = document.querySelector('#hff');
const morehff = document.querySelector('#more-hff');

const pbtbr = document.querySelector('#pbtbr');
const morepbtbr = document.querySelector('#more-pbtbr');


if (pryth) {
    /* when Slider item (Social) is clicked perform code*/
    pryth.addEventListener('click', () => {

        morepryth.classList.toggle('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
        morepbtbr.classList.add('hide'); /* toggles class */
    });
}

if (choc) {
    /* when Slider item (Social) is clicked perform code*/
    choc.addEventListener('click', () => {

        morechoc.classList.toggle('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
        morepbtbr.classList.add('hide'); /* toggles class */
    });
}

if (nuvei) {
    /* when Slider item (Social) is clicked perform code*/
    nuvei.addEventListener('click', () => {

        morenuvei.classList.toggle('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
        morepbtbr.classList.add('hide'); /* toggles class */
    });
}

if (sleet) {
    /* when Slider item (Social) is clicked perform code*/
    sleet.addEventListener('click', () => {

        moresleet.classList.toggle('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
        morepbtbr.classList.add('hide'); /* toggles class */
    });
}


if (hff) {
    /* when Slider item (Social) is clicked perform code*/
    hff.addEventListener('click', () => {

        morehff.classList.toggle('hide'); /* toggles class */
        moresleet.classList.add('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
        morepbtbr.classList.add('hide'); /* toggles class */
    });
}

if (pbtbr) {
    /* when Slider item (Social) is clicked perform code*/
    pbtbr.addEventListener('click', () => {

        morepbtbr.classList.toggle('hide'); /* toggles class */
        moresleet.classList.add('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
        morehff.classList.add('hide'); /* toggles class */
    });
}
/*================ Slider Tab (Page: Hub)================*/
const pryth = document.querySelector('#prythian');
const morepryth = document.querySelector('#more-prythian');

const choc = document.querySelector('#chocolate');
const morechoc = document.querySelector('#more-chocolate');

const nuvei = document.querySelector('#nuvei');
const morenuvei = document.querySelector('#more-nuvei');



if (pryth) {
    /* when Slider item (Social) is clicked perform code*/
    pryth.addEventListener('click', () => {

        morepryth.classList.toggle('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
    });
}

if (choc) {
    /* when Slider item (Social) is clicked perform code*/
    choc.addEventListener('click', () => {

        morechoc.classList.toggle('hide'); /* toggles class */
        morenuvei.classList.add('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
    });
}

if (nuvei) {
    /* when Slider item (Social) is clicked perform code*/
    nuvei.addEventListener('click', () => {

        morenuvei.classList.toggle('hide'); /* toggles class */
        morechoc.classList.add('hide'); /* toggles class */
        morepryth.classList.add('hide'); /* toggles class */
    });
}
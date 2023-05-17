/*================ Dropbox: Reveal Content ================*/

const priceBg = document.querySelector('.dropbox-bg');
const priceFlat = document.querySelector('.dropbox-flat');
const priceRender = document.querySelector('.dropbox-render');

const btnBg = document.querySelector("#btn-bg");
const btnFlat = document.querySelector("#btn-flat");
const btnRender = document.querySelector("#btn-render");

const dropBox01 = document.querySelector(".dropbox-container01");
const dropBox02 = document.querySelector(".dropbox-container02");
const dropBox03= document.querySelector(".dropbox-container03");

const btnChevronUp = document.querySelector(".btn-chevron-up");

/*======*/
if (dropBox01) {
    dropBox01.addEventListener('click', () => {
        priceFlat.classList.toggle('show'); /*toggles class*/
        btnFlat.classList.toggle('btn-chevron-up'); /* toggles arrow rotation */
    });
}
if (dropBox02) {
    dropBox02.addEventListener('click', e => {
        priceRender.classList.toggle('show'); /*toggles class*/
        btnRender.classList.toggle('btn-chevron-up');
    });
}

if (dropBox03) {
    dropBox03.addEventListener('click', () => {
        priceBg.classList.toggle('show');
        btnBg.classList.toggle('btn-chevron-up');
    });
}
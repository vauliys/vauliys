/*================ Dropbox: Reveal Content ================*/

const priceBg = document.querySelector('.dropbox-bg');
const priceFlat = document.querySelector('.dropbox-flat');
const priceRender = document.querySelector('.dropbox-render');

const btnBg = document.querySelector("#btn-bg");
const btnFlat = document.querySelector("#btn-flat");
const btnRender = document.querySelector("#btn-render");

const btnChevronUp = document.querySelector(".btn-chevron-up");

/*======*/
if (btnFlat) {
    btnFlat.addEventListener('click', () => {
        priceFlat.classList.toggle('show'); /*toggles class*/
        btnFlat.classList.toggle('btn-chevron-up'); /* toggles arrow rotation */
    });
}
if (btnRender) {
    btnRender.addEventListener('click', e => {
        priceRender.classList.toggle('show'); /*toggles class*/
        btnRender.classList.toggle('btn-chevron-up');
    });
}
if (null) {

}
if (btnBg) {
    btnBg.addEventListener('click', () => {
        priceBg.classList.toggle('show');
        btnBg.classList.toggle('btn-chevron-up');
    });
}
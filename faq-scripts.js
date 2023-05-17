/*================ Dropdown: Reveal Content ================*/

const dropDowntext01 = document.querySelector('.dropdown-text-01');
const dropDowntext02 = document.querySelector('.dropdown-text-02');
const dropDowntext03 = document.querySelector('.dropdown-text-03');
const dropDowntext04 = document.querySelector('.dropdown-text-04');
const dropDowntext05 = document.querySelector('.dropdown-text-05');
const dropDowntext06 = document.querySelector('.dropdown-text-06');
const dropDowntext07 = document.querySelector('.dropdown-text-07');

const dropDown01 = document.querySelector('.dropdown-container-01');
const dropDown02 = document.querySelector('.dropdown-container-02');
const dropDown03 = document.querySelector('.dropdown-container-03');
const dropDown04 = document.querySelector('.dropdown-container-04');
const dropDown05 = document.querySelector('.dropdown-container-05');
const dropDown06 = document.querySelector('.dropdown-container-06');
const dropDown07 = document.querySelector('.dropdown-container-07');

const btnFaq01 = document.querySelector("#btn-faq-01");
const btnFaq02 = document.querySelector("#btn-faq-02");
const btnFaq03 = document.querySelector("#btn-faq-03");
const btnFaq04 = document.querySelector("#btn-faq-04");
const btnFaq05 = document.querySelector("#btn-faq-05");
const btnFaq06 = document.querySelector("#btn-faq-06");
const btnFaq07 = document.querySelector("#btn-faq-07");

const formDrop01 = document.querySelector("#form-contact-method");
const formDropArrow01 = document.querySelector("#form-dropdown01");

/*======*/

if(dropDown01) {
dropDown01.addEventListener('click', () => {
    dropDowntext01.classList.toggle('dropdown-show');
    btnFaq01.classList.toggle('btn-chevron-up');
    dropDown01.classList.toggle('dropdown-fill');
});
}

if(dropDown02) {
dropDown02.addEventListener('click', () => {
    dropDowntext02.classList.toggle('dropdown-show');
    btnFaq02.classList.toggle('btn-chevron-up');
    dropDown02.classList.toggle('dropdown-fill');

});
}

if(dropDown03) {
dropDown03.addEventListener('click', () => {
    dropDowntext03.classList.toggle('dropdown-show');
    btnFaq03.classList.toggle('btn-chevron-up');
    dropDown03.classList.toggle('dropdown-fill');
});
}

if(dropDown04) {
dropDown04.addEventListener('click', () => {
    dropDowntext04.classList.toggle('dropdown-show');
    btnFaq04.classList.toggle('btn-chevron-up');
    dropDown04.classList.toggle('dropdown-fill');
});
}

if(dropDown05) {
dropDown05.addEventListener('click', () => {
    dropDowntext05.classList.toggle('dropdown-show');
    btnFaq05.classList.toggle('btn-chevron-up');
    dropDown05.classList.toggle('dropdown-fill');
});
}

if(dropDown06) {
dropDown06.addEventListener('click', () => {
    dropDowntext06.classList.toggle('dropdown-show');
    btnFaq06.classList.toggle('btn-chevron-up');
    dropDown06.classList.toggle('dropdown-fill');
});
}

if(dropDown07) {
dropDown07.addEventListener('click', () => {
    dropDowntext07.classList.toggle('dropdown-show');
    btnFaq07.classList.toggle('btn-chevron-up');
    dropDown07.classList.toggle('dropdown-fill');
});
}

if (formDrop01) {
formDrop01.addEventListener('click', () => {
    formDropArrow01.classList.toggle('btn-chevron-up');
});
}











/*================ Slider Tab (Page: Hub)================*/
const fldart = document.querySelector('#fld-art');
const art = document.querySelector('#art');

const flddesign = document.querySelector('#fld-design');
const design = document.querySelector('#design');

const fldcontent = document.querySelector('#fld-content');
const content = document.querySelector('#content');

if (fldart) {
    /* when Slider item (Social) is clicked perform code*/
    fldart.addEventListener('click', () => {

        art.classList.remove('hide'); /* toggles class */
        design.classList.add('hide'); /* toggles class */
        content.classList.add('hide'); /* toggles class */
    });
}


if (flddesign) {
    /* when Slider item (Social) is clicked perform code*/
    flddesign.addEventListener('click', () => {

        design.classList.remove('hide'); /* toggles class */
        art.classList.add('hide'); /* toggles class */
        content.classList.add('hide'); /* toggles class */
    });
}


if (fldcontent) {
    /* when Slider item (Social) is clicked perform code*/
    fldcontent.addEventListener('click', () => {

        content.classList.remove('hide'); /* toggles class */
        art.classList.add('hide'); /* toggles class */
        design.classList.add('hide'); /* toggles class */
   
    });
}



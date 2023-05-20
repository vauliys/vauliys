
/*================ Section: Category Slider ================*/
const catFeatured = document.querySelector('#category-viewall');
const catMotion = document.querySelector('#category-motion');
const catPrint = document.querySelector('#category-print');
const catGallery = document.querySelector('#category-gallery');

const polFeatured = document.querySelector('.polaroid-featured');
const polMotion = document.querySelector('.polaroid-motion');
const polPrint = document.querySelector('.polaroid-print');
const polGallery = document.querySelector('.gallery');


/* when Category item (Motion) is clicked perform code*/
catMotion.addEventListener('click', () => {
    catMotion.classList.toggle('slider-item-active'); /*toggles class*/
    catFeatured.classList.remove('slider-item-active'); /*removes class*/
    catPrint.classList.remove('slider-item-active'); /*removes class*/
    catGallery.classList.remove('slider-item-active'); /*removes class*/

    polMotion.classList.remove('polaroid-hide'); /*toggles class*/
    polPrint.classList.add('polaroid-hide'); /*toggles class*/
    polFeatured.classList.add('polaroid-hide'); /*toggles class*/
    polGallery.classList.add('polaroid-hide'); /*toggles class*/


});

catPrint.addEventListener('click', () => {
    catPrint.classList.toggle('slider-item-active'); /*toggles class*/
    catFeatured.classList.remove('slider-item-active'); /*removes class*/
    catMotion.classList.remove('slider-item-active'); /*removes class*/
    catGallery.classList.remove('slider-item-active'); /*removes class*/

    polPrint.classList.remove('polaroid-hide'); /*toggles class*/
    polMotion.classList.add('polaroid-hide'); /*toggles class*/
    polFeatured.classList.add('polaroid-hide'); /*toggles class*/
    polGallery.classList.add('polaroid-hide'); /*toggles class*/

});

catGallery.addEventListener('click', () => {
    catGallery.classList.toggle('slider-item-active'); /*toggles class*/
    catFeatured.classList.remove('slider-item-active'); /*removes class*/
    catPrint.classList.remove('slider-item-active'); /*removes class*/
    catMotion.classList.remove('slider-item-active'); /*removes class*/

    polGallery.classList.remove('polaroid-hide'); /*toggles class*/
    polMotion.classList.add('polaroid-hide'); /*toggles class*/
    polPrint.classList.add('polaroid-hide'); /*toggles class*/
    polFeatured.classList.add('polaroid-hide'); /*toggles class*/
});


catFeatured.addEventListener('click', () => {
    catFeatured.classList.toggle('slider-item-active'); /*toggles class*/
    catMotion.classList.remove('slider-item-active'); /*removes class*/
    catPrint.classList.remove('slider-item-active'); /*removes class*/
    catGallery.classList.remove('slider-item-active'); /*removes class*/

    polFeatured.classList.remove('polaroid-hide'); /*toggles class*/
    polMotion.classList.add('polaroid-hide'); /*toggles class*/
    polPrint.classList.add('polaroid-hide'); /*toggles class*/
    polGallery.classList.add('polaroid-hide'); /*toggles class*/

});

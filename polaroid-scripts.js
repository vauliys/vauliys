
/*================ Section: Category Slider ================*/
const catFeatured = document.querySelector('#category-featured');
const catMotion = document.querySelector('#category-motion');
const catDesign = document.querySelector('#category-design');
const catGallery = document.querySelector('#category-gallery');

const polFeatured = document.querySelector('.polaroid-featured');
const polMotion = document.querySelector('.polaroid-motion');
const polDesign = document.querySelector('.polaroid-design');
const polGallery = document.querySelector('.gallery');


/* when Category item (Motion) is clicked perform code*/
catMotion.addEventListener('click', () => {
    catMotion.classList.toggle('slider-item-active'); /*toggles class*/
    catFeatured.classList.remove('slider-item-active'); /*removes class*/
    catDesign.classList.remove('slider-item-active'); /*removes class*/
    catGallery.classList.remove('slider-item-active'); /*removes class*/

    polMotion.classList.remove('polaroid-hide'); /*toggles class*/
    polDesign.classList.add('polaroid-hide'); /*toggles class*/
    polFeatured.classList.add('polaroid-hide'); /*toggles class*/
    polGallery.classList.add('polaroid-hide'); /*toggles class*/


});

catDesign.addEventListener('click', () => {
    catDesign.classList.toggle('slider-item-active'); /*toggles class*/
    catFeatured.classList.remove('slider-item-active'); /*removes class*/
    catMotion.classList.remove('slider-item-active'); /*removes class*/
    catGallery.classList.remove('slider-item-active'); /*removes class*/

    polDesign.classList.remove('polaroid-hide'); /*toggles class*/
    polMotion.classList.add('polaroid-hide'); /*toggles class*/
    polFeatured.classList.add('polaroid-hide'); /*toggles class*/
    polGallery.classList.add('polaroid-hide'); /*toggles class*/

});

catGallery.addEventListener('click', () => {
    catGallery.classList.toggle('slider-item-active'); /*toggles class*/
    catFeatured.classList.remove('slider-item-active'); /*removes class*/
    catDesign.classList.remove('slider-item-active'); /*removes class*/
    catMotion.classList.remove('slider-item-active'); /*removes class*/

    polGallery.classList.remove('polaroid-hide'); /*toggles class*/
    polMotion.classList.add('polaroid-hide'); /*toggles class*/
    polDesign.classList.add('polaroid-hide'); /*toggles class*/
    polFeatured.classList.add('polaroid-hide'); /*toggles class*/
});


catFeatured.addEventListener('click', () => {
    catFeatured.classList.toggle('slider-item-active'); /*toggles class*/
    catMotion.classList.remove('slider-item-active'); /*removes class*/
    catDesign.classList.remove('slider-item-active'); /*removes class*/
    catGallery.classList.remove('slider-item-active'); /*removes class*/

    polFeatured.classList.remove('polaroid-hide'); /*toggles class*/
    polMotion.classList.add('polaroid-hide'); /*toggles class*/
    polDesign.classList.add('polaroid-hide'); /*toggles class*/
    polGallery.classList.add('polaroid-hide'); /*toggles class*/

});

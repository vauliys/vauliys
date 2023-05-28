const catChar = document.querySelector('#category-characters');
const catProps = document.querySelector('#category-props');

const solChar = document.querySelector('.solar-charcters');
const solProps = document.querySelector('.solar-props');

/* when Category item (Character) is clicked perform code*/
if (catChar) {
catChar.addEventListener('click', () => {
    catChar.classList.toggle('slider-item-active'); /*toggles class*/
    catProps.classList.remove('slider-item-active'); /*removes class*/

    solChar.classList.remove('polaroid-hide'); /*toggles class*/
    solProps.classList.add('polaroid-hide'); /*toggles class*/
});
}

if (catProps) {
/* when Category item (Props) is clicked perform code*/
catProps.addEventListener('click', () => {
    catProps.classList.toggle('slider-item-active'); /*toggles class*/
    catChar.classList.remove('slider-item-active'); /*removes class*/

    solProps.classList.remove('polaroid-hide'); /*toggles class*/
    solChar.classList.add('polaroid-hide'); /*toggles class*/
});
}

/*================ Project Category Slider: Chocolate ================*/
const catXmas = document.querySelector('#category-christmas');
const catEaster = document.querySelector('#category-easter');

const cbXmas = document.querySelector('.chocolate-xmas');
const cbEaster = document.querySelector('.chocolate-easter');

/* when Category item (Character) is clicked perform code*/
if (catXmas) {
catXmas.addEventListener('click', () => {
    catXmas.classList.toggle('slider-item-active'); /*toggles class*/
    catEaster.classList.remove('slider-item-active'); /*removes class*/

    cbXmas.classList.remove('polaroid-hide'); /*toggles class*/
    cbEaster.classList.add('polaroid-hide'); /*toggles class*/
});
}

if (catEaster) {
/* when Category item (Props) is clicked perform code*/
catEaster.addEventListener('click', () => {
    catEaster.classList.toggle('slider-item-active'); /*toggles class*/
    catXmas.classList.remove('slider-item-active'); /*removes class*/

    cbEaster.classList.remove('polaroid-hide'); /*toggles class*/
    cbXmas.classList.add('polaroid-hide'); /*toggles class*/
});
}

/*================ Project Category Slider: Chocolate Box ================*/




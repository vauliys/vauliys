const catChar = document.querySelector('#category-characters');
const catProps = document.querySelector('#category-props');

const soChar = document.querySelector('.solar-characters');
const soProps = document.querySelector('.solar-props');

/* when Category item (Character) is clicked perform code*/
if (catChar) {
catChar.addEventListener('click', () => {
    catChar.classList.toggle('slider-item-active'); /*toggles class*/
    catProps.classList.remove('slider-item-active'); /*removes class*/

    soChar.classList.remove('hide'); /*toggles class*/
    soProps.classList.add('hide'); /*toggles class*/
});
}

if (catProps) {
/* when Category item (Props) is clicked perform code*/
catProps.addEventListener('click', () => {
    catProps.classList.toggle('slider-item-active'); /*toggles class*/
    catChar.classList.remove('slider-item-active'); /*removes class*/

    soProps.classList.remove('hide'); /*toggles class*/
    soChar.classList.add('hide'); /*toggles class*/
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

    cbXmas.classList.remove('hide'); /*toggles class*/
    cbEaster.classList.add('hide'); /*toggles class*/
});
}

if (catEaster) {
/* when Category item (Props) is clicked perform code*/
catEaster.addEventListener('click', () => {
    catEaster.classList.toggle('slider-item-active'); /*toggles class*/
    catXmas.classList.remove('slider-item-active'); /*removes class*/

    cbEaster.classList.remove('hide'); /*toggles class*/
    cbXmas.classList.add('hide'); /*toggles class*/
});
}

/*================ Project Category Slider: Chocolate Box ================*/




/*================ Body: Sroll / To Top - To About ================*/
const scrolltotop = document.getElementById('scroll');

if(scrolltotop) {
scrolltotop.addEventListener("click", e => {
    if (window.scrollY > 20) {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    } else {
        window.scrollTo({
            top: 750,
            left: 0,
            behavior: "smooth"
        });
    }
});
}

/*=== Scroll Arrow (Rotates) ====*/

if(scrolltotop) {
window.addEventListener('scroll', e => {
    if (window.scrollY > 20 && !scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.add('scroll-up');
    } else if (window.scrollY <= 20 && scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.remove('scroll-up');
    }
});
}


/*================ Navigation Menu ================*/

/* searching for item in html and giving it a Java name*/
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const navLogo = document.querySelector('.logo');

/* searching for multiple items in html*/
const navItems = document.querySelectorAll(".nav-item");


/* when hamburger (.humburger) is clicked perform code*/
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); /*toggles class*/
    navLogo.classList.toggle('logo-invert');

    const visibility = navMenu.getAttribute('data-visible');/*retrieves attribute from HTML*/
    console.log(visibility);

    if (visibility === 'false') {
        navMenu.setAttribute('data-visible', true); /*set attribute from class*/

    } else if (visibility === 'true') {
        navMenu.setAttribute('data-visible', false); /*set attribute from HTML*/
    }

});

navItems.forEach(item => { /*applying code to EACH item in List*/
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLogo.classList.remove('logo-invert');
        navMenu.setAttribute('data-visible', false);
    });
})





/*================ Body: Home Scroll ================*/
/*================ Home: Button (Explore) ================*/

function explore() {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: "smooth"
    });
}



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


/*================ Section: Category Slider - Toggle Category ================*/
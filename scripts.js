/*================ SCROLL TO TOP / SCROLL TO ABOUT ================*/
const scrolltotop = document.getElementById('scroll');

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


/*================ NAV ================*/

/* searching for item in html and giving it a Java name*/
const hamburger = document.querySelector('.hamburger');
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





/*================ HOME SCROLL ================*/
/*================ HOME: BTN EXPLORE ================*/

function explore() {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: "smooth"
    });
}


/*================ HOME: SERVICE LOAD PRICES ================*/

const priceSketch = document.querySelector('.prices-sketch');
const priceFlat = document.querySelector('.prices-flat');
const priceRender = document.querySelector('.prices-render');

const btnSketch = document.querySelector("#btn-sketch");
const btnFlat = document.querySelector("#btn-flat");
const btnRender = document.querySelector("#btn-render");
const btnServiceUp = document.querySelector(".btn-service-up");



btnSketch.addEventListener('click', () => {
    priceSketch.classList.toggle('show');
    btnSketch.classList.toggle('btn-service-up');
});

btnFlat.addEventListener('click', () => {
    priceFlat.classList.toggle('show'); /*toggles class*/
    btnFlat.classList.toggle('btn-service-up');
});

btnRender.addEventListener('click', e => {
    priceRender.classList.toggle('show'); /*toggles class*/
    btnRender.classList.toggle('btn-service-up');
});


/*================ SCROLL TO TOP / ARROW ROTATES ================*/

window.addEventListener('scroll', e => {
    if (window.scrollY > 20 && !scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.add('scroll-up');
    } else if (window.scrollY <= 20 && scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.remove('scroll-up');
    }
});








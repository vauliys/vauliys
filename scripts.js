/*================ Body: Sroll / To Top - To About ================*/
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

/*=== Scroll Arrow (Rotates) ====*/

window.addEventListener('scroll', e => {
    if (window.scrollY > 20 && !scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.add('scroll-up');
    } else if (window.scrollY <= 20 && scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.remove('scroll-up');
    }
});


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


/*================ Dropbox: Reveal Content ================*/

const priceBg = document.querySelector('.dropbox-bg');
const priceFlat = document.querySelector('.dropbox-flat');
const priceRender = document.querySelector('.dropbox-render');

const btnBg = document.querySelector("#btn-bg");
const btnFlat = document.querySelector("#btn-flat");
const btnRender = document.querySelector("#btn-render");

const btnChevronUp = document.querySelector(".btn-chevron-up");

/*======*/

btnFlat.addEventListener('click', () => {
    priceFlat.classList.toggle('show'); /*toggles class*/
    btnFlat.classList.toggle('btn-chevron-up'); /* toggles arrow rotation */
});
btnRender.addEventListener('click', e => {
    priceRender.classList.toggle('show'); /*toggles class*/
    btnRender.classList.toggle('btn-chevron-up');
});

btnBg.addEventListener('click', () => {
    priceBg.classList.toggle('show');
    btnBg.classList.toggle('btn-chevron-up');
});

/*================ Dropdown: Reveal Content ================*/

const dropDowntext01 = document.querySelector('.dropdown-text-01');
const dropDowntext02 = document.querySelector('.dropdown-text-02');
const dropDowntext03 = document.querySelector('.dropdown-text-03');
const dropDowntext04 = document.querySelector('.dropdown-text-04');
const dropDowntext05 = document.querySelector('.dropdown-text-05');
const dropDowntext06 = document.querySelector('.dropdown-text-06');
const dropDowntext07 = document.querySelector('.dropdown-text-07');

const btnFaq01 = document.querySelector("#btn-faq-01");
const btnFaq02 = document.querySelector("#btn-faq-02");
const btnFaq03 = document.querySelector("#btn-faq-03");
const btnFaq04 = document.querySelector("#btn-faq-04");
const btnFaq05 = document.querySelector("#btn-faq-05");
const btnFaq06 = document.querySelector("#btn-faq-06");
const btnFaq07 = document.querySelector("#btn-faq-07");

/*======*/

btnFaq01.addEventListener('click', () => {
    dropDowntext01.classList.toggle('dropdown-show');
    btnFaq01.classList.toggle('btn-chevron-up');
});

btnFaq02.addEventListener('click', () => {
    dropDowntext02.classList.toggle('dropdown-show');
    btnFaq02.classList.toggle('btn-chevron-up');
});

btnFaq03.addEventListener('click', () => {
    dropDowntext03.classList.toggle('dropdown-show');
    btnFaq03.classList.toggle('btn-chevron-up');
});

btnFaq04.addEventListener('click', () => {
    dropDowntext04.classList.toggle('dropdown-show');
    btnFaq04.classList.toggle('btn-chevron-up');
});

btnFaq05.addEventListener('click', () => {
    dropDowntext05.classList.toggle('dropdown-show');
    btnFaq05.classList.toggle('btn-chevron-up');
});

btnFaq06.addEventListener('click', () => {
    dropDowntext06.classList.toggle('dropdown-show');
    btnFaq06.classList.toggle('btn-chevron-up');
});

btnFaq07.addEventListener('click', () => {
    dropDowntext07.classList.toggle('dropdown-show');
    btnFaq07.classList.toggle('btn-chevron-up');
});











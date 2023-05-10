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





const carousel = document.querySelectorAll('.project-container');
const carouselNav = document.querySelectorAll('.project-nav')

/*================ SCROLL DOWN - BTN EXPLORE ================*/

function explore() {
    window.scrollTo({
        top: 750,
        left: 0,
        behavior: "smooth"
    });
}


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

/*================ SCROLL TO TOP / ARROW ROTATES ================*/

window.addEventListener('scroll', e => {
    if (window.scrollY > 20 && !scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.add('scroll-up');
    } else if (window.scrollY <= 20 && scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.remove('scroll-up');
    }
});



// /*================ ANIMATION LOAD MORE ================*/
// function show() {
//     document.getElementById('show')
//         .style.display = "block";

//         document.getElementById('btn-load')
//         .style.display = "none";

//         document.getElementById('btn-hide')
//         .style.display = "block";
// }

// function hide() {
//     document.getElementById('show')
//         .style.display = "none";

//         document.getElementById('btn-load')
//         .style.display = "block";

//         document.getElementById('btn-hide')
//         .style.display = "none";
// }




// /*================ HOME: SCROLL COLOUR CHANGE ================*/

// window.addEventListener('scroll', e => {
//     if (window.scrollY > 20 && !scrolltotop.classList.contains('scroll-up')) {
//         scrolltotop.classList.add('scroll-up');
//     } else if (window.scrollY <= 20 && scrolltotop.classList.contains('scroll-up')) {
//         scrolltotop.classList.remove('scroll-up');
//     }
// });

// window.addEventListener('scroll', e => {
//     if (window.scrollY > 100 && !scrolltotop.classList.contains('scroll-up-blue')) {
//         scrolltotop.classList.add('scroll-up-blue');
//     } else if (window.scrollY <= 100 && scrolltotop.classList.contains('scroll-up-blue')) {
//         scrolltotop.classList.remove('scroll-up-blue');
//     }
// });


// window.addEventListener('scroll', e => {
//     if (window.scrollY > 700 && !scrolltotop.classList.contains('scroll-up-blue-purple')) {
//         scrolltotop.classList.add('scroll-up-blue-purple');
//     } else if (window.scrollY <= 700 && scrolltotop.classList.contains('scroll-up-blue-purple')) {
//         scrolltotop.classList.remove('scroll-up-blue-purple');
//     }
// });

// window.addEventListener('scroll', e => {
//     if (window.scrollY > 1200 && !scrolltotop.classList.contains('scroll-up-purple')) {
//         scrolltotop.classList.add('scroll-up-purple');
//     } else if (window.scrollY <= 1200 && scrolltotop.classList.contains('scroll-up-purple')) {
//         scrolltotop.classList.remove('scroll-up-purple');
//     }
// });

// window.addEventListener('scroll', e => {
//     if (window.scrollY > 2300 && !scrolltotop.classList.contains('scroll-up-pink')) {
//         scrolltotop.classList.add('scroll-up-pink');
//     } else if (window.scrollY <= 2300 && scrolltotop.classList.contains('scroll-up-pink')) {
//         scrolltotop.classList.remove('scroll-up-pink');
//     }
// });


/*================ TILL: SCROLL UP CHANGE ================*/

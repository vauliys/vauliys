/*================ ANIMATION LOAD MORE ================*/
function show() {
    document.getElementById('show')
        .style.display = "block";

        document.getElementById('btn-load')
        .style.display = "none";

        document.getElementById('btn-hide')
        .style.display = "block";
}

function hide() {
    document.getElementById('show')
        .style.display = "none";

        document.getElementById('btn-load')
        .style.display = "block";

        document.getElementById('btn-hide')
        .style.display = "none";
}

/*================ SCROLL TO TOP BUTTON APPEARS ================*/
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
            top: 800,
            left: 0,
            behavior: "smooth"
        });
    }
});

window.addEventListener('scroll', e => {
    if (window.scrollY > 20 && !scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.add('scroll-up');
    } else if (window.scrollY <= 20 && scrolltotop.classList.contains('scroll-up')) {
        scrolltotop.classList.remove('scroll-up');
    }
});

window.addEventListener('scroll', e => {
    if (window.scrollY > 200 && !scrolltotop.classList.contains('scroll-up-blue')) {
        scrolltotop.classList.add('scroll-up-blue');
    } else if (window.scrollY <= 200 && scrolltotop.classList.contains('scroll-up-blue')) {
        scrolltotop.classList.remove('scroll-up-blue');
    }
});

window.addEventListener('scroll', e => {
    if (window.scrollY > 1000 && !scrolltotop.classList.contains('scroll-up-purple')) {
        scrolltotop.classList.add('scroll-up-purple');
    } else if (window.scrollY <= 1000 && scrolltotop.classList.contains('scroll-up-purple')) {
        scrolltotop.classList.remove('scroll-up-purple');
    }
});


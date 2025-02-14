/*================ Header appear and disappear on scroll ================*/
var scrollPos = 0;
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', e => {
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            header.classList.remove('header-hide');
        } else {
            header.classList.add('header-hide');
        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    });
}
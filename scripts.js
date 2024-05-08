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
/*================ Close Banner ================*/
const banner = document.getElementById('banner');
const bannerclose = document.getElementById('banner_i-close');

if (bannerclose) {
    bannerclose.addEventListener('click', () => {
        banner.classList.add('hide'); /* toggles class */
    });
}


/*================ Button Scroll To About ================*/
const btnTop = document.getElementById('btn_top');

if (btnTop) {
    btnTop.addEventListener('click', () => {
        document.getElementById("project-gallery").scrollIntoView()
    });
}



const video = document.getElementById('video');
if (video) {
    let vid = document.getElementById("video");
    vid.volume = 0.05;
}

// (function($){
// 	$('video').hover(function toggleControls() {
// 		if (this.hasAttribute("controls")) {
// 			this.removeAttribute("controls")
// 		} else {
// 			this.setAttribute("controls", "controls")
// 		}
// 	});

// })(jQuery);


/*================ (links.html load more) ================*/

const btnload = document.querySelector('#btn-load');
const gridload = document.querySelector('.mdl-load-more');

if (btnload) {
    /* when Slider item (Social) is clicked perform code*/
    btnload.addEventListener('click', () => {
        gridload.classList.toggle('hide'); /* toggles class */
    });
}
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
const btnexplore = document.getElementById('btn_explore');

if (btnexplore) {
    btnexplore.addEventListener('click', () => {
        document.getElementById("about").scrollIntoView()
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


/*================ Loading icon ================*/
const loader = document.getElementById('loader');
const loadingIcon = document.getElementById('loader-video');
setTimeout(() => {
    loader.classList.add('fade-out');
    loadingIcon.classList.add('fade-out');
}, 5000);
setTimeout(() => {
    loadingIcon.classList.add('hide');
    loader.classList.add('hide');
}, 6000);

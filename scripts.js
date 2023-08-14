/*================ Header appear and disappear on scroll ================*/
var scrollPos = 0;
const header = document.getElementById('header');

if(header) {
    window.addEventListener('scroll', e => {
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            header.classList.remove('header_hide');
        } else {
            header.classList.add('header_hide');
        }
        scrollPos = (document.body.getBoundingClientRect()).top;
    });
    }

/*================ Close Banner ================*/    
    const banner = document.getElementById('banner');
    const bannerclose = document.getElementById('banner_i-close');

if (bannerclose) {
        bannerclose.addEventListener('click', () => {
            banner.classList.add('banner_hide'); /*toggles class*/
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

(function($){

    
	$('#video').hover(function toggleControls() {
		if (this.hasAttribute("controls")) {
			this.removeAttribute("controls")
		} else {
			this.setAttribute("controls", "controls")
		}
	});

})(jQuery);


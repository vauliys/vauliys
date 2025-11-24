/*================ Slider Tab (Page: Hub)================*/
const tabSketch = document.querySelector('#tab-sketch');
const tabSketch2 = document.querySelector('#tab-sketch2');
const Sketch = document.querySelector('#sketch');

const tabDesign = document.querySelector('#tab-design');
const tabDesign2 = document.querySelector('#tab-design2');
const Design = document.querySelector('#design');

const tabPages = document.querySelector('#tab-pages');
const tabPages2 = document.querySelector('#tab-pages2');
const Pages = document.querySelector('#pages');

const tabWiggle = document.querySelector('#tab-wiggle');
const tabWiggle2 = document.querySelector('#tab-wiggle2');
const Wiggle = document.querySelector('#wiggle');

const tabSocial = document.querySelector('#tab-social');
const tabSocial2 = document.querySelector('#tab-social2');
const Social = document.querySelector('#social');

if (tabSketch) {
    /* when Slider item (Social) is clicked perform code*/
    tabSketch.addEventListener('click', () => {

        Sketch.classList.remove('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */

    });
}

if (tabSketch2) {
    /* when Slider item (Social) is clicked perform code*/
    tabSketch2.addEventListener('click', () => {

        Sketch.classList.remove('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}


if (tabDesign) {
    /* when Slider item (Social) is clicked perform code*/
    tabDesign.addEventListener('click', () => {

        Design.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}

if (tabDesign2) {
    /* when Slider item (Social) is clicked perform code*/
    tabDesign2.addEventListener('click', () => {

        Design.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}

if (tabPages) {
    /* when Slider item (Social) is clicked perform code*/
    tabPages.addEventListener('click', () => {

        Pages.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}

if (tabPages2) {
    /* when Slider item (Social) is clicked perform code*/
    tabPages2.addEventListener('click', () => {

        Pages.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}

if (tabWiggle) {
    /* when Slider item (Social) is clicked perform code*/
    tabWiggle.addEventListener('click', () => {

        Wiggle.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}

if (tabWiggle2) {
    /* when Slider item (Social) is clicked perform code*/
    tabWiggle2.addEventListener('click', () => {

        Wiggle.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Social.classList.add('hide'); /* toggles class */
    });
}

if (tabSocial) {
    /* when Slider item (Social) is clicked perform code*/
    tabSocial.addEventListener('click', () => {

        Social.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
    });
}

if (tabSocial2) {
    /* when Slider item (Social) is clicked perform code*/
    tabSocial2.addEventListener('click', () => {

        Social.classList.remove('hide'); /* toggles class */
        Sketch.classList.add('hide'); /* toggles class */
        Design.classList.add('hide'); /* toggles class */
        Pages.classList.add('hide'); /* toggles class */
        Wiggle.classList.add('hide'); /* toggles class */
    });
}


const images = document.querySelectorAll('.project-images img');
const dots = document.querySelectorAll('.carousel-dot');

let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 100;
  document.querySelector('.project-images').style.transform = `translateX(${offset}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Initialize
showSlide(0);


/*================ Slider Tab (Page: Hub)================*/
const tabSketch = document.querySelector('#tab-sketch');
const Sketch = document.querySelector('#sketch');

const tabDesign = document.querySelector('#tab-design');
const Design = document.querySelector('#design');

const tabPages = document.querySelector('#tab-pages');
const Pages = document.querySelector('#pages');

const tabWiggle = document.querySelector('#tab-wiggle');
const Wiggle = document.querySelector('#wiggle');

const tabSocial = document.querySelector('#tab-social');
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

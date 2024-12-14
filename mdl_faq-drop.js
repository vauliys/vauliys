/*================ FAQ links ================*/
const preorder = document.querySelector('#preorder');

if (preorder) {
    /* when Slider item (Social) is clicked perform code*/
    preorder.addEventListener('click', () => {
        orders.classList.add('faq-category-active'); /* toggles class */
        general.classList.remove('faq-category-active'); /* toggles class */
        shipping.classList.remove('faq-category-active'); /* toggles class */

        shippingFAQ.classList.add('hide'); /* toggles class */
        generalFAQ.classList.add('hide'); /* toggles class */
        ordersFAQ.classList.remove('hide'); /* toggles class */

        orders01b.classList.remove('hide'); /* toggles class */

        orders02b.classList.add('hide'); /* toggles class */
        orders03b.classList.add('hide'); /* toggles class */
    });
}

/*================ FAQ Categories ================*/
const general = document.querySelector('#faq-general');
const shipping = document.querySelector('#faq-shipping');
const orders = document.querySelector('#faq-orders');

const generalFAQ = document.querySelector('.faq-general');
const shippingFAQ = document.querySelector('.faq-shipping');
const ordersFAQ = document.querySelector('.faq-orders');

if (general) {
    /* when Slider item (Social) is clicked perform code*/
    general.addEventListener('click', () => {
        general.classList.add('faq-category-active'); /* toggles class */
        shipping.classList.remove('faq-category-active'); /* toggles class */
        orders.classList.remove('faq-category-active'); /* toggles class */

        generalFAQ.classList.remove('hide'); /* toggles class */
        shippingFAQ.classList.add('hide'); /* toggles class */
        ordersFAQ.classList.add('hide'); /* toggles class */
    });
}

if (shipping) {
    /* when Slider item (Social) is clicked perform code*/
    shipping.addEventListener('click', () => {
        shipping.classList.add('faq-category-active'); /* toggles class */
        general.classList.remove('faq-category-active'); /* toggles class */
        orders.classList.remove('faq-category-active'); /* toggles class */


        shippingFAQ.classList.remove('hide'); /* toggles class */
        generalFAQ.classList.add('hide'); /* toggles class */
        ordersFAQ.classList.add('hide'); /* toggles class */
    });
}

if (orders) {
    /* when Slider item (Social) is clicked perform code*/
    orders.addEventListener('click', () => {
        orders.classList.add('faq-category-active'); /* toggles class */
        shipping.classList.remove('faq-category-active'); /* toggles class */
        general.classList.remove('faq-category-active'); /* toggles class */

        shippingFAQ.classList.add('hide'); /* toggles class */
        generalFAQ.classList.add('hide'); /* toggles class */
        ordersFAQ.classList.remove('hide'); /* toggles class */
    });
}


/*================ FAQ dropdown - Shipping ================*/
const faq01 = document.querySelector('#faq-shipping-01');
const faq01b = document.querySelector('#faq-shipping-01b');

const faq02 = document.querySelector('#faq-shipping-02');
const faq02b = document.querySelector('#faq-shipping-02b');

const faq03 = document.querySelector('#faq-shipping-03');
const faq03b = document.querySelector('#faq-shipping-03b');

const faq04 = document.querySelector('#faq-shipping-04');
const faq04b = document.querySelector('#faq-shipping-04b');

if (faq01) {
    /* when Slider item (Social) is clicked perform code*/
    faq01.addEventListener('click', () => {
        faq01b.classList.toggle('hide'); /* toggles class */

        faq02b.classList.add('hide'); /* toggles class */
        faq03b.classList.add('hide'); /* toggles class */
        faq04b.classList.add('hide'); /* toggles class */
    });
}

if (faq02) {
    /* when Slider item (Social) is clicked perform code*/
    faq02.addEventListener('click', () => {
        faq02b.classList.toggle('hide'); /* toggles class */

        faq01b.classList.add('hide'); /* toggles class */
        faq03b.classList.add('hide'); /* toggles class */
        faq04b.classList.add('hide'); /* toggles class */
    });
}

if (faq03) {
    /* when Slider item (Social) is clicked perform code*/
    faq03.addEventListener('click', () => {
        faq03b.classList.toggle('hide'); /* toggles class */

        faq01b.classList.add('hide'); /* toggles class */
        faq02b.classList.add('hide'); /* toggles class */
        faq04b.classList.add('hide'); /* toggles class */
    });
}

if (faq04) {
    /* when Slider item (Social) is clicked perform code*/
    faq04.addEventListener('click', () => {
        faq04b.classList.toggle('hide'); /* toggles class */

        faq01b.classList.add('hide'); /* toggles class */
        faq02b.classList.add('hide'); /* toggles class */
        faq03b.classList.add('hide'); /* toggles class */
    });
}


/*================ FAQ dropdown - General ================*/
const general01 = document.querySelector('#faq-general-01');
const general01b = document.querySelector('#faq-general-01b');

const general02 = document.querySelector('#faq-general-02');
const general02b = document.querySelector('#faq-general-02b');

const general03 = document.querySelector('#faq-general-03');
const general03b = document.querySelector('#faq-general-03b');

const general04 = document.querySelector('#faq-general-04');
const general04b = document.querySelector('#faq-general-04b');

if (general01) {
    /* when Slider item (Social) is clicked perform code*/
    general01.addEventListener('click', () => {
        general01b.classList.toggle('hide'); /* toggles class */

        general02b.classList.add('hide'); /* toggles class */
        general03b.classList.add('hide'); /* toggles class */
        general04b.classList.add('hide'); /* toggles class */
    });
}

if (general02) {
    /* when Slider item (Social) is clicked perform code*/
    general02.addEventListener('click', () => {
        general02b.classList.toggle('hide'); /* toggles class */

        general01b.classList.add('hide'); /* toggles class */        
        general03b.classList.add('hide'); /* toggles class */
        general04b.classList.add('hide'); /* toggles class */
    });
}

if (general03) {
    /* when Slider item (Social) is clicked perform code*/
    general03.addEventListener('click', () => {
        general03b.classList.toggle('hide'); /* toggles class */

        general01b.classList.add('hide'); /* toggles class */        
        general02b.classList.add('hide'); /* toggles class */
        general04b.classList.add('hide'); /* toggles class */
    });
}

if (general04) {
    /* when Slider item (Social) is clicked perform code*/
    general04.addEventListener('click', () => {
        general04b.classList.toggle('hide'); /* toggles class */

        general01b.classList.add('hide'); /* toggles class */        
        general02b.classList.add('hide'); /* toggles class */
        general03b.classList.add('hide'); /* toggles class */
    });
}

/*================ FAQ dropdown - Orders ================*/
const orders01 = document.querySelector('#faq-orders-01');
const orders01b = document.querySelector('#faq-orders-01b');

const orders02 = document.querySelector('#faq-orders-02');
const orders02b = document.querySelector('#faq-orders-02b');

const orders03 = document.querySelector('#faq-orders-03');
const orders03b = document.querySelector('#faq-orders-03b');

if (orders01) {
    /* when Slider item (Social) is clicked perform code*/
    orders01.addEventListener('click', () => {
        orders01b.classList.toggle('hide'); /* toggles class */

        orders02b.classList.add('hide'); /* toggles class */
        orders03b.classList.add('hide'); /* toggles class */
    });
}

if (orders02) {
    /* when Slider item (Social) is clicked perform code*/
    orders02.addEventListener('click', () => {
        orders02b.classList.toggle('hide'); /* toggles class */

        orders01b.classList.add('hide'); /* toggles class */        
        orders03b.classList.add('hide'); /* toggles class */
    });
}

if (orders03) {
    /* when Slider item (Social) is clicked perform code*/
    orders03.addEventListener('click', () => {
        orders03b.classList.toggle('hide'); /* toggles class */

        orders01b.classList.add('hide'); /* toggles class */        
        orders02b.classList.add('hide'); /* toggles class */
    });
}
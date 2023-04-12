/*================ NAVBAR SHOW MENU ================*/
const showMenu = () =>{
    const toggle = document.getElementById('nav-toggle');
    nav = document.getElementById('nav-menu')

    toggle.addEventListener('click', () => {
        nav.classList.toggle('show-menu')

        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

/*================ NAVBAR SHOW DROPDOWN  ================*/
const dropdownItems = document.querySelectorAll('.dropdown-item')

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown-button')

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
        // 7. Select the current show-dropdown class
const showDropdown = document.querySelector('.show-dropdown')

        // 5. Call the toggleItem function
        toggleItem(item)

        // 8. Remove the show-dropdown class from other items
        if(showDropdown && showDropdown!= item){
            toggleItem(showDropdown)
        }

    })

})

// 3. Create a function to display the dropdown
 const toggleItem = (item) => {
    // 3.1 Select each dropdown content
    const dropdownContainer = item.querySelector('.dropdown-container')

    // 6. If the same item contains the show-dropdown class, remove
    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else {
        // 4. Add the maximum height to dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }

}


/*================ SCROLL TO TOP BUTTON APPEARS ================*/
const scrolltotop = document.getElementById('scroll');

scrolltotop.addEventListener("click", e => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener('scroll', e => {
    if (window.scrollY > 20 && !scrolltotop.classList.contains('showscroll')) {
        scrolltotop.classList.add('showscroll');
    } else if (window.scrollY <= 20 && scrolltotop.classList.contains('showscroll')) {
        scrolltotop.classList.remove('showscroll');
    }
});


/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

for (section of sections) {
    let newElement = document.createElement('li');
    newElement.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

    fragment.appendChild(newElement);
}

document.querySelector('.navbar__menu').appendChild(fragment);

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', function scrolling() {
    sections.forEach((section) => {
        if (section.offsetTop <= window.scrollY + 200 && section.offsetTop + section.offsetHeight - 200 > window.scrollY) {
            section.classList.add('active-section');
        } else {
            section.classList.remove('active-section');
        }
    });
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active



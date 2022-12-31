// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelectorAll('.links li');

navToggle.addEventListener('click', () => {
    // linkContainer.classList.toggle('show-links')
    if (linkContainer.style.height === "0px") {
        linkContainer.style.height = `${links.length * 50}px`
    } else {
        linkContainer.style.height = "0px";
    }
})

// ********** fixed navbar ************
const nav = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        nav.classList.add('fixed-nav')
    } else {
        nav.classList.remove('fixed-nav')
    }

    if (window.pageYOffset > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})

// ********** smooth scroll ************
// select links
const scroll = document.querySelectorAll('.scroll-link');
const navHeight = nav.getBoundingClientRect().height;

scroll.forEach((i) => {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href');
        const element = document.querySelector(id);
        const fixed = nav.classList.contains('fixed-nav');
        const containerHeight = linkContainer.getBoundingClientRect().height;
        
        let position = element.offsetTop - navHeight;
        console.log(fixed)
        if (!fixed) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        
        window.scrollTo({
            left: 0,
            top: position
        })
        linkContainer.style.height = 0;
    })
})
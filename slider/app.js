const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let counter = 0;

function setup() {
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    })
}
setup()

prevBtn.addEventListener('click', () => {
    counter--;
    scroll()
});
nextBtn.addEventListener('click', () => {
    counter++;
    scroll();
});




function scroll() {
    if (counter  < slideCount - 1) {
        nextBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'none';
    }
    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }

    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}



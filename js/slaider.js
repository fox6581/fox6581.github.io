const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');

let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % dots.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000);

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlide(slideIndex);
    });
});

showSlide(slideIndex);

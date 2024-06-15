let currentIndex = 0;
const slides = document.querySelectorAll('.banner-slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', moveToNextSlide);
document.querySelector('.prev').addEventListener('click', moveToPrevSlide);

function updateSlidePosition() {
    const slider = document.querySelector('.banner-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}


setInterval(moveToNextSlide, 3000);
function goBack() {
            window.location.href = '../index.html';
        }
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children); 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; 
const slideWidth = slides[0].getBoundingClientRect().width;
function moveToSlide(index) {
    track.style.transform = `translateX(${-index * slideWidth}px)`;
}
function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex >= slides.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }

    moveToSlide(currentIndex);
}
prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));
let autoSlideInterval = setInterval(() => moveSlide(1), 3000);
prevBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveSlide(1), 3000);
});
nextBtn.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => moveSlide(1), 3000);
});

const accountButton = document.getElementById('account-button');
const accountForm = document.getElementById('account-form');
accountButton.addEventListener('click', function() {
    accountForm.classList.toggle('hidden');
    if (accountForm.classList.contains('hidden')) {
        accountButton.innerHTML = '<ion-icon name="person-outline"></ion-icon>';
    } else {
        accountButton.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
    }
});
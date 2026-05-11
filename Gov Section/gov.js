const track = document.querySelector('.slider-track');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: 200, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -200, behavior: 'smooth' });
});
function scrollSlider(direction) {
    const slider = document.getElementById('hotelSlider');


    const cardWidth = document.querySelector('.hotel-card-item').offsetWidth;
    const gap = 25;
    const scrollAmount = (cardWidth + gap);

    // الحركة يمين أو شمال
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}
document.querySelectorAll(".carousel").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track");
    const slides = carousel.querySelectorAll(".carousel-slide");

    const btnPrev = carousel.querySelector(".prev");
    const btnNext = carousel.querySelector(".next");

    let currentIndex = 0;
    let autoplay;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        updateCarousel();
    }

    function prevSlide() {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        updateCarousel();
    }

    btnNext.addEventListener("click", () => {
        nextSlide();
        restartAutoplay();
    });

    btnPrev.addEventListener("click", () => {
        prevSlide();
        restartAutoplay();
    });

    function startAutoplay() {
        autoplay = setInterval(nextSlide, 3500);
    }

    function stopAutoplay() {
        clearInterval(autoplay);
    }

    function restartAutoplay() {
        stopAutoplay();
        startAutoplay();
    }

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    // Swipe para celular

    let startX = 0;

    carousel.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", e => {

        const endX = e.changedTouches[0].clientX;

        if (startX - endX > 50) {
            nextSlide();
            restartAutoplay();
        }

        if (endX - startX > 50) {
            prevSlide();
            restartAutoplay();
        }

    });

    startAutoplay();

});

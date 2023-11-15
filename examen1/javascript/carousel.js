document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll(".carousel");
    const prevButtons = document.querySelectorAll(".prev-button");
    const nextButtons = document.querySelectorAll(".next-button");

    carousels.forEach((carousel, index) => {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll(".slide");
        const totalSlides = slides.length;

        function showSlide(slideIndex) {
            slides[currentSlide].classList.remove("active");
            slides[slideIndex].classList.add("active");
            currentSlide = slideIndex;
        }

        // Initialize the first slide
        showSlide(currentSlide);

        prevButtons[index].addEventListener("click", function () {
            let nextSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            slides[currentSlide].style.opacity = 0;
            slides[nextSlide].style.opacity = 1;
            setTimeout(() => {
                showSlide(nextSlide);
            }, 300); // 300ms matches the transition duration
        });

        nextButtons[index].addEventListener("click", function () {
            let nextSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].style.opacity = 0;
            slides[nextSlide].style.opacity = 1;
            setTimeout(() => {
                showSlide(nextSlide);
            }, 300); // 300ms matches the transition duration
        });
    });
});


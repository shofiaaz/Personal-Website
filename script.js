document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach((sliderContainer) => {
        const slider = sliderContainer.querySelector(".slider");
        const prevButton = sliderContainer.querySelector(".prev");
        const nextButton = sliderContainer.querySelector(".next");

        let scrollStep = slider.scrollWidth / slider.children.length; // Menggunakan scrollWidth untuk memastikan ukuran yang tepat

        prevButton.addEventListener("click", function () {
            slider.scrollBy({ left: -scrollStep, behavior: "smooth" });
        });

        nextButton.addEventListener("click", function () {
            slider.scrollBy({ left: scrollStep, behavior: "smooth" });
        });
    });
});

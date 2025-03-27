document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach((sliderContainer) => {
        const slider = sliderContainer.querySelector(".slider");
        const prevButton = sliderContainer.querySelector(".prev");
        const nextButton = sliderContainer.querySelector(".next");
        const images = slider.querySelectorAll("img");

        let currentIndex = 0;

        function updateSliderPosition() {
            slider.style.transform = `translateX(-${currentIndex * images[0].width}px)`;
        }

        prevButton.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });

        nextButton.addEventListener("click", function () {
            if (currentIndex < images.length - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });

        images.forEach((img, index) => {
            img.addEventListener("click", function () {
                currentIndex = index;
                updateSliderPosition();
            });
        });
    });
});

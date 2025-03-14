document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const autoplayBtn = document.getElementById("autoplayBtn");
    const countdownElement = document.getElementById("countdown");

    let currentIndex = 0;
    let autoplayInterval;
    let countdown = 3;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
            dots[i].classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoplay() {
        if (!autoplayInterval) {
            autoplayBtn.textContent = "Stop Auto-Play";
            countdown = 3;
            countdownElement.textContent = countdown;
            autoplayInterval = setInterval(() => {
                countdown--;
                countdownElement.textContent = countdown;
                if (countdown === 0) {
                    nextSlide();
                    countdown = 3;
                }
            }, 1000);
        } else {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
            autoplayBtn.textContent = "Start Auto-Play";
        }
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
    autoplayBtn.addEventListener("click", startAutoplay);

    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            showSlide(currentIndex);
        });
    });

    showSlide(currentIndex);
});

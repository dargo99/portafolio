// images with zoom effect
document.querySelectorAll('.zoom-container').forEach(container => {
    container.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = (e.pageX - rect.left) / rect.width * 100;
        const y = (e.pageY - rect.top) / rect.height * 100;

        this.querySelector('.zoom-image').style.transformOrigin = `${x}% ${y}%`;
    });
});

// Sliders control
document.addEventListener('DOMContentLoaded', function() {
    const presentations = document.querySelectorAll('.presentation');

    presentations.forEach(presentation => {
        let currentSlide = 0;
        const slides = presentation.querySelectorAll('.slide');
        const progressBar = presentation.querySelector('.progress-fill');

        function updateProgress() {
            const progressPercentage = (currentSlide / (slides.length - 1)) * 100;
            progressBar.style.width = progressPercentage + '%';
        }

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            updateProgress();
        }

        presentation.querySelector('.next-btn').addEventListener('click', function() {
            const nextSlideIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextSlideIndex);
        });

        presentation.querySelector('.prev-btn').addEventListener('click', function() {
            const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevSlideIndex);
        });
        
        slides[currentSlide].classList.add('active');
        updateProgress();
    });
});

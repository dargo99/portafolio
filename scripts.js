
document.querySelectorAll('.zoom-container').forEach(container => {
    container.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.pageX - rect.left) / rect.width * 100;
        const y = (e.pageY - rect.top) / rect.height * 100;

        this.querySelector('.zoom-image').style.transformOrigin = `${x}% ${y}%`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
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

        presentation.querySelector('.next-btn').addEventListener('click', function () {
            const nextSlideIndex = (currentSlide + 1) % slides.length;
            goToSlide(nextSlideIndex);
        });

        presentation.querySelector('.prev-btn').addEventListener('click', function () {
            const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(prevSlideIndex);
        });

        slides.forEach((slide) => {
            slide.addEventListener('click', function () {
                const nextSlideIndex = (currentSlide + 1) % slides.length;
                goToSlide(nextSlideIndex);
            });
        });

        slides[currentSlide].classList.add('active');
        updateProgress();
    });
});

var moveableElements = document.querySelectorAll('.presentation p.moveable');

var parentContainers = document.querySelectorAll('.presentation');

parentContainers.forEach(function (parentContainer, index) {

    parentContainer.addEventListener('mousemove', function (e) {
        var parentRect = parentContainer.getBoundingClientRect();
        var x = e.clientX - parentRect.left;
        var y = e.clientY - parentRect.top;

    
        moveableElements[index].style.left = x + 'px';
        moveableElements[index].style.top = y + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function () {

    var whoompElements = document.querySelectorAll('.whoomp');
    var clicElements = document.querySelectorAll('.presentation');
    var bellElements = document.querySelectorAll('.bell');

    var whoompAudio = new Audio('audio/whoomp.mp3');
    var clicAudio = new Audio('audio/clic.mp3');
    var bellAudio = new Audio('audio/tilin.mp3');
    var airAudio = new Audio('audio/whoosh.mp3');

    function setVolume(audioElement, volume) {
        audioElement.volume = volume;
    }


    function reproducirAudioHover(audioElement) {
        setVolume(audioElement, 0.1);
        audioElement.play();
    }


    function detenerAudioHover(audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
        setVolume(audioElement, 1);
    }

    whoompElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            reproducirAudioHover(whoompAudio);
        });

        element.addEventListener('mouseleave', function () {
            detenerAudioHover(whoompAudio);
        });
    });

    clicElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            reproducirAudioHover(clicAudio);
        });

        element.addEventListener('mouseleave', function () {
            detenerAudioHover(clicAudio);
        });
    });

    bellElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            reproducirAudioHover(bellAudio);
        });

        element.addEventListener('mouseleave', function () {
            detenerAudioHover(bellAudio);
        });
    });

    clicElements.forEach(function (element) {
        element.addEventListener('click', function () {
            reproducirAudioHover(airAudio);
        });

        element.addEventListener('mouseleave', function () {
            detenerAudioHover(airAudio);
        });
    });
});


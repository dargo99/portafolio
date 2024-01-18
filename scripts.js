// images with zoom effect
document.querySelectorAll('.zoom-container').forEach(container => {
    container.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = (e.pageX - rect.left) / rect.width * 100;
        const y = (e.pageY - rect.top) / rect.height * 100;

        this.querySelector('.zoom-image').style.transformOrigin = `${x}% ${y}%`;
    });
});

// Sliders control
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

// Obtén todos los elementos <p> movibles dentro de .presentation
var moveableElements = document.querySelectorAll('.presentation p.moveable');

// Obtén el contenedor padre
var parentContainers = document.querySelectorAll('.presentation');

// Itera sobre todos los contenedores .presentation
parentContainers.forEach(function (parentContainer, index) {
    // Agrega un evento de escucha para el movimiento del mouse en cada contenedor padre
    parentContainer.addEventListener('mousemove', function (e) {
        // Calcula las coordenadas relativas al contenedor padre
        var parentRect = parentContainer.getBoundingClientRect();
        var x = e.clientX - parentRect.left;
        var y = e.clientY - parentRect.top;

        // Actualiza la posición de todos los <p> movibles dentro del contenedor actual
        moveableElements[index].style.left = x + 'px';
        moveableElements[index].style.top = y + 'px';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtén todos los elementos con las clases .whoomp y .clic
    var whoompElements = document.querySelectorAll('.whoomp');
    var clicElements = document.querySelectorAll('.presentation');
    var bellElements = document.querySelectorAll('.bell');

    // Crea elementos de audio para cada clase
    var whoompAudio = new Audio('audio/whoomp.mp3');
    var clicAudio = new Audio('audio/clic.mp3');
    var bellAudio = new Audio('audio/tilin.mp3');
    var airAudio = new Audio('audio/whoosh.mp3');

    // Función para reproducir el audio al hacer hover
    function reproducirAudioHover(audioElement) {
        audioElement.play();
    }

    // Función para detener la reproducción al salir del hover
    function detenerAudioHover(audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    // Agrega eventos a todos los elementos con la clase .whoomp
    whoompElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            reproducirAudioHover(whoompAudio);
        });

        element.addEventListener('mouseleave', function () {
            detenerAudioHover(whoompAudio);
        });
    });

    // Agrega eventos a todos los elementos con la clase .clic
    clicElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            reproducirAudioHover(clicAudio);
        });

        element.addEventListener('mouseleave', function () {
            detenerAudioHover(clicAudio);
        });
    });

    // Agrega eventos a todos los elementos con la clase .bell
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

// JavaScript para el efecto de parallax
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  document.getElementById('stars').style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});
function openNav() {
    var sidenav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("mainContent");
    var brandContainer = document.querySelector(".brand-container");

    sidenav.style.width = "450px"; 
    mainContent.classList.add("blur-background");
    brandContainer.classList.add("blur-background");
}

function closeNav() {
    var sidenav = document.getElementById("mySidenav");
    var mainContent = document.getElementById("mainContent");
    var brandContainer = document.querySelector(".brand-container");

    sidenav.style.width = "0";
    mainContent.classList.remove("blur-background");
    brandContainer.classList.remove("blur-background");
}





$(document).ready(function () {
    var currentIndex = 0;
    var slides = $('.slide');
    var slideWidth = $('.slide').width();
    var autoSlideInterval; 
    slides = $('.slide');

    function autoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); 
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        moveSlide(currentIndex);
    }

    function moveSlide(index) {
        $('.slides').animate({ 'margin-left': -index * slideWidth }, 1000, function () {
           
        });
    }

    autoSlide();

    $('.bar').click(function () {
        clearInterval(autoSlideInterval);

        var nextIndex = $(this).index();

        moveSlide(nextIndex);

        currentIndex = nextIndex;

        autoSlide();
    });
});


document.getElementById("section1").addEventListener("click", function () {
    // Действия при клике на первую секцию
});

document.getElementById("section2").addEventListener("click", function () {
    // Действия при клике на вторую секцию
});

document.getElementById("section3").addEventListener("click", function () {
    // Действия при клике на третью секцию
});



document.querySelectorAll('.thumbnail').forEach(item => {
    item.addEventListener('click', event => {
        document.querySelector('.main-photo').src = event.target.src;
    });
});

    const mainPhoto = document.querySelector('.main-photo');
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showImage(index) {
        mainPhoto.src = thumbnails[index].src;
    thumbnails[currentIndex].classList.add('hidden'); // Приховуємо поточне головне фото в нижньому списку
    thumbnails[index].classList.remove('hidden'); // Показуємо нове головне фото в нижньому списку
        }

    function prevImage() {
        currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
    showImage(currentIndex);
        }

    function nextImage() {
        currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
        }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
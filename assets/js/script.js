// Get the modal
var modal = document.getElementById("myModal");

// Get the div that opens the modal
var trigger = document.getElementById("modalTrigger");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the div, open the modal
trigger.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.onscroll = function() {
    modal.style.display = "none";
}



// start seminar

let currentSlide = 0;
const slider = document.querySelector(".slider");
const totalSlides = document.querySelectorAll(".slide").length;
const slidesPerView = 5; // Number of slides visible at a time

// Function to show the next set of slides
function nextSlide() {
    if (currentSlide < totalSlides - slidesPerView) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop back to the first slide
    }
    updateSliderPosition();
}

// Function to show the previous set of slides
function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - slidesPerView; // Loop to the last set of slides
    }
    updateSliderPosition();
}

// Function to update the slider position
function updateSliderPosition() {
    const slideWidth = document.querySelector(".slide").offsetWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Auto-slide functionality
let autoSlideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Pause auto-slide on hover
slider.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-slide when mouse leaves
slider.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});
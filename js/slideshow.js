let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("MySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }

  slides[slideIndex].style.opacity = "1";

  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  setTimeout(showSlides, 1000);
}
document.addEventListener("DOMContentLoaded", showSlides);

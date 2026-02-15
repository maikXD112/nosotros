const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateCarousel() {
  const width = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Flecha siguiente
nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length) currentIndex = 0;
  updateCarousel();
});

// Flecha anterior
prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = slides.length - 1;
  updateCarousel();
});

// Inicializar
updateCarousel();

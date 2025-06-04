document.querySelectorAll("button").forEach(btn => {
  if (!btn.classList.contains('carousel-button')) { // Evita que los botones del carrusel disparen el alerta de compra
    btn.addEventListener("click", () => {
      alert("¡Gracias por tu compra! 🛒");
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const carouselTracks = document.querySelectorAll('.carousel-track');

  carouselTracks.forEach(track => {
    let currentIndex = 0;
    const images = track.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const productId = track.dataset.productId;

    if (totalImages <= 1) {
      // Ocultar botones de navegación si solo hay una imagen
      const parentContainer = track.closest('.carousel-container');
      const navButtons = parentContainer.querySelectorAll('.carousel-button');
      navButtons.forEach(button => button.style.display = 'none');
      return; // Salir si no hay más de una imagen para deslizar
    }

    const updateCarousel = () => {
      const offset = -currentIndex * 100;
      track.style.transform = `translateX(${offset}%)`;
    };

    const prevButton = document.querySelector(`.carousel-button.prev[data-product-id="${productId}"]`);
    const nextButton = document.querySelector(`.carousel-button.next[data-product-id="${productId}"]`);

    if (prevButton) {
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
      });
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
      });
    }
  });
});

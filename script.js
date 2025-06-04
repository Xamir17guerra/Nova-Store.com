document.addEventListener('DOMContentLoaded', () => {
  // Manejo del carrusel de imágenes para productos con múltiples colores
  const carouselTracks = document.querySelectorAll('.carousel-track');

  carouselTracks.forEach(track => {
    let currentIndex = 0;
    const images = track.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const productId = track.dataset.productId;

    // Si solo hay una imagen, ocultar los botones de navegación
    if (totalImages <= 1) {
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

    // Inicializar el carrusel en la primera imagen
    updateCarousel();
  });
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    // Mantén el alert de compra para los botones de producto
    if (btn.closest('.producto')) { // Asegúrate de que es un botón de producto
      alert("Gracias por tu compra 🛒");
    }
  });
});

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const productosContainer = document.querySelector(".productos");
const productos = productosContainer.querySelectorAll(".producto");

searchButton.addEventListener("click", () => {
  filterProducts();
});

searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    filterProducts();
  }
});

function filterProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  productos.forEach(producto => {
    const productName = producto.querySelector("h2").textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      producto.classList.remove("hidden");
    } else {
      producto.classList.add("hidden");
    }
  });
}

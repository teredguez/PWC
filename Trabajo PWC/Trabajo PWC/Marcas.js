let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para recuperar el carrito desde localStorage
function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}


document.addEventListener("DOMContentLoaded", () => {
    const productImages = document.querySelectorAll(".product-image");

    //para cada imagen , aplicar que al poner el ratón encima se cambie a la imagen 2
    productImages.forEach((image) => {
        const originalSrc = image.src; // Ruta de la imagen original
        const hoverSrc = originalSrc.replace(/(\.\w+)$/, "1$1"); // Añade un '1' antes de la extensión para cambiar a la segunda imagen

        image.addEventListener("mouseover", () => {
            image.src = hoverSrc; // Cambia a la imagen 2
        });

        image.addEventListener("mouseout", () => {
            image.src = originalSrc; // Vuelve a la imagen original
        });
    });

    updateCartCount();
});

// Función para actualizar el conteo del carrito
function updateCartCount() {
    // Recuperar el carrito desde localStorage
    const cart = getCartFromLocalStorage();
    // Actualizar el contador en el HTML
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalItems;
}


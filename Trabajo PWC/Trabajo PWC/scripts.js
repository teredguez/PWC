let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para recuperar el carrito desde localStorage
function getCartFromLocalStorage() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Función para guardar el carrito en localStorage
function saveCartToLocalStorage(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Función para añadir productos al carrito
function addToCart(productName, productPrice, quantity, size) {
    console.log(`Añadiendo ${quantity} unidades de "${productName}" (Talla: ${size}) al carrito.`);

    // Añadir el producto al carrito
    cart.push({
        name: productName,
        price: productPrice,
        quantity: quantity,
        size: size
    });

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar el conteo del carrito
    updateCartCount();

    // Notificar al usuario
    alert(`${quantity} unidades de "${productName}" (Talla: ${size}) han sido añadidas al carrito.`);
}

// Función para actualizar el conteo del carrito en el menú
function updateCartCount() {
    // Recuperar el carrito desde localStorage
    const cart = getCartFromLocalStorage();
    
    // Actualizar el contador en el HTML
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalItems;
}

// Mostrar los productos del carrito en la consola
document.getElementById("cart-link").addEventListener("click", function() {
    // Recuperar el carrito desde localStorage
    const cart = getCartFromLocalStorage();
    
    console.log("Carrito de Compras:");
    cart.forEach(item => console.log(item.name + " - $" + item.price));
});

let currentIndex = 0; // Índice del primer elemento visible
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-track img");

function moveCarousel(direction) {
    const itemWidth = 150 + 20; // Ancho de la imagen + margen (ajusta si cambian)
    const trackWidth = track.parentElement.offsetWidth; // Ancho del contenedor visible
    const visibleItems = Math.floor(trackWidth / itemWidth); // Cantidad de elementos visibles
    const maxIndex = items.length - visibleItems;

    // Actualizar el índice actual
    currentIndex += direction;

    // Limitar el índice entre 0 y el máximo permitido
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    // Calcular el desplazamiento
    const offset = currentIndex * itemWidth;
    track.style.transform = `translateX(-${offset}px)`;
}


//funcion para deslizar la pantalla hacia los productos destacados
//al pulsar el boton de Shop Now
document.addEventListener("DOMContentLoaded", () => {
    //Actualizar contador carrito
    updateCartCount();
    
    // Seleccionamos el botón y la sección de destino
    const shopNowButton = document.getElementById("shop now button");
    const popularSection = document.getElementById("popular");

    // Agregamos el evento al botón
    shopNowButton.addEventListener("click", () => {
        popularSection.scrollIntoView({
            behavior: "smooth", // Deslizamiento suave
            block: "start"     // Alinea la parte superior de la sección con la parte superior de la ventana
        });
    });
});

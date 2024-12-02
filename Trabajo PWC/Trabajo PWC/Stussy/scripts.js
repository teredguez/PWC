// Carrito inicial vacío
let cart = [];

// Escucha el evento del botón "Añadir al carrito"
document.getElementById("add-to-cart-btn").addEventListener("click", function () {
    console.log("Botón 'Añadir al carrito' clicado."); // Depuración

    // Capturar la talla seleccionada
    const sizeSelect = document.getElementById("size-select");
    const selectedSize = sizeSelect.value;

    // Capturar el valor del input de cantidad
    const quantityInput = document.getElementById("quantity-input");
    const quantity = parseInt(quantityInput.value, 10);

    // Definir el producto actual (nombre y precio)
    const productName = "Chaqueta The North Face M 1996 Retro Nuptse";
    const productPrice = 230.00;

    // Validaciones
    if (!selectedSize) {
        alert("Por favor, selecciona una talla."); // Mostrar mensaje si no se selecciona talla
        return;
    }

    if (isNaN(quantity) || quantity <= 0) {
        alert("Por favor, ingresa una cantidad válida."); // Validación de cantidad
        return;
    }

    // Añadir al carrito
    addToCart(productName, productPrice, quantity, selectedSize);
});

// Función para añadir productos al carrito
function addToCart(productName, productPrice, quantity, size) {
    console.log(`Añadiendo ${quantity} unidades de "${productName}" (Talla: ${size}) al carrito.`); // Depuración

    // Añadir el producto al carrito
    cart.push({
        name: productName,
        price: productPrice,
        quantity: quantity,
        size: size
    });

    // Actualizar el conteo del carrito
    updateCartCount();

    // Notificar al usuario
    alert(`${quantity} unidades de "${productName}" (Talla: ${size}) han sido añadidas al carrito.`);
}

// Función para actualizar el contador de elementos en el carrito
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalItems;
}

// Mostrar los productos del carrito en la consola (opcional para depuración)
document.getElementById("cart-link").addEventListener("click", function () {
    console.log("Carrito de Compras:");
    cart.forEach(item => {
        console.log(`${item.quantity}x ${item.name} (Talla: ${item.size}) - €${item.price}`);
    });
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

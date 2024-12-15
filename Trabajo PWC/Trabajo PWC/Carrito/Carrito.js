// Recuperar carrito desde localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Función para mostrar los productos en el carrito
function displayCart() {

    console.log("Contenido del carrito:", cart); // Loguea el carrito completo
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = ''; // Limpiar el carrito actual

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
    } else {
        cart.forEach(item => {
            const productElement = document.createElement("div");
            productElement.classList.add("cart-item");

            productElement.innerHTML = `
                <div class="cart-item-details">
                    <p><strong>${item.name}</strong> (Talla: ${item.size})</p>
                    <p>Cantidad: ${item.quantity}</p>
                    <p>Precio: €${item.price.toFixed(2)}</p>
                    <p>Total: €${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                <button class="remove-item" data-name="${item.name}" data-size="${item.size}">Eliminar</button>
            `;

            cartContainer.appendChild(productElement);
        });
    }

    updateCartCount(); // Actualizar el contador de productos
    updateCartTotal(); // Actualizar el precio total
}

// Función para calcular el precio total de la compra
function updateCartTotal() {
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalContainer = document.getElementById("cart-total");
    totalContainer.innerHTML = `Total: €${totalPrice.toFixed(2)}`;
}

// Función para eliminar productos del carrito
function removeFromCart(productName, productSize) {
    // Filtrar el producto a eliminar
    cart = cart.filter(item => !(item.name === productName && item.size === productSize));

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualizar la vista del carrito
    displayCart();
}

// Función para actualizar el contador de productos en el carrito
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = totalItems;
}

// Escuchar el evento de clic en los botones de "Eliminar" en los productos del carrito
document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("remove-item")) {
        const productName = e.target.getAttribute("data-name");
        const productSize = e.target.getAttribute("data-size");

        removeFromCart(productName, productSize);
    }
});

// Inicializar la página del carrito
document.addEventListener("DOMContentLoaded", () => {
    displayCart();

    // Evento para el botón de "Comprar"
    document.getElementById("buy-button").addEventListener("click", function () {
        if (cart.length === 0) {
            alert("Tu carrito está vacío. No puedes proceder a pagar.");
        } else {
            // Redirigir a la página de pago
            window.location.href = "Pago.html";
        }
    });

    // Evento para el botón de "Vaciar carrito"
    document.getElementById("clear-cart").addEventListener("click", function () {
        // Limpiar el carrito
        cart = []; // Vaciar el array del carrito
        localStorage.removeItem("cart"); // Eliminar el carrito de localStorage
        displayCart(); // Actualizar la vista del carrito
    });
});

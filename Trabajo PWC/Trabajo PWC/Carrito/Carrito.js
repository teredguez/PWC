document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    const clearCartButton = document.getElementById('clear-cart');
    const buyButton = document.getElementById('buy-button');

    // Cargar el carrito desde localStorage
    let cart = JSON.parse(localStorage.getItem('carrito')) || [];

    // Renderizar el carrito
    const renderCart = () => {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeItem(${index})">Eliminar</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price;
        });

        cartTotalContainer.textContent = 'Total: $' + total.toFixed(2);
    };

    // Eliminar un artículo
    window.removeItem = (index) => {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    };

    // Vaciar carrito
    clearCartButton.addEventListener('click', () => {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    });

    // Comprar (vacía el carrito y redirige)
    buyButton.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Gracias por tu compra.');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = '../Menu.html';
        } else {
            alert('El carrito está vacío.');
        }
    });

    renderCart();
});


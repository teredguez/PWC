document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const successMessage = document.getElementById('success-message');

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular procesamiento de pago
        setTimeout(() => {
            paymentForm.style.display = 'none';
            successMessage.style.display = 'block';
            localStorage.removeItem('carrito'); // Vaciar el carrito tras finalizar compra
        }, 1000);
    });
});

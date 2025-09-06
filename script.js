// Selecciona todos los botones de "Añadir al carrito"
const buttons = document.querySelectorAll('.add-to-cart');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');

// Agrega un escuchador de eventos a cada botón
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtiene el título del juego del elemento h3 más cercano
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;

        // Muestra un mensaje temporal
        messageText.innerText = `¡${productName} añadido al carrito!`;
        messageBox.style.display = 'block';

        // Oculta el mensaje después de 2 segundos
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 2000);
    });
});

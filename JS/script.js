let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartBadge = document.getElementById('cartBadge');
const cartPanel = document.getElementById('cartPanel');
const cartList = document.getElementById('cartList');
const closeCart = document.getElementById('closeCart');
const clearCart = document.getElementById('clearCart');

cartBadge.innerText = cart.length;

/* ===== MENU LATERAL ===== */
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');

openMenu.addEventListener('click', () => sideMenu.classList.add('open'));
closeMenu.addEventListener('click', () => sideMenu.classList.remove('open'));

/* ===== CARRITO ===== */
document.querySelector('.cart-container').addEventListener('click', () => {
    cartPanel.classList.add('open');
    renderCart();
});

closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('open');
});

function renderCart() {
    cartList.innerHTML = '';

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.classList.add('cart__item');
        li.innerHTML = `
            ${product}
            <span class="cart__remove" data-index="${index}">✖</span>
        `;
        cartList.appendChild(li);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    cartBadge.innerText = cart.length;
}

/* Eliminar producto */
cartList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__remove')) {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        renderCart();
    }
});

/* Vaciar carrito */
clearCart.addEventListener('click', () => {
    cart = [];
    renderCart();
});

/* ===== AGREGAR AL CARRITO ===== */
const buttons = document.querySelectorAll('.add-to-cart');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').innerText;

        cart.push(productName);
        renderCart();

        messageText.innerText = `¡${productName} añadido al carrito!`;
        messageBox.style.display = 'block';

        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 2000);
    });
});

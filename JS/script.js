let cart = JSON.parse(localStorage.getItem('cart')) || [];

/* ===== ELEMENTOS ===== */
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

/* ===== ABRIR CARRITO ===== */
const cartButton = document.querySelector('.nav__item--cart');

cartButton.addEventListener('click', () => {
    cartPanel.classList.add('open');
    renderCart();
});

closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('open');
});

/* ===== RENDER CARRITO ===== */
function renderCart() {
    cartList.innerHTML = '';

    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.classList.add('cart__item');
        li.innerHTML = `
            <span>${product}</span>
            <span class="cart__remove" data-index="${index}">✖</span>
        `;
        cartList.appendChild(li);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
    cartBadge.innerText = cart.length;
}

/* ===== ELIMINAR ITEM ===== */
cartList.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart__remove')) {
        cart.splice(e.target.dataset.index, 1);
        renderCart();
    }
});

/* ===== VACIAR CARRITO ===== */
clearCart.addEventListener('click', () => {
    cart = [];
    renderCart();
});

/* ===== AÑADIR AL CARRITO ===== */
const buttons = document.querySelectorAll('.product__add-btn');
const messageBox = document.getElementById('messageBox');
const messageText = document.getElementById('messageText');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productName = product.querySelector('.product__title').innerText;

        cart.push(productName);
        renderCart();

        messageText.innerText = `¡${productName} añadido al carrito!`;
        messageBox.style.display = 'block';

        setTimeout(() => {
            messageBox.style.display = 'none';
        }, 2000);
    });
});

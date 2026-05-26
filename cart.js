const cartCount = document.querySelector('#cart-count');
const addToCartButton = document.querySelector('.add-to-cart');

let cartAmount = localStorage.getItem("cartAmount") || 0;
cartCount.textContent = cartAmount;

if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
        cartAmount++;
        localStorage.setItem("cartAmount", cartAmount);
        cartCount.textContent = cartAmount;
    });
}

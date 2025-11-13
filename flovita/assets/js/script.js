// Update cart badge function
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const badges = document.querySelectorAll('.flovita-cart-badge');
    badges.forEach(badge => {
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        badge.textContent = itemCount;
        badge.style.display = itemCount > 0 ? 'inline' : 'inline';
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Update cart badge on page load
    updateCartBadge();
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('p').textContent;
            const productId = this.getAttribute('data-product-id');
            
            const product = {
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            };
            
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(product);
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
            alert('Added to cart successfully!');
        });
    });

    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            products.forEach(product => {
                const name = product.querySelector('h3').textContent.toLowerCase();
                if (name.includes(query)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    }
});
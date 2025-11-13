// Image Viewer Functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Create modal HTML
    const modalHTML = `
        <div id="imageModal" class="image-modal">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img class="modal-image" id="modalImage" src="" alt="">
                <div class="modal-info">
                    <h3 id="modalTitle"></h3>
                    <p id="modalPrice"></p>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const closeBtn = document.querySelector('.modal-close');
    
    // Add zoom icons and click handlers to all product images
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const img = card.querySelector('img');
        const title = card.querySelector('h3').textContent;
        const price = card.querySelector('p').textContent;
        
        // Create image container and zoom icon
        const imgContainer = document.createElement('div');
        imgContainer.className = 'product-image-container';
        
        const zoomIcon = document.createElement('button');
        zoomIcon.className = 'image-zoom-icon';
        zoomIcon.innerHTML = '🔍';
        zoomIcon.title = 'View larger image';
        
        // Wrap image in container
        img.parentNode.insertBefore(imgContainer, img);
        imgContainer.appendChild(img);
        imgContainer.appendChild(zoomIcon);
        
        // Add click handlers
        function openModal() {
            modalImg.src = img.src;
            modalTitle.textContent = title;
            modalPrice.textContent = price;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        img.addEventListener('click', openModal);
        zoomIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            openModal();
        });
    });
    
    // Close modal handlers
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
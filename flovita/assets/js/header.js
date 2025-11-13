// Flovita Header Enhancement Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Add scroll shadow to category bar
    const categoryBar = document.querySelector('.flovita-header-bottom');
    let lastScrollY = window.scrollY;
    
    function updateCategoryBarShadow() {
        if (window.scrollY > 100) {
            categoryBar.style.boxShadow = '0 2px 8px rgba(244,143,177,0.15)';
        } else {
            categoryBar.style.boxShadow = 'none';
        }
    }
    
    window.addEventListener('scroll', updateCategoryBarShadow);
    
    // Update cart badge on storage changes
    window.addEventListener('storage', function() {
        if (typeof updateCartBadge === 'function') {
            updateCartBadge();
        }
    });
    
    // Highlight active category based on current page
    function highlightActiveCategory() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const categories = document.querySelectorAll('.flovita-category');
        
        categories.forEach(category => {
            category.classList.remove('active');
            const href = category.getAttribute('href');
            if (href === currentPage || 
                (currentPage === 'index.html' && href === 'index.html') ||
                (currentPage === '' && href === 'index.html')) {
                category.classList.add('active');
            }
        });
    }
    
    highlightActiveCategory();
    
    // Search functionality
    const searchInput = document.querySelector('.flovita-search-box input');
    const searchBtn = document.querySelector('.flovita-search-btn');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // Simple search - redirect to appropriate category page based on keywords
            const lowerQuery = query.toLowerCase();
            if (lowerQuery.includes('men') || lowerQuery.includes('shirt') || lowerQuery.includes('jeans')) {
                window.location.href = 'men.html';
            } else if (lowerQuery.includes('women') || lowerQuery.includes('dress') || lowerQuery.includes('kurti')) {
                window.location.href = 'women.html';
            } else if (lowerQuery.includes('kids') || lowerQuery.includes('children') || lowerQuery.includes('baby')) {
                window.location.href = 'kids.html';
            } else if (lowerQuery.includes('accessories') || lowerQuery.includes('bag') || lowerQuery.includes('watch')) {
                window.location.href = 'accessories.html';
            } else {
                alert(`Searching for: "${query}" - Check our categories for best results!`);
            }
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
});
// Универсальная функция добавления в корзину
window.addToCart = function(productId, quantity = 1) {
    if (window.cart && cart.add) {
        cart.add(productId, quantity);
        
        // Анимация добавления
        const btn = event?.target;
        if (btn) {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="bi bi-check"></i>';
            btn.classList.add('btn-success');
            btn.classList.remove('btn-primary');
            
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.remove('btn-success');
                btn.classList.add('btn-primary');
            }, 1000);
        }
        
        cart.updateCounter();
        return true;
    }
    return false;
};
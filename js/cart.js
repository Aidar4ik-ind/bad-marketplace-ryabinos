// Управление корзиной
class Cart {
    constructor() {
        this.storageKey = 'bad_marketplace_cart_v2';
        this.load();
    }
    
    // Загрузить из localStorage
    load() {
        try {
            const data = localStorage.getItem(this.storageKey);
            this.items = data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Ошибка загрузки корзины:', error);
            this.items = [];
        }
    }
    
    // Сохранить в localStorage
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        this.updateCounter();
    }
    
    // Добавить товар
    add(productId, quantity = 1) {
        const existing = this.items.find(item => item.id === productId);
        
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        this.save();
        this.showNotification(`Товар добавлен в корзину!`, 'success');
        return this.items;
    }
    
    // Удалить товар
    remove(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        return this.items;
    }
    
    // Изменить количество
    update(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.remove(productId);
            } else {
                item.quantity = quantity;
                this.save();
            }
        }
        return this.items;
    }
    
    // Очистить корзину
    clear() {
        this.items = [];
        this.save();
        return this.items;
    }
    
    // Получить все товары
    getAll() {
        return this.items;
    }
    
    // Получить количество товаров
    getCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    
    // Получить количество уникальных товаров
    getUniqueCount() {
        return this.items.length;
    }
    
    // Получить итоговую сумму
    getTotal(products) {
        return this.items.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }
    
    // Получить продукты корзины с полной информацией
    getFullCart(products) {
        return this.items.map(item => {
            const product = products.find(p => p.id === item.id);
            return {
                ...item,
                product: product || null,
                total: product ? product.price * item.quantity : 0
            };
        }).filter(item => item.product !== null);
    }
    
    // Проверить наличие товара в корзине
    hasProduct(productId) {
        return this.items.some(item => item.id === productId);
    }
    
    // Получить количество конкретного товара
    getProductQuantity(productId) {
        const item = this.items.find(item => item.id === productId);
        return item ? item.quantity : 0;
    }
    
    // Обновить счетчик в UI
    updateCounter() {
        const counters = document.querySelectorAll('#cartCounter, .cart-counter');
        const count = this.getCount();
        
        counters.forEach(counter => {
            counter.textContent = count;
            // Показываем бейдж только если есть товары
            if (counter.id === 'cartCounter') {
                counter.style.display = count > 0 ? 'inline-block' : 'none';
            }
        });
        
        // Обновляем иконку корзины
        const cartIcons = document.querySelectorAll('.bi-cart3');
        cartIcons.forEach(icon => {
            if (count > 0) {
                icon.classList.add('text-primary');
            } else {
                icon.classList.remove('text-primary');
            }
        });
    }
    
    // Показать уведомление
    showNotification(message, type = 'success') {
        // Удаляем старые уведомления
        document.querySelectorAll('.notification').forEach(notification => {
            if (notification.parentNode) {
                notification.remove();
            }
        });
        
        const icons = {
            success: 'bi-check-circle-fill',
            warning: 'bi-exclamation-triangle-fill',
            info: 'bi-info-circle-fill',
            danger: 'bi-x-circle-fill'
        };
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="card border-0">
                <div class="card-body p-3">
                    <div class="d-flex align-items-center">
                        <div class="flex-shrink-0 me-3">
                            <i class="bi ${icons[type] || 'bi-info-circle'} fs-4 ${type === 'success' ? 'text-success' : type === 'warning' ? 'text-warning' : type === 'danger' ? 'text-danger' : 'text-info'}"></i>
                        </div>
                        <div class="flex-grow-1">
                            <p class="mb-0 fw-medium">${message}</p>
                        </div>
                        <button type="button" class="btn-close" onclick="this.closest('.notification').remove()"></button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Автоматическое удаление через 3 секунды
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
    
    // Анимация добавления в корзину
    animateAddToCart(element) {
        if (!element) return;
        
        // Создаем элемент для анимации
        const animation = document.createElement('div');
        animation.style.cssText = `
            position: fixed;
            width: 40px;
            height: 40px;
            background: var(--gradient-1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            z-index: 9999;
            pointer-events: none;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        `;
        animation.innerHTML = '<i class="bi bi-cart-plus"></i>';
        
        // Позиция элемента
        const rect = element.getBoundingClientRect();
        animation.style.left = rect.left + rect.width / 2 - 20 + 'px';
        animation.style.top = rect.top + rect.height / 2 - 20 + 'px';
        
        document.body.appendChild(animation);
        
        // Цель - иконка корзины в навигации
        const cartIcon = document.querySelector('a[href="cart.html"] i.bi-cart3');
        const targetRect = cartIcon?.getBoundingClientRect();
        
        if (targetRect) {
            setTimeout(() => {
                animation.style.left = targetRect.left + targetRect.width / 2 - 20 + 'px';
                animation.style.top = targetRect.top + targetRect.height / 2 - 20 + 'px';
                animation.style.transform = 'scale(0.5)';
                animation.style.opacity = '0.5';
                
                setTimeout(() => {
                    if (animation.parentNode) {
                        animation.remove();
                    }
                }, 500);
            }, 100);
        } else {
            setTimeout(() => {
                if (animation.parentNode) {
                    animation.remove();
                }
            }, 1000);
        }
    }
    
    // Экспорт корзины в файл
    exportCart() {
        const cartData = {
            items: this.items,
            timestamp: new Date().toISOString(),
            totalItems: this.getCount(),
            totalUnique: this.getUniqueCount()
        };
        
        const dataStr = JSON.stringify(cartData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = 'baddvisor_cart_' + new Date().toISOString().slice(0,10) + '.json';
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
    
    // Импорт корзины из файла
    importCart(file) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (data.items && Array.isArray(data.items)) {
                    this.items = data.items;
                    this.save();
                    this.showNotification('Корзина успешно импортирована!', 'success');
                    location.reload(); // Перезагружаем страницу для обновления
                } else {
                    this.showNotification('Некорректный файл корзины', 'danger');
                }
            } catch (error) {
                console.error('Ошибка импорта корзины:', error);
                this.showNotification('Ошибка при импорте файла', 'danger');
            }
        };
        
        reader.readAsText(file);
    }
}

// Создаем глобальный экземпляр
const cart = new Cart();

// Глобальные функции для работы с корзиной
window.addToCart = function(productId, quantity = 1, event = null) {
    const result = cart.add(productId, quantity);
    
    if (event && event.target) {
        cart.animateAddToCart(event.target);
    }
    
    return result;
};

window.removeFromCart = function(productId) {
    return cart.remove(productId);
};

window.updateCartItem = function(productId, quantity) {
    return cart.update(productId, quantity);
};

window.clearCart = function() {
    if (confirm('Вы уверены, что хотите очистить корзину?')) {
        cart.clear();
        cart.showNotification('Корзина очищена', 'info');
        if (window.location.pathname.includes('cart.html')) {
            location.reload();
        }
    }
};

window.getCart = function() {
    return cart.getAll();
};

window.getCartWithDetails = function() {
    const products = window.Products ? Products.getAll() : [];
    return cart.getFullCart(products);
};

window.updateCartCounter = function() {
    return cart.updateCounter();
};

window.showCartNotification = function(message, type) {
    return cart.showNotification(message, type);
};

window.exportCart = function() {
    return cart.exportCart();
};

window.importCart = function(inputElement) {
    if (inputElement.files.length > 0) {
        cart.importCart(inputElement.files[0]);
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    cart.updateCounter();
});

// Обработка события перед закрытием страницы
window.addEventListener('beforeunload', () => {
    cart.save();
});

// Экспорт для Node.js (если нужно)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        Cart, 
        cart,
        addToCart: window.addToCart,
        removeFromCart: window.removeFromCart,
        updateCartItem: window.updateCartItem,
        clearCart: window.clearCart,
        getCart: window.getCart,
        getCartWithDetails: window.getCartWithDetails,
        updateCartCounter: window.updateCartCounter
    };
}
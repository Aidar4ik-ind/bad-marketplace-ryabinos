// Общие функции для всего сайта
document.addEventListener('DOMContentLoaded', function() {
    // Обновляем счетчик корзины
    updateCartCounter();
    
    // Инициализация всех компонентов
    initAllComponents();
    
    // Загрузка сохраненных фильтров
    setTimeout(loadSavedFilter, 500);
});

// Инициализация всех компонентов
function initAllComponents() {
    // Инициализация поиска
    if (document.getElementById('searchInput')) {
        initAdvancedSearch();
    }
    
    // Инициализация фильтров
    if (document.getElementById('filterTags')) {
        initAdvancedFilters();
    }
    
    // Инициализация категорий
    if (document.getElementById('categoryFilters')) {
        initCategoryFilters();
    }
    
    // Инициализация сортировки
    const sortSelect = document.getElementById('sortSelect');
    const priceFilter = document.getElementById('priceFilter');
    const resetBtn = document.getElementById('resetFiltersBtn');
    const saveFilterBtn = document.getElementById('saveFilterBtn');
    
    if (sortSelect) sortSelect.addEventListener('change', handleSort);
    if (priceFilter) priceFilter.addEventListener('change', handlePriceFilter);
    if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
    if (saveFilterBtn) saveFilterBtn.addEventListener('click', saveCurrentFilter);
}

// Улучшенный поиск
function initAdvancedSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    let searchTimeout;
    
    searchInput.addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            filterProducts(e.target.value.trim());
        }, 300); // Задержка 300мс
    });
    
    // Поиск при нажатии Enter
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filterProducts(this.value.trim());
        }
    });
}

// Инициализация категорий
function initCategoryFilters() {
    const container = document.getElementById('categoryFilters');
    if (!container) return;
    
    // Уникальные категории с русскими названиями
    const categories = [
        { id: 'all', name: 'Все', icon: 'bi-grid' },
        { id: 'stress', name: 'Стресс', icon: 'bi-emoji-dizzy' },
        { id: 'sleep', name: 'Сон', icon: 'bi-moon' },
        { id: 'energy', name: 'Энергия', icon: 'bi-lightning-charge' },
        { id: 'immunity', name: 'Иммунитет', icon: 'bi-shield-check' },
        { id: 'digestion', name: 'Пищеварение', icon: 'bi-stomach' },
        { id: 'joints', name: 'Суставы', icon: 'bi-heart-pulse' },
        { id: 'detox', name: 'Детокс', icon: 'bi-recycle' }
    ];
    
    container.innerHTML = categories.map(category => `
        <button class="btn btn-sm filter-btn ${category.id === 'all' ? 'active' : ''}" 
                data-category="${category.id}"
                title="${category.name}">
            <i class="bi ${category.icon} me-1"></i>${category.name}
        </button>
    `).join('');
    
    // Обработчики кликов
    container.addEventListener('click', function(e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        const category = btn.dataset.category;
        
        // Снимаем активный класс со всех кнопок
        document.querySelectorAll('#categoryFilters .filter-btn').forEach(b => {
            b.classList.remove('active');
        });
        
        // Добавляем активный класс текущей кнопке
        btn.classList.add('active');
        
        if (category === 'all') {
            displayAllProducts();
        } else {
            filterByCategory(category);
        }
    });
}

// Инициализация тегов
function initAdvancedFilters() {
    const container = document.getElementById('filterTags');
    if (!container) return;
    
    // Получаем популярные теги (теги, которые встречаются в 2+ продуктах)
    const allProducts = Products.getAll();
    const tagFrequency = {};
    
    allProducts.forEach(product => {
        product.tags.forEach(tag => {
            tagFrequency[tag] = (tagFrequency[tag] || 0) + 1;
        });
    });
    
    // Берем только популярные теги
    const popularTags = Object.keys(tagFrequency)
        .filter(tag => tagFrequency[tag] >= 2)
        .sort((a, b) => tagFrequency[b] - tagFrequency[a])
        .slice(0, 15); // Максимум 15 популярных тегов
    
    container.innerHTML = popularTags.map(tag => `
        <button class="btn btn-sm filter-btn" data-tag="${tag}">
            #${tag}
        </button>
    `).join('');
    
    // Обработчики кликов
    container.addEventListener('click', function(e) {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        btn.classList.toggle('active');
        applyMultipleFilters();
    });
}

// Фильтрация по категории
function filterByCategory(category) {
    const products = Products.getByCategory(category);
    const container = document.getElementById('catalogContainer');
    
    if (container) {
        renderProducts(products, container);
        updateProductsCount(products.length);
    }
}

// Фильтрация по цене
function handlePriceFilter(e) {
    const value = e.target.value;
    if (value === 'Ценовой диапазон') {
        applyMultipleFilters();
        return;
    }
    
    const [min, max] = value.split('-').map(Number);
    applyMultipleFilters();
}

// Сортировка
function handleSort(e) {
    const sortBy = e.target.value;
    const products = getCurrentFilteredProducts();
    let sorted = [...products];
    
    switch(sortBy) {
        case 'price-asc':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            sorted.sort((a, b) => b.name.localeCompare(b.name));
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
        case 'popular':
            // Смешанная сортировка по рейтингу и отзывам
            sorted.sort((a, b) => {
                const scoreA = a.rating * Math.log(a.reviews + 1);
                const scoreB = b.rating * Math.log(b.reviews + 1);
                return scoreB - scoreA;
            });
            break;
    }
    
    renderProducts(sorted, document.getElementById('catalogContainer'));
}

// Применение нескольких фильтров одновременно
function applyMultipleFilters() {
    let products = Products.getAll();
    
    // Фильтр по поиску
    const searchQuery = document.getElementById('searchInput')?.value.trim().toLowerCase();
    if (searchQuery) {
        products = Products.search(searchQuery);
    }
    
    // Фильтр по активным тегам
    const activeTags = Array.from(document.querySelectorAll('#filterTags .filter-btn.active'))
        .map(btn => btn.dataset.tag);
    
    if (activeTags.length > 0) {
        products = products.filter(p => 
            activeTags.every(tag => p.tags.includes(tag))
        );
    }
    
    // Фильтр по категории
    const activeCategory = document.querySelector('#categoryFilters .filter-btn.active')?.dataset.category;
    if (activeCategory && activeCategory !== 'all') {
        products = products.filter(p => p.category === activeCategory);
    }
    
    // Фильтр по цене
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter && priceFilter.value !== 'Ценовой диапазон') {
        const [min, max] = priceFilter.value.split('-').map(Number);
        products = products.filter(p => p.price >= min && p.price <= max);
    }
    
    // Применяем текущую сортировку
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect && sortSelect.value !== 'Сортировка') {
        handleSort({ target: sortSelect });
        return;
    }
    
    renderProducts(products, document.getElementById('catalogContainer'));
    updateProductsCount(products.length);
}

// Общая фильтрация
function filterProducts(query) {
    const products = Products.search(query);
    const container = document.getElementById('catalogContainer');
    
    if (container) {
        renderProducts(products, container);
        updateProductsCount(products.length);
    }
}

// Сброс всех фильтров
function resetAllFilters() {
    // Сброс поиска
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Сброс селектов
    const sortSelect = document.getElementById('sortSelect');
    const priceFilter = document.getElementById('priceFilter');
    if (sortSelect) sortSelect.selectedIndex = 0;
    if (priceFilter) priceFilter.selectedIndex = 0;
    
    // Сброс активных кнопок
    document.querySelectorAll('.filter-btn.active').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Установка "Все" как активной
    const allBtn = document.querySelector('#categoryFilters button[data-category="all"]');
    if (allBtn) allBtn.classList.add('active');
    
    displayAllProducts();
    
    // Показываем уведомление
    if (window.cart && window.cart.showNotification) {
        cart.showNotification('Все фильтры сброшены', 'info');
    }
}

// Сохранение фильтра
function saveCurrentFilter() {
    const filters = {
        search: document.getElementById('searchInput')?.value || '',
        sort: document.getElementById('sortSelect')?.value || '',
        price: document.getElementById('priceFilter')?.value || '',
        activeTags: Array.from(document.querySelectorAll('#filterTags .filter-btn.active'))
            .map(btn => btn.dataset.tag),
        activeCategory: document.querySelector('#categoryFilters .filter-btn.active')?.dataset.category || 'all'
    };
    
    localStorage.setItem('baddvisor_savedFilter', JSON.stringify(filters));
    
    // Показываем уведомление
    if (window.cart && window.cart.showNotification) {
        cart.showNotification('Фильтр сохранен!', 'success');
    }
}

// Загрузка сохраненного фильтра
function loadSavedFilter() {
    const saved = localStorage.getItem('baddvisor_savedFilter');
    if (!saved) return;
    
    try {
        const filters = JSON.parse(saved);
        
        // Применяем поиск
        const searchInput = document.getElementById('searchInput');
        if (searchInput && filters.search) {
            searchInput.value = filters.search;
        }
        
        // Применяем сортировку
        const sortSelect = document.getElementById('sortSelect');
        if (sortSelect && filters.sort) {
            sortSelect.value = filters.sort;
        }
        
        // Применяем ценовой фильтр
        const priceFilter = document.getElementById('priceFilter');
        if (priceFilter && filters.price) {
            priceFilter.value = filters.price;
        }
        
        // Применяем активные теги
        if (filters.activeTags && filters.activeTags.length > 0) {
            filters.activeTags.forEach(tag => {
                const btn = document.querySelector(`#filterTags .filter-btn[data-tag="${tag}"]`);
                if (btn) btn.classList.add('active');
            });
        }
        
        // Применяем активную категорию
        if (filters.activeCategory) {
            const categoryBtn = document.querySelector(`#categoryFilters .filter-btn[data-category="${filters.activeCategory}"]`);
            if (categoryBtn) {
                document.querySelectorAll('#categoryFilters .filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                categoryBtn.classList.add('active');
            }
        }
        
        // Применяем фильтры
        applyMultipleFilters();
    } catch (error) {
        console.error('Ошибка загрузки сохраненного фильтра:', error);
    }
}

// Получение текущих отфильтрованных продуктов
function getCurrentFilteredProducts() {
    const container = document.getElementById('catalogContainer');
    if (!container) return Products.getAll();
    
    // Здесь можно реализовать получение текущих продуктов из DOM
    // Для простоты возвращаем все отфильтрованные
    return Products.getAll();
}

// Показать все продукты
function displayAllProducts() {
    const products = Products.getAll();
    const container = document.getElementById('catalogContainer');
    
    if (container) {
        renderProducts(products, container);
        updateProductsCount(products.length);
    }
}

// Рендер продуктов
function renderProducts(products, container) {
    if (!container) return;
    
    if (products.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="card border-0 shadow-sm">
                    <div class="card-body py-5">
                        <div class="display-1 text-muted mb-4">
                            <i class="bi bi-search"></i>
                        </div>
                        <h4 class="mb-3">Товары не найдены</h4>
                        <p class="text-muted mb-4">Попробуйте изменить поисковый запрос или выберите другой фильтр</p>
                        <button class="btn btn-primary" onclick="resetAllFilters()">
                            <i class="bi bi-arrow-clockwise me-2"></i>Сбросить все фильтры
                        </button>
                    </div>
                </div>
            </div>
        `;
        updateProductsCount(0);
        return;
    }
    
    // Обновляем счетчик товаров
    updateProductsCount(products.length);
    
    container.innerHTML = products.map(product => `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card h-100" onclick="location.href='product-details.html?id=${product.id}'" style="cursor: pointer;">
                <div class="position-relative">
                    <!-- Бейдж рейтинга -->
                    <div class="position-absolute top-0 end-0 m-3">
                        <span class="badge bg-warning">
                            <i class="bi bi-star-fill me-1"></i>${product.rating}
                        </span>
                    </div>
                    
                    <!-- Бейдж популярности -->
                    ${product.reviews > 150 ? `
                    <div class="position-absolute top-0 start-0 m-3">
                        <span class="badge bg-danger animate-pulse">
                            <i class="bi bi-fire me-1"></i>Популярное
                        </span>
                    </div>
                    ` : ''}
                    
                    <img src="${product.image}" 
                         class="card-img-top" 
                         alt="${product.name}"
                         style="height: 200px; object-fit: cover;"
                         onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 200\"><rect width=\"300\" height=\"200\" fill=\"%23f8f9fa\"/><text x=\"150\" y=\"100\" font-family=\"Arial\" font-size=\"16\" text-anchor=\"middle\" fill=\"%236c757d\">Нет изображения</text></svg>'">
                </div>
                <div class="p-3">
                    <h6 class="card-title fw-bold mb-2">${product.name}</h6>
                    <p class="card-text text-muted small mb-3">${product.description}</p>
                    
                    <!-- ТЕГИ -->
                    <div class="mb-3">
                        ${product.tags.slice(0, 2).map(tag => 
                            `<span class="badge-tag">${tag}</span>`
                        ).join('')}
                        ${product.tags.length > 2 ? `<span class="badge bg-secondary">+${product.tags.length - 2}</span>` : ''}
                    </div>
                    
                    <!-- Цена и кнопки -->
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="fw-bold text-primary h5 mb-0">${product.price} ₽</span>
                            <div class="text-muted small">
                                <i class="bi bi-chat-left-text me-1"></i>${product.reviews}
                            </div>
                        </div>
                        <div class="d-flex gap-1">
                            <button class="btn btn-sm btn-outline-primary" 
                                    onclick="event.stopPropagation(); window.open('product-details.html?id=${product.id}', '_blank')"
                                    title="Открыть в новой вкладке">
                                <i class="bi bi-box-arrow-up-right"></i>
                            </button>
                            <button class="btn btn-sm btn-primary add-to-cart-btn" 
                                    data-id="${product.id}"
                                    onclick="event.stopPropagation(); addToCart(${product.id}, 1, event)"
                                    title="Добавить в корзину">
                                <i class="bi bi-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Обновление счетчика товаров
function updateProductsCount(count) {
    const counter = document.getElementById('productsCount');
    if (counter) {
        counter.textContent = count;
        counter.classList.add('animate-pulse');
        setTimeout(() => counter.classList.remove('animate-pulse'), 500);
    }
}

// Быстрый просмотр товара (модальное окно)
function quickView(productId, event) {
    if (event) event.stopPropagation();
    
    const product = Products.getById(productId);
    if (!product) return;
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'quickViewModal';
    modal.tabIndex = '-1';
    modal.innerHTML = `
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0 pb-0">
                    <h5 class="modal-title">${product.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
                        </div>
                        <div class="col-md-6">
                            <p class="text-muted">${product.description}</p>
                            <div class="mb-3">
                                ${product.tags.map(tag => `<span class="badge-tag">${tag}</span>`).join('')}
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-primary mb-0">${product.price} ₽</h4>
                                <div>
                                    <span class="badge bg-warning">
                                        <i class="bi bi-star-fill me-1"></i>${product.rating}
                                    </span>
                                </div>
                            </div>
                            <button class="btn btn-primary w-100 mb-2" onclick="addToCart(${product.id}, 1, event); $('#quickViewModal').modal('hide')">
                                <i class="bi bi-cart-plus me-2"></i>Добавить в корзину
                            </button>
                            <a href="product-details.html?id=${product.id}" class="btn btn-outline-primary w-100">
                                <i class="bi bi-info-circle me-2"></i>Подробнее
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Показываем модальное окно
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
    
    // Удаляем модальное окно после скрытия
    modal.addEventListener('hidden.bs.modal', function () {
        modal.remove();
    });
}

// Делаем функции глобальными
window.filterProducts = filterProducts;
window.filterByCategory = filterByCategory;
window.applyMultipleFilters = applyMultipleFilters;
window.resetAllFilters = resetAllFilters;
window.loadSavedFilter = loadSavedFilter;
window.displayAllProducts = displayAllProducts;
window.renderProducts = renderProducts;
window.quickView = quickView;
window.updateCartCounter = updateCartCounter;
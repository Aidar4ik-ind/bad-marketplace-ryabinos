// База данных продуктов с локальными картинками
const productsData = [
    {
        id: 1,
        name: "Магний B6 Extra Pure",
        description: "Хелатный магний высшей чистоты для снижения стресса и улучшения качества сна",
        price: 1290,
        tags: ["магний", "стресс", "сон", "нервы", "витамины"],
        category: "stress",
        rating: 4.8,
        reviews: 156,
        image: "assets/images/1.png",
        composition: "Магний (цитрат) 400мг, Витамин B6 10мг",
        dosage: "1 капсула в день во время еды",
        form: "Капсулы, 60 шт",
        manufacturer: "Nature's Way",
        shelfLife: "24 месяца",
        storage: "Хранить в сухом месте при температуре до 25°C",
        contraindications: "Индивидуальная непереносимость компонентов",
        instructionLink: "#"
    },
    {
        id: 2,
        name: "Мелатонин Экстра",
        description: "Для глубокого сна и легкого пробуждения. Продленного действия",
        price: 890,
        tags: ["сон", "мелатонин", "релаксация", "гормон сна"],
        category: "sleep",
        rating: 4.7,
        reviews: 203,
        image: "assets/images/2.png",
        composition: "Мелатонин 3мг, Валериана, Мелисса",
        dosage: "1 таблетка за 30 минут до сна",
        form: "Таблетки, 90 шт",
        manufacturer: "Now Foods",
        shelfLife: "36 месяцев",
        storage: "В защищенном от света месте",
        contraindications: "Беременность, лактация",
        instructionLink: "#"
    },
    {
        id: 3,
        name: "Энерджи Буст",
        description: "Мгновенный заряд бодрости и энергии на весь день",
        price: 1500,
        tags: ["энергия", "бодрость", "витамины", "активность"],
        category: "energy",
        rating: 4.9,
        reviews: 312,
        image: "assets/images/3.png",
        composition: "Коэнзим Q10, Витамины группы B, Гуарана",
        dosage: "1 капсула утром",
        form: "Капсулы, 30 шт",
        manufacturer: "Solgar",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Беременность, сердечные заболевания",
        instructionLink: "#"
    },
    {
        id: 4,
        name: "Иммуно Гуард",
        description: "Максимальная защита иммунитета в сезон простуд",
        price: 1100,
        tags: ["иммунитет", "витамин C", "цинк", "защита"],
        category: "immunity",
        rating: 4.6,
        reviews: 187,
        image: "assets/images/4.png",
        composition: "Витамин C 1000мг, Цинк 15мг, Эхинацея",
        dosage: "1 таблетка в день",
        form: "Таблетки, 60 шт",
        manufacturer: "Nature Made",
        shelfLife: "24 месяца",
        storage: "В сухом прохладном месте",
        contraindications: "Аутоиммунные заболевания",
        instructionLink: "#"
    },
    {
        id: 5,
        name: "Детокс Комплекс",
        description: "Глубокое очищение организма от токсинов и шлаков",
        price: 950,
        tags: ["детокс", "очищение", "печень", "токсины"],
        category: "detox",
        rating: 4.5,
        reviews: 124,
        image: "assets/images/5.png",
        composition: "Расторопша, Артишок, Куркума, Хлорелла",
        dosage: "2 капсулы в день",
        form: "Капсулы, 90 шт",
        manufacturer: "Jarrow Formulas",
        shelfLife: "24 месяца",
        storage: "При температуре до 25°C",
        contraindications: "Острые заболевания ЖКТ",
        instructionLink: "#"
    },
    {
        id: 6,
        name: "Ашваганда Премиум",
        description: "Адаптоген для устойчивости к стрессу и тревожности",
        price: 1300,
        tags: ["стресс", "адаптоген", "тревожность", "аюрведа"],
        category: "stress",
        rating: 4.7,
        reviews: 245,
        image: "assets/images/6.png",
        composition: "Экстракт корня ашваганды 500мг",
        dosage: "1 капсула 1-2 раза в день",
        form: "Капсулы, 60 шт",
        manufacturer: "Himalaya",
        shelfLife: "36 месяцев",
        storage: "В сухом месте",
        contraindications: "Беременность, гипертиреоз",
        instructionLink: "#"
    },
    {
        id: 7,
        name: "L-Теанин Про",
        description: "Для ясности ума и спокойствия без сонливости",
        price: 950,
        tags: ["стресс", "концентрация", "мозг", "фокус"],
        category: "stress",
        rating: 4.8,
        reviews: 178,
        image: "assets/images/7.png",
        composition: "L-Теанин 200мг, GABA 100мг",
        dosage: "1 капсула при необходимости",
        form: "Капсулы, 45 шт",
        manufacturer: "Doctor's Best",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Индивидуальная непереносимость",
        instructionLink: "#"
    },
    {
        id: 8,
        name: "Коэнзим Q10 Ultra",
        description: "Для клеточной энергии и антиоксидантной защиты",
        price: 1800,
        tags: ["энергия", "антиоксидант", "сердце", "митохондрии"],
        category: "energy",
        rating: 4.9,
        reviews: 267,
        image: "assets/images/8.png",
        composition: "Коэнзим Q10 200мг, Витамин E",
        dosage: "1 капсула в день",
        form: "Капсулы, 60 шт",
        manufacturer: "Healthy Origins",
        shelfLife: "24 месяца",
        storage: "В защищенном от света месте",
        contraindications: "Прием варфарина",
        instructionLink: "#"
    },
    {
        id: 9,
        name: "Женьшень Корейский",
        description: "Природный тоник для энергии и выносливости",
        price: 1400,
        tags: ["энергия", "женьшень", "тонус", "выносливость"],
        category: "energy",
        rating: 4.6,
        reviews: 156,
        image: "assets/images/9.png",
        composition: "Экстракт корня женьшеня 500мг",
        dosage: "1 капсула утром",
        form: "Капсулы, 90 шт",
        manufacturer: "Korean Ginseng Corp",
        shelfLife: "36 месяцев",
        storage: "В сухом прохладном месте",
        contraindications: "Гипертония, беременность",
        instructionLink: "#"
    },
    {
        id: 10,
        name: "Витамин B-Комплекс",
        description: "12 витаминов группы B для энергии и нервной системы",
        price: 890,
        tags: ["энергия", "витамины", "нервы", "метаболизм"],
        category: "energy",
        rating: 4.7,
        reviews: 289,
        image: "assets/images/10.png",
        composition: "B1, B2, B3, B5, B6, B7, B9, B12",
        dosage: "1 таблетка в день",
        form: "Таблетки, 120 шт",
        manufacturer: "Thorne Research",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Индивидуальная непереносимость",
        instructionLink: "#"
    },
    {
        id: 11,
        name: "Витамин C 1000",
        description: "Высокодозированный с биофлавоноидами",
        price: 650,
        tags: ["иммунитет", "антиоксидант", "коллаген", "здоровье"],
        category: "immunity",
        rating: 4.8,
        reviews: 421,
        image: "assets/images/11.png",
        composition: "Витамин C 1000мг, Биофлавоноиды",
        dosage: "1 таблетка в день",
        form: "Таблетки, 180 шт",
        manufacturer: "California Gold Nutrition",
        shelfLife: "36 месяцев",
        storage: "В сухом месте",
        contraindications: "Мочекаменная болезнь",
        instructionLink: "#"
    },
    {
        id: 12,
        name: "Цинк + Витамин D",
        description: "Дуэт для иммунитета и костной системы",
        price: 820,
        tags: ["иммунитет", "цинк", "витамин D", "кости"],
        category: "immunity",
        rating: 4.7,
        reviews: 198,
        image: "assets/images/12.png",
        composition: "Цинк 25мг, Витамин D3 2000 МЕ",
        dosage: "1 капсула в день",
        form: "Капсулы, 120 шт",
        manufacturer: "Nature's Bounty",
        shelfLife: "24 месяца",
        storage: "При температуре до 25°C",
        contraindications: "Гиперкальциемия",
        instructionLink: "#"
    },
    {
        id: 13,
        name: "Пробиотик Иммуно",
        description: "Для иммунитета и здоровой микрофлоры кишечника",
        price: 1350,
        tags: ["иммунитет", "пробиотик", "микрофлора", "пищеварение"],
        category: "immunity",
        rating: 4.9,
        reviews: 234,
        image: "assets/images/13.png",
        composition: "10 штаммов пробиотиков 50 млрд КОЕ",
        dosage: "1 капсула в день",
        form: "Капсулы, 30 шт",
        manufacturer: "Garden of Life",
        shelfLife: "18 месяцев (в холодильнике)",
        storage: "Хранить в холодильнике",
        contraindications: "Острые кишечные инфекции",
        instructionLink: "#"
    },
    {
        id: 14,
        name: "Суставы Флекс",
        description: "Для подвижности суставов и здоровья хрящей",
        price: 1600,
        tags: ["суставы", "хондроитин", "глюкозамин", "коллаген"],
        category: "joints",
        rating: 4.6,
        reviews: 189,
        image: "assets/images/14.png",
        composition: "Глюкозамин 1500мг, Хондроитин 1200мг",
        dosage: "3 капсулы в день",
        form: "Капсулы, 180 шт",
        manufacturer: "Move Free",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Аллергия на моллюсков",
        instructionLink: "#"
    },
    {
        id: 15,
        name: "Коллаген Морской",
        description: "Для суставов, кожи и соединительной ткани",
        price: 1750,
        tags: ["суставы", "коллаген", "кожа", "волосы"],
        category: "joints",
        rating: 4.8,
        reviews: 276,
        image: "assets/images/15.png",
        composition: "Морской коллаген 5000мг, Витамин C",
        dosage: "1 мерная ложка в день",
        form: "Порошок, 300г",
        manufacturer: "Vital Proteins",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Индивидуальная непереносимость",
        instructionLink: "#"
    },
    {
        id: 16,
        name: "Омега-3 Ультра",
        description: "Высокая концентрация для сердца и мозга",
        price: 1250,
        tags: ["омега-3", "сердце", "мозг", "воспаление"],
        category: "joints",
        rating: 4.9,
        reviews: 345,
        image: "assets/images/16.png",
        composition: "EPA 650мг, DHA 450мг",
        dosage: "1 капсула в день",
        form: "Капсулы, 120 шт",
        manufacturer: "Nordic Naturals",
        shelfLife: "24 месяца (в холодильнике)",
        storage: "Хранить в холодильнике",
        contraindications: "Нарушения свертываемости крови",
        instructionLink: "#"
    },
    {
        id: 17,
        name: "Клетчатка Актив",
        description: "Для здорового пищеварения и очищения кишечника",
        price: 480,
        tags: ["пищеварение", "клетчатка", "очищение", "пребиотик"],
        category: "digestion",
        rating: 4.5,
        reviews: 167,
        image: "assets/images/17.png",
        composition: "Псиллиум, Инулин, Льняное семя",
        dosage: "1 столовая ложка в день",
        form: "Порошок, 400г",
        manufacturer: "Now Foods",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Острая кишечная непроходимость",
        instructionLink: "#"
    },
    {
        id: 18,
        name: "Ферментный Комплекс",
        description: "Для улучшения усвоения пищи и комфорта в животе",
        price: 890,
        tags: ["пищеварение", "ферменты", "тяжесть", "вздутие"],
        category: "digestion",
        rating: 4.7,
        reviews: 198,
        image: "assets/images/18.png",
        composition: "Амилаза, Липаза, Протеаза, Бромелайн",
        dosage: "1-2 капсулы с едой",
        form: "Капсулы, 90 шт",
        manufacturer: "Enzymedica",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Острый панкреатит",
        instructionLink: "#"
    },
    {
        id: 19,
        name: "Куркумин Экстра",
        description: "Мощное противовоспалительное и антиоксидантное действие",
        price: 980,
        tags: ["суставы", "куркумин", "воспаление", "антиоксидант"],
        category: "joints",
        rating: 4.8,
        reviews: 223,
        image: "assets/images/19.png",
        composition: "Куркумин 500мг, Биоперин",
        dosage: "1 капсула 1-2 раза в день",
        form: "Капсулы, 60 шт",
        manufacturer: "Life Extension",
        shelfLife: "24 месяца",
        storage: "В защищенном от света месте",
        contraindications: "Желчнокаменная болезнь",
        instructionLink: "#"
    },
    {
        id: 20,
        name: "Глюкозамин+МСМ",
        description: "Восстановление хрящевой ткани суставов",
        price: 1450,
        tags: ["суставы", "глюкозамин", "мсм", "хрящи"],
        category: "joints",
        rating: 4.6,
        reviews: 187,
        image: "assets/images/20.png",
        composition: "Глюкозамин 1500мг, MSM 1000мг",
        dosage: "2 капсулы в день",
        form: "Капсулы, 180 шт",
        manufacturer: "Doctor's Best",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Аллергия на моллюсков",
        instructionLink: "#"
    },
    {
        id: 21,
        name: "Эхинацея Форте",
        description: "Поддержка иммунитета в сезон простуд",
        price: 590,
        tags: ["иммунитет", "эхинацея", "простуда", "профилактика"],
        category: "immunity",
        rating: 4.5,
        reviews: 156,
        image: "assets/images/21.png",
        composition: "Экстракт эхинацеи 500мг",
        dosage: "1 капсула 2 раза в день",
        form: "Капсулы, 60 шт",
        manufacturer: "Nature's Answer",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Аутоиммунные заболевания",
        instructionLink: "#"
    },
    {
        id: 22,
        name: "Печень Протектор",
        description: "Защита и восстановление клеток печени",
        price: 1100,
        tags: ["детокс", "печень", "расторопша", "гепатопротектор"],
        category: "detox",
        rating: 4.7,
        reviews: 178,
        image: "assets/images/22.png",
        composition: "Силимарин 500мг, Артишок, Куркума",
        dosage: "2 капсулы в день",
        form: "Капсулы, 60 шт",
        manufacturer: "Jarrow Formulas",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Острые заболевания печени",
        instructionLink: "#"
    },
    {
        id: 23,
        name: "Имбирь+Куркума",
        description: "Противовоспалительный дуэт для пищеварения",
        price: 720,
        tags: ["пищеварение", "имбирь", "куркума", "противовоспалительное"],
        category: "digestion",
        rating: 4.6,
        reviews: 145,
        image: "assets/images/23.png",
        composition: "Имбирь 500мг, Куркума 500мг",
        dosage: "1 капсула 2 раза в день",
        form: "Капсулы, 90 шт",
        manufacturer: "Organic India",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Язвенная болезнь в стадии обострения",
        instructionLink: "#"
    },
    {
        id: 24,
        name: "Ацетил-L-Карнитин",
        description: "Для энергии мозга, памяти и концентрации",
        price: 1250,
        tags: ["энергия", "мозг", "память", "концентрация"],
        category: "energy",
        rating: 4.8,
        reviews: 201,
        image: "assets/images/24.png",
        composition: "Ацетил-L-Карнитин 500мг, Альфа-липоевая кислота",
        dosage: "1 капсула утром",
        form: "Капсулы, 60 шт",
        manufacturer: "Now Foods",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Эпилепсия",
        instructionLink: "#"
    },
    {
        id: 25,
        name: "НейроБаланс",
        description: "Для эмоционального равновесия и хорошего настроения",
        price: 1050,
        tags: ["стресс", "настроение", "эмоции", "баланс"],
        category: "stress",
        rating: 4.7,
        reviews: 189,
        image: "assets/images/25.png",
        composition: "5-НТР 100мг, Магний, Витамин B6",
        dosage: "1 капсула вечером",
        form: "Капсулы, 60 шт",
        manufacturer: "Natural Factors",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Прием антидепрессантов",
        instructionLink: "#"
    },
    {
        id: 26,
        name: "Сонный Лотос",
        description: "Травяной комплекс для спокойного сна",
        price: 750,
        tags: ["сон", "травы", "релаксация", "валериана"],
        category: "sleep",
        rating: 4.6,
        reviews: 167,
        image: "assets/images/26.png",
        composition: "Валериана, Хмель, Пассифлора, Лаванда",
        dosage: "2 капсулы перед сном",
        form: "Капсулы, 60 шт",
        manufacturer: "Gaia Herbs",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Беременность, лактация",
        instructionLink: "#"
    },
    {
        id: 27,
        name: "Ночной Покой",
        description: "Магний и валериана для глубокого восстановительного сна",
        price: 920,
        tags: ["сон", "магний", "валериана", "восстановление"],
        category: "sleep",
        rating: 4.8,
        reviews: 198,
        image: "assets/images/27.png",
        composition: "Магний 400мг, Экстракт валерианы",
        dosage: "1 таблетка перед сном",
        form: "Таблетки, 90 шт",
        manufacturer: "Nature's Way",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Почечная недостаточность",
        instructionLink: "#"
    },
    {
        id: 28,
        name: "АнтиСтресс Макс",
        description: "Мощная формула против стресса и усталости",
        price: 1200,
        tags: ["стресс", "нервы", "усталость", "адаптация"],
        category: "stress",
        rating: 4.7,
        reviews: 176,
        image: "assets/images/28.png",
        composition: "Родиола, Левзея, Элеутерококк, Магний",
        dosage: "1 капсула утром",
        form: "Капсулы, 60 шт",
        manufacturer: "Solgar",
        shelfLife: "24 месяца",
        storage: "В сухом месте",
        contraindications: "Гипертония, беременность",
        instructionLink: "#"
    },
    {
        id: 29,
        name: "Магний Хелат",
        description: "Высокая биодоступность для максимального усвоения",
        price: 850,
        tags: ["стресс", "магний", "хелат", "усвоение"],
        category: "stress",
        rating: 4.9,
        reviews: 234,
        image: "assets/images/29.png",
        composition: "Магний (бисглицинат) 400мг",
        dosage: "2 капсулы в день",
        form: "Капсулы, 180 шт",
        manufacturer: "Doctor's Best",
        shelfLife: "24 месяца",
        storage: "При комнатной температуре",
        contraindications: "Почечная недостаточность",
        instructionLink: "#"
    },
    {
        id: 30,
        name: "Dream Perfect",
        description: "Мелатонин продленного действия для качественного сна",
        price: 1100,
        tags: ["сон", "качество сна", "мелатонин", "восстановление"],
        category: "sleep",
        rating: 4.8,
        reviews: 210,
        image: "assets/images/30.png",
        composition: "Мелатонин 5мг (пролонгированного действия)",
        dosage: "1 таблетка перед сном",
        form: "Таблетки, 60 шт",
        manufacturer: "Life Extension",
        shelfLife: "36 месяцев",
        storage: "В защищенном от света месте",
        contraindications: "Аутоиммунные заболевания",
        instructionLink: "#"
    }
];

// Функции для работы с продуктами
const Products = {
    // Получить все продукты
    getAll: () => productsData,
    
    // Получить продукт по ID
    getById: (id) => productsData.find(p => p.id === parseInt(id)),
    
    // Получить несколько продуктов по ID
    getByIds: (ids) => productsData.filter(p => ids.includes(p.id)),
    
    // Получить популярные продукты
    getFeatured: (count = 8) => {
        return [...productsData]
            .sort((a, b) => b.rating - a.rating || b.reviews - a.reviews)
            .slice(0, count);
    },
    
    // Получить продукты по тегу
    getByTag: (tag) => productsData.filter(p => p.tags.includes(tag)),
    
    // Получить продукты по категории
    getByCategory: (category) => productsData.filter(p => p.category === category),
    
    // Получить продукты по диапазону цен
    getByPriceRange: (min, max) => productsData.filter(p => p.price >= min && p.price <= max),
    
    // Поиск продуктов
    search: (query) => {
        const q = query.toLowerCase();
        return productsData.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.description.toLowerCase().includes(q) ||
            p.tags.some(tag => tag.toLowerCase().includes(q)) ||
            p.category.toLowerCase().includes(q)
        );
    },
    
    // Получить все уникальные теги
    getAllTags: () => {
        const allTags = new Set();
        productsData.forEach(product => {
            product.tags.forEach(tag => allTags.add(tag));
        });
        return Array.from(allTags);
    },
    
    // Получить все уникальные категории
    getAllCategories: () => {
        const categories = new Set(productsData.map(p => p.category));
        return Array.from(categories);
    },
    
    // Получить продукты с лучшим рейтингом
    getTopRated: (count = 5) => {
        return [...productsData]
            .sort((a, b) => b.rating - a.rating)
            .slice(0, count);
    },
    
    // Получить самые обсуждаемые продукты
    getMostReviewed: (count = 5) => {
        return [...productsData]
            .sort((a, b) => b.reviews - a.reviews)
            .slice(0, count);
    },
    
    // Получить похожие продукты
    getSimilarProducts: (productId, limit = 4) => {
        const product = Products.getById(productId);
        if (!product) return [];
        
        // Находим продукты с общими тегами или категорией
        return productsData
            .filter(p => 
                p.id !== productId && 
                (p.category === product.category || 
                 p.tags.some(tag => product.tags.includes(tag)))
            )
            .slice(0, limit);
    },
    
    // Фильтрация по нескольким критериям
    filterProducts: (filters = {}) => {
        let filtered = [...productsData];
        
        if (filters.category) {
            filtered = filtered.filter(p => p.category === filters.category);
        }
        
        if (filters.minPrice !== undefined) {
            filtered = filtered.filter(p => p.price >= filters.minPrice);
        }
        
        if (filters.maxPrice !== undefined) {
            filtered = filtered.filter(p => p.price <= filters.maxPrice);
        }
        
        if (filters.tags && filters.tags.length > 0) {
            filtered = filtered.filter(p => 
                filters.tags.every(tag => p.tags.includes(tag))
            );
        }
        
        if (filters.search) {
            const q = filters.search.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(q) || 
                p.description.toLowerCase().includes(q)
            );
        }
        
        return filtered;
    }
};

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Products;
} else {
    window.Products = Products;
}
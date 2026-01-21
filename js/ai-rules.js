// Расширенные правила для ИИ-ассистента
const aiRulesExtended = {
    // Основные категории
    'сон': [1, 2, 26, 27, 30],
    'спать': [1, 2, 26, 27],
    'бессонница': [1, 2, 27],
    'просыпаюсь': [1, 2],
    'засыпаю': [1, 2, 30],
    'ночь': [1, 2, 30],
    'ночной': [1, 2, 30],
    'пробуждение': [1, 2],
    'отдых': [1, 2, 27],
    'устал': [1, 2, 3, 27],
    
    'стресс': [1, 6, 7, 25, 28, 29],
    'нервы': [1, 6, 7, 28],
    'тревож': [6, 7, 25],
    'паника': [6, 7],
    'волнение': [6, 7],
    'спокойствие': [6, 7],
    'переживания': [6, 7, 25],
    'нервничаю': [6, 7],
    'раздражительность': [6, 7, 28],
    'напряжение': [1, 6, 28],
    
    'усталость': [3, 8, 9, 10, 24],
    'энергия': [3, 8, 9, 10, 24],
    'силы': [3, 9, 10],
    'вялость': [3, 10, 24],
    'слабость': [3, 10],
    'утомляемость': [3, 9, 10],
    'нет сил': [3, 9, 10],
    'выносливость': [3, 9, 10],
    'работоспособность': [3, 24],
    
    'иммунитет': [4, 11, 12, 13, 21],
    'простуда': [4, 11, 21],
    'болезнь': [4, 11, 13],
    'грипп': [4, 11],
    'здоровье': [4, 11, 12, 13],
    'сезон': [4, 11, 21],
    'вирус': [4, 11, 13],
    'защита': [4, 13, 21],
    'профилактика': [4, 11, 21],
    'заболеваю': [4, 11, 21],
    
    'пищеварение': [5, 17, 18, 23],
    'желудок': [17, 18],
    'кишечник': [17, 18],
    'запор': [17],
    'диарея': [18],
    'изжога': [18],
    'тяжесть': [18],
    'переваривание': [18],
    'вздутие': [18, 23],
    'газы': [18],
    'дискомфорт': [18, 23],
    
    'суставы': [14, 15, 16, 19, 20],
    'колени': [14, 15, 20],
    'спина': [14, 15, 20],
    'артрит': [19, 20],
    'хруст': [14, 15],
    'гибкость': [14, 15, 20],
    'боль': [14, 19, 20],
    'воспаление': [19, 20],
    'подвижность': [14, 15],
    'хрящи': [14, 15, 20],
    
    'концентрация': [7, 24],
    'память': [24],
    'мозг': [24],
    'учёба': [24],
    'работа': [24],
    'экзамен': [24],
    'фокус': [7, 24],
    'внимание': [7, 24],
    'запоминать': [24],
    'учиться': [24],
    
    'настроение': [1, 6, 25],
    'депрессия': [25],
    'апатия': [25],
    'радость': [25],
    'эмоции': [6, 25],
    'грусть': [25],
    'подавлен': [25],
    'мотивация': [25],
    'эмоциональный': [6, 25],
    
    'детокс': [5, 22],
    'очищение': [5, 22],
    'печень': [5, 22],
    'токсины': [5, 22],
    'шлаки': [5],
    'очистить': [5, 22],
    'чистка': [5, 22],
    'выведение': [5, 22],
    
    // Комбинированные запросы
    'усталость и сон': [1, 2, 3, 24, 27],
    'стресс и сон': [1, 2, 6, 7, 27],
    'иммунитет и энергия': [3, 4, 11, 24],
    'суставы и воспаление': [19, 20],
    'пищеварение и детокс': [5, 17, 22],
    'память и концентрация': [7, 24],
    'энергия и настроение': [3, 25],
    'сон и настроение': [1, 2, 25],
    'иммунитет и пищеварение': [4, 13, 17],
    
    // Симптомы по времени суток
    'утром': [3, 24],
    'днем': [3, 7, 24],
    'вечером': [1, 2, 6, 27],
    'ночью': [1, 2, 30],
    'перед сном': [1, 2, 27, 30],
    'после сна': [3, 24],
    'в течение дня': [3, 7, 10],
    
    // Возрастные группы
    'молодой': [3, 8, 24],
    'студент': [24],
    'взрослый': [1, 6, 14, 20],
    'работающий': [1, 3, 7, 24],
    'пожилой': [4, 14, 15, 20],
    'возраст': [4, 14, 15],
    'после 40': [4, 14, 15, 20],
    'после 50': [4, 14, 15, 20],
    'после 60': [4, 14, 15, 20],
    
    // Сезонные
    'осень': [4, 11, 21],
    'зима': [4, 11, 13],
    'весна': [5, 22],
    'лето': [3, 8, 9],
    'холодно': [4, 11],
    'тепло': [3, 8],
    
    // Общие состояния
    'работа за компьютером': [14, 15, 24],
    'физические нагрузки': [3, 8, 14, 15],
    'умственные нагрузки': [7, 24],
    'путешествия': [4, 18],
    'экология': [5, 22, 13],
    'город': [5, 22],
    'загрязнение': [5, 22],
    'спорт': [3, 8, 14, 15],
    'тренировки': [3, 8, 14, 15],
    'фитнес': [3, 8, 14, 15],
    
    // Профессии
    'офис': [14, 15, 24],
    'водитель': [14, 15, 24],
    'учитель': [4, 24],
    'врач': [4, 11],
    'студент': [24],
    'спортсмен': [3, 8, 14, 15],
    
    // Образ жизни
    'малоподвижный': [14, 15, 17],
    'активный': [3, 8, 14, 15],
    'питание': [17, 18, 23],
    'диета': [17, 18],
    'вегетарианец': [10, 16],
    'веган': [10, 16],
    
    // Жалобы
    'голова': [1, 24],
    'сердце': [8, 16],
    'давление': [1, 8],
    'кожа': [15, 22],
    'волосы': [15],
    'ногти': [15],
    'зрение': [24],
    'слух': [24],
    'дыхание': [4],
    'аллергия': [13],
    'метаболизм': [10, 18],
    'вес': [5, 17],
    'аппетит': [18, 23],
    'тошнота': [18, 23],
    'головокружение': [1, 24],
    
    // Вопросы
    'что принимать': [1, 4, 11],
    'как улучшить': [1, 3, 4, 14],
    'чем поддержать': [1, 4, 11, 14],
    'рекомендации': [1, 4, 11, 14],
    'совет': [1, 4, 11, 14],
    'помогите': [1, 4, 11, 14],
    'подскажите': [1, 4, 11, 14],
    'посоветуйте': [1, 4, 11, 14]
};

// Расширенные группы симптомов для быстрого выбора
const symptomGroups = {
    'sleep': {
        name: 'Нарушения сна',
        keywords: ['сон', 'бессонница', 'просыпаюсь', 'засыпаю', 'ночь'],
        products: [1, 2, 26, 27, 30],
        description: 'Проблемы с засыпанием, ночные пробуждения, неглубокий сон'
    },
    'stress': {
        name: 'Стресс и тревога',
        keywords: ['стресс', 'нервы', 'тревож', 'паника', 'волнение'],
        products: [1, 6, 7, 25, 28, 29],
        description: 'Нервозность, раздражительность, постоянное напряжение'
    },
    'energy': {
        name: 'Упадок сил',
        keywords: ['усталость', 'энергия', 'силы', 'вялость', 'слабость'],
        products: [3, 8, 9, 10, 24],
        description: 'Хроническая усталость, отсутствие бодрости, низкая работоспособность'
    },
    'immunity': {
        name: 'Слабый иммунитет',
        keywords: ['иммунитет', 'простуда', 'болезнь', 'грипп', 'вирус'],
        products: [4, 11, 12, 13, 21],
        description: 'Частые простуды, длительное восстановление после болезней'
    },
    'digestion': {
        name: 'Пищеварение',
        keywords: ['пищеварение', 'желудок', 'кишечник', 'запор', 'диарея'],
        products: [5, 17, 18, 23],
        description: 'Проблемы с пищеварением, дискомфорт в животе, нарушения стула'
    },
    'joints': {
        name: 'Суставы и кости',
        keywords: ['суставы', 'колени', 'спина', 'артрит', 'хруст'],
        products: [14, 15, 16, 19, 20],
        description: 'Боли в суставах, ограниченная подвижность, хруст'
    },
    'brain': {
        name: 'Память и концентрация',
        keywords: ['концентрация', 'память', 'мозг', 'фокус', 'внимание'],
        products: [7, 24],
        description: 'Сложности с концентрацией, ухудшение памяти, рассеянность'
    },
    'mood': {
        name: 'Настроение',
        keywords: ['настроение', 'депрессия', 'апатия', 'радость', 'эмоции'],
        products: [1, 6, 25],
        description: 'Подавленное настроение, апатия, эмоциональные перепады'
    },
    'detox': {
        name: 'Очищение организма',
        keywords: ['детокс', 'очищение', 'печень', 'токсины', 'шлаки'],
        products: [5, 22],
        description: 'Очищение организма от токсинов, поддержка печени'
    }
};

// Умная функция для анализа запросов
function analyzeAIRequest(query) {
    const queryLower = query.toLowerCase();
    const foundKeywords = [];
    const recommendedIds = new Set();
    const matchedGroups = [];
    
    // Проверяем по группам симптомов
    Object.keys(symptomGroups).forEach(groupKey => {
        const group = symptomGroups[groupKey];
        if (group.keywords.some(keyword => queryLower.includes(keyword))) {
            matchedGroups.push(group.name);
            group.products.forEach(id => recommendedIds.add(id));
            
            // Добавляем ключевые слова группы
            group.keywords.forEach(keyword => {
                if (queryLower.includes(keyword)) {
                    foundKeywords.push(keyword);
                }
            });
        }
    });
    
    // Проверяем по общим правилам
    Object.keys(aiRulesExtended).forEach(keyword => {
        if (queryLower.includes(keyword) && !foundKeywords.includes(keyword)) {
            foundKeywords.push(keyword);
            aiRulesExtended[keyword].forEach(id => recommendedIds.add(id));
        }
    });
    
    // Если найдено мало ключевых слов, добавляем общие рекомендации
    if (foundKeywords.length <= 1) {
        // Анализируем по контексту
        if (queryLower.includes('как') || queryLower.includes('что') || queryLower.includes('чем')) {
            // Это вопрос, добавляем объяснительные продукты
            [1, 4, 11, 24].forEach(id => recommendedIds.add(id));
        } else if (queryLower.length > 20) {
            // Длинный запрос, добавляем комплексные решения
            [1, 3, 4, 11, 14].forEach(id => recommendedIds.add(id));
        }
    }
    
    // Если есть упоминание о времени приема
    if (queryLower.includes('утром') || queryLower.includes('днем')) {
        recommendedIds.add(3);
        recommendedIds.add(24);
        recommendedIds.add(10);
    }
    if (queryLower.includes('вечером') || queryLower.includes('перед сном')) {
        recommendedIds.add(1);
        recommendedIds.add(2);
        recommendedIds.add(6);
        recommendedIds.add(27);
    }
    
    // Если есть упоминание о возрасте
    if (queryLower.includes('молод') || queryLower.includes('студент')) {
        recommendedIds.add(3);
        recommendedIds.add(24);
    }
    if (queryLower.includes('взросл') || queryLower.includes('после 30')) {
        recommendedIds.add(1);
        recommendedIds.add(6);
    }
    if (queryLower.includes('пожил') || queryLower.includes('после 50') || queryLower.includes('после 60')) {
        recommendedIds.add(4);
        recommendedIds.add(14);
        recommendedIds.add(15);
        recommendedIds.add(16);
    }
    
    return {
        keywords: foundKeywords,
        productIds: Array.from(recommendedIds),
        matchedGroups: matchedGroups
    };
}

// Функция для генерации объяснения
function generateExplanation(keywords, groups, products) {
    let explanation = '';
    
    if (groups.length > 0) {
        explanation = `На основе вашего запроса я определил ${groups.length > 1 ? 'несколько проблем' : 'проблему'}: `;
        explanation += groups.join(', ');
        explanation += '. ';
        
        if (groups.includes('Нарушения сна')) {
            explanation += 'Для улучшения качества сна важно не только принимать добавки, но и соблюдать гигиену сна. ';
        }
        if (groups.includes('Стресс и тревога')) {
            explanation += 'При стрессе важно поддерживать нервную систему и адаптационные возможности организма. ';
        }
        if (groups.includes('Упадок сил')) {
            explanation += 'Для восстановления энергии важно обеспечить организм всеми необходимыми нутриентами. ';
        }
        
        explanation += 'Вот рекомендованные БАДы:';
    } else if (keywords.length > 0) {
        const mainKeywords = keywords.slice(0, 3).join(', ');
        explanation = `Я анализировал ваш запрос и определил ключевые слова: ${mainKeywords}. `;
        
        // Добавляем контекстные рекомендации
        if (keywords.some(k => ['сон', 'спать', 'бессонница'].includes(k))) {
            explanation += 'Для проблем со сном важно нормализовать циркадные ритмы. ';
        }
        if (keywords.some(k => ['стресс', 'нервы', 'тревож'].includes(k))) {
            explanation += 'При стресссостояниях важно поддерживать нервную систему. ';
        }
        
        explanation += 'На основе этого анализа рекомендую следующие БАДы:';
    } else {
        explanation = 'На основе общего анализа вашего состояния рекомендую следующие БАДы для поддержания здоровья:';
    }
    
    return explanation;
}

// Функция для получения описания группы симптомов
function getSymptomGroupDescription(groupKey) {
    return symptomGroups[groupKey]?.description || '';
}

// Функция для получения продуктов по группе
function getProductsBySymptomGroup(groupKey) {
    return symptomGroups[groupKey]?.products || [];
}

// Функция для создания комплексных рекомендаций
function createComplexRecommendation(groups) {
    const allProducts = new Set();
    
    groups.forEach(groupKey => {
        const products = getProductsBySymptomGroup(groupKey);
        products.forEach(id => allProducts.add(id));
    });
    
    // Добавляем базовые продукты для комплексного подхода
    if (groups.length >= 2) {
        [1, 4, 11].forEach(id => allProducts.add(id));
    }
    
    return Array.from(allProducts);
}

// Экспорт функций
if (typeof window !== 'undefined') {
    window.aiRulesExtended = aiRulesExtended;
    window.symptomGroups = symptomGroups;
    window.analyzeAIRequest = analyzeAIRequest;
    window.generateExplanation = generateExplanation;
    window.getSymptomGroupDescription = getSymptomGroupDescription;
    window.getProductsBySymptomGroup = getProductsBySymptomGroup;
    window.createComplexRecommendation = createComplexRecommendation;
}

// Экспорт для Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        aiRulesExtended,
        symptomGroups,
        analyzeAIRequest,
        generateExplanation,
        getSymptomGroupDescription,
        getProductsBySymptomGroup,
        createComplexRecommendation
    };
}
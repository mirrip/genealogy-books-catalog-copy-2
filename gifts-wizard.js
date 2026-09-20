/**
 * GIFTS WIZARD - Интеллектуальный сервис подбора подарка
 * Разработано для Status Gift / РодКод
 */

(function () {
  'use strict';

  // База книг с реальными характеристиками и фотографиями из каталога сайта
  const CATALOG_BOOKS = [
    {
      id: 1,
      title: "Элитная",
      price: 29000,
      prestige: 4,
      image: "элитная 29/elitnaya_01_under_3mb.jpg",
      images: [
        "элитная 29/elitnaya_01_under_3mb.jpg",
        "элитная 29/elitnaya_02_under_3mb.jpg",
        "элитная 29/elitnaya_03_under_3mb.jpg",
        "элитная 29/elitnaya_04_under_3mb.jpg",
        "элитная 29/elitnaya_05_under_3mb.jpg"
      ],
      description: "Подарите семье реликвию, достойную поколений. Роскошный кожаный фолиант ручной работы в самом статусном исполнении для исключительных дат.",
      tags: ["Натуральная кожа", "Ручная работа", "Футляр в комплекте", "Статусный VIP"],
      occasions: ["jubilee", "vip", "birthday", "family"],
      genders: ["male", "family", "universal"]
    },
    {
      id: 2,
      title: "Элитная с тиснением",
      price: 26500,
      prestige: 4,
      image: "элитная с тен 26/elitnaya_s_ten_01_under_3mb.jpg",
      images: [
        "элитная с тен 26/elitnaya_s_ten_01_under_3mb.jpg",
        "элитная с тен 26/elitnaya_s_ten_02_under_3mb.jpg",
        "элитная с тен 26/elitnaya_s_ten_03_under_3mb.jpg",
        "элитная с тен 26/elitnaya_s_ten_04_under_3mb.jpg"
      ],
      description: "История семьи в тёплом благородном кожаном облике с глубоким художественным тиснением. Памятный подарок высшей категории.",
      tags: ["Натуральная кожа", "Глубокое тиснение", "Подарочный футляр"],
      occasions: ["jubilee", "vip", "family", "birthday"],
      genders: ["male", "female", "family", "universal"]
    },
    {
      id: 3,
      title: "Изысканная в оплётке с золочёным древом",
      price: 11200,
      prestige: 3,
      image: "изызканная в оплетке 11/braid_album_01_optimized.jpg",
      images: [
        "изызканная в оплетке 11/braid_album_01_optimized.jpg",
        "изызканная в оплетке 11/braid_album_02_optimized.jpg",
        "изызканная в оплетке 11/braid_album_03_optimized.jpg"
      ],
      description: "Книга, где родословная оживает золотым древом на обложке из натуральной кожи с изящной ручной оплёткой по периметру.",
      tags: ["Золочёное древо", "Кожаная оплётка", "Ручная работа"],
      occasions: ["wedding", "jubilee", "family", "birthday"],
      genders: ["female", "family", "universal", "male"]
    },
    {
      id: 4,
      title: "Изысканная в оплётке",
      price: 10500,
      prestige: 3,
      image: "изызканная в оплетке/izyskannaya_2_01_under_3mb.jpg",
      images: [
        "изызканная в оплетке/izyskannaya_2_01_under_3mb.jpg",
        "изызканная в оплетке/izyskannaya_2_02_under_3mb.jpg"
      ],
      description: "Тёплая родословная книга с особым характером и ручным плетением. В ней оживут семейные воспоминания и имена предков.",
      tags: ["Кожаная оплётка", "Премиум эко-кожа", "Бархатный ложемент"],
      occasions: ["jubilee", "family", "birthday", "vip"],
      genders: ["male", "female", "family", "universal"]
    },
    {
      id: 5,
      title: "Изысканная",
      price: 9500,
      prestige: 3,
      image: "изысканная 9/izyskannaya_album_01_optimized.jpg",
      images: [
        "изысканная 9/izyskannaya_album_01_optimized.jpg",
        "изысканная 9/izyskannaya_album_02_optimized.jpg"
      ],
      description: "Классическое утончённое оформление с золотым орнаментом. Отличный выбор для семейного праздника и сохранения традиций.",
      tags: ["Классический стиль", "Золотой орнамент", "Хит продаж"],
      occasions: ["family", "birthday", "jubilee", "wedding"],
      genders: ["female", "family", "universal"]
    },
    {
      id: 6,
      title: "Изысканная «Тройка»",
      price: 9500,
      prestige: 3,
      image: "тройка изыск/troyka_izysk_01_under_3mb.jpg",
      images: [
        "тройка изыск/troyka_izysk_01_under_3mb.jpg",
        "тройка изыск/troyka_izysk_02_under_3mb.jpg"
      ],
      description: "Динамичный русский мотив в переплёте книги. Тройка лошадей как символ движения поколений и жизненного пути семьи.",
      tags: ["Русский стиль", "Художественное тиснение", "Тройка"],
      occasions: ["jubilee", "birthday", "vip", "family"],
      genders: ["male", "family", "universal"]
    },
    {
      id: 7,
      title: "Изысканная «Летописец»",
      price: 9500,
      prestige: 3,
      image: "изыск летописец/letopisets_album_01_optimized.jpg",
      images: [
        "изыск летописец/letopisets_album_01_optimized.jpg",
        "изыск летописец/letopisets_album_02_optimized.jpg"
      ],
      description: "Солидный фолиант с рельефным изображением древнего летописца. Подчеркивает глубину истории рода и мудрость предков.",
      tags: ["Сюжет «Летописец»", "Мудрый подарок", "Кожаный переплёт"],
      occasions: ["jubilee", "birthday", "vip", "family"],
      genders: ["male", "universal"]
    },
    {
      id: 8,
      title: "Изысканная «Благословение»",
      price: 9500,
      prestige: 3,
      image: "изыск благословие/blessing_album_01_optimized.jpg",
      images: [
        "изыск благословие/blessing_album_01_optimized.jpg",
        "изыск благословие/blessing_album_02_optimized.jpg"
      ],
      description: "Светлая, наполненная теплом книга. Символизирует благословение родителей и крепость семейных уз. Идеальна для свадьбы и крестин.",
      tags: ["Светлый переплёт", "Благословение", "Венчание / Свадьба"],
      occasions: ["wedding", "child", "family", "jubilee"],
      genders: ["female", "family", "universal"]
    },
    {
      id: 9,
      title: "Семейный альбом",
      price: 5000,
      prestige: 1,
      image: "альбом/album_01_optimized.jpg",
      images: [
        "альбом/album_01_optimized.jpg",
        "альбом/album_02_optimized.jpg"
      ],
      description: "Доступный, уютный и душевный альбом для начала составления семейной летописи и бережного хранения старых фотографий.",
      tags: ["Доступная цена", "Для первых шагов", "Семейный уют"],
      occasions: ["family", "birthday", "child", "wedding"],
      genders: ["universal", "family", "female"]
    },
    {
      id: 10,
      title: "Художественная бордовая с гербом",
      price: 7200,
      prestige: 2,
      image: "худож герб 7/hudozh_gerb_01_under_3mb.jpg",
      images: [
        "худож герб 7/hudozh_gerb_01_under_3mb.jpg",
        "худож герб 7/hudozh_gerb_02_under_3mb.jpg"
      ],
      description: "Торжественный бордовый переплёт с государственным гербом России. Прекрасный представительский подарок для мужчины или руководителя.",
      tags: ["Герб России", "Бордовый переплёт", "Строгий стиль"],
      occasions: ["vip", "jubilee", "birthday", "family"],
      genders: ["male", "universal"]
    },
    {
      id: 11,
      title: "Художественная бордовая с древом",
      price: 7200,
      prestige: 2,
      image: "худож древо 7/hudozh_drevo_01_under_3mb.jpg",
      images: [
        "худож древо 7/hudozh_drevo_01_under_3mb.jpg",
        "худож древо 7/hudozh_drevo_02_under_3mb.jpg"
      ],
      description: "Глубокий бордовый цвет и золотое тиснение генеалогического древа. Классический символ неразрывной связи поколений.",
      tags: ["Символ Древа", "Золотое тиснение", "Семейная летопись"],
      occasions: ["family", "jubilee", "wedding", "birthday"],
      genders: ["family", "female", "universal", "male"]
    },
    {
      id: 12,
      title: "Художественная чёрная с гербом",
      price: 7200,
      prestige: 2,
      image: "худож черн 7/hudozh_chern_01_under_3mb.jpg",
      images: [
        "худож черн 7/hudozh_chern_01_under_3mb.jpg",
        "худож черн 7/hudozh_chern_02_under_3mb.jpg"
      ],
      description: "Монументальная чёрная книга с лаконичным золотым гербом. Мужественный и сдержанный подарок для солидного человека.",
      tags: ["Чёрная классика", "Золотой герб", "Мужской характер"],
      occasions: ["jubilee", "vip", "birthday"],
      genders: ["male"]
    },
    {
      id: 13,
      title: "Художественная синяя с гербом",
      price: 7200,
      prestige: 2,
      image: "худож син 7/hudozh_sin_01_under_3mb.jpg",
      images: [
        "худож син 7/hudozh_sin_01_under_3mb.jpg",
        "худож син 7/hudozh_sin_02_under_3mb.jpg"
      ],
      description: "Благородный сапфировый оттенок с гербовым тиснением. Выразительное сочетание строгости и торжественности.",
      tags: ["Сапфировый цвет", "Золотой герб", "Презентабельный"],
      occasions: ["jubilee", "vip", "birthday"],
      genders: ["male", "universal"]
    },
    {
      id: 14,
      title: "Художественная «Свадебная с древом»",
      price: 7200,
      prestige: 2,
      image: "худож свадебная 7/hudozh_svadebnaya_01_under_3mb.jpg",
      images: [
        "худож свадебная 7/hudozh_svadebnaya_01_under_3mb.jpg",
        "худож свадебная 7/hudozh_svadebnaya_02_under_3mb.jpg"
      ],
      description: "Изящная книга в светлых тонах, созданная специально ко дню бракосочетания. Символ объединения двух ветвей в один крепкий род.",
      tags: ["Свадебный дизайн", "Светлая обложка", "Символ союза"],
      occasions: ["wedding", "family", "child"],
      genders: ["family", "female", "universal"]
    },
    {
      id: 15,
      title: "Художественная зелёная с мечетью",
      price: 7200,
      prestige: 2,
      image: "худож мечеть 7/hudozh_mechet_01_under_3mb.jpg",
      images: [
        "худож мечеть 7/hudozh_mechet_01_under_3mb.jpg",
        "худож мечеть 7/hudozh_mechet_02_under_3mb.jpg"
      ],
      description: "Традиционный изумрудно-зелёный переплёт с тонким орнаментом и изображением мечети. Духовный семейный подарок со смыслом.",
      tags: ["Восточный орнамент", "Изумрудный цвет", "Семейное древо"],
      occasions: ["jubilee", "family", "birthday"],
      genders: ["male", "family", "universal"]
    },
    {
      id: 16,
      title: "Художественная мусульманская",
      price: 7200,
      prestige: 2,
      image: "худож мусульман 7/hudozh_musulman_01_under_3mb.jpg",
      images: [
        "худож мусульман 7/hudozh_musulman_01_under_3mb.jpg",
        "худож мусульман 7/hudozh_musulman_02_under_3mb.jpg"
      ],
      description: "Изящная арабская вязь и традиционная символика. Хранилище родословной мусульманской семьи от прадедов к внукам.",
      tags: ["Традиционная вязь", "Золотой орнамент", "Шежере"],
      occasions: ["jubilee", "family", "wedding"],
      genders: ["family", "male", "universal"]
    },
    {
      id: 17,
      title: "Художественная на английском",
      price: 7200,
      prestige: 2,
      image: "худож англ 10/hudozh_angl_01_under_3mb.jpg",
      images: [
        "худож англ 10/hudozh_angl_01_under_3mb.jpg",
        "худож англ 10/hudozh_angl_02_under_3mb.jpg"
      ],
      description: "Родословная книга Family Heritage на английском языке. Идеальный подарок для зарубежных партнёров или интернациональных семей.",
      tags: ["English edition", "Международный подарок", "Family Book"],
      occasions: ["vip", "birthday", "family", "wedding"],
      genders: ["universal", "male", "family"]
    },
    {
      id: 18,
      title: "Изысканная на английском",
      price: 7200,
      prestige: 2,
      image: "изыск англ 10/elegant_english_album_01_optimized.jpg",
      images: [
        "изыск англ 10/elegant_english_album_01_optimized.jpg",
        "изыск англ 10/elegant_english_album_02_optimized.jpg"
      ],
      description: "Утончённый английский переплёт для ведения генеалогического древа и сохранения семейной хроники на международном уровне.",
      tags: ["English language", "Элегантный стиль", "Family History"],
      occasions: ["vip", "wedding", "family"],
      genders: ["universal", "female", "family"]
    },
    {
      id: 19,
      title: "Изысканная эко-кожа",
      price: 7200,
      prestige: 2,
      image: "изыск экокожа 7/eco_leather_album_01_optimized.jpg",
      images: [
        "изыск экокожа 7/eco_leather_album_01_optimized.jpg",
        "изыск экокожа 7/eco_leather_album_02_optimized.jpg"
      ],
      description: "Современная благородная эко-кожа с приятной бархатистой фактурой. Практичное, долговечное и эстетичное решение для дома.",
      tags: ["Премиум эко-кожа", "Бархатная фактура", "Современный дизайн"],
      occasions: ["family", "birthday", "wedding"],
      genders: ["female", "universal", "family"]
    }
  ];

  // Состояние фильтров
  const state = {
    priceMin: 5000,
    priceMax: 29000,
    occasion: 'all',     // all | jubilee | wedding | birthday | family | vip | child
    statusRelation: 'higher', // higher | equal | lower
    gender: 'all'        // all | male | female | family
  };

  const PRICE_LIMITS = { min: 5000, max: 29000 };

  // Элементы DOM
  let elements = {};

  function formatPrice(val) {
    return new Intl.NumberFormat('ru-RU').format(val);
  }

  function initElements() {
    elements = {
      priceMinInput: document.getElementById('gwPriceMin'),
      priceMaxInput: document.getElementById('gwPriceMax'),
      rangeMin: document.getElementById('gwRangeMin'),
      rangeMax: document.getElementById('gwRangeMax'),
      rangeProgress: document.getElementById('gwRangeProgress'),
      pricePresets: document.querySelectorAll('.gw-preset-chip'),
      occasionChips: document.querySelectorAll('.gw-choice-chip'),
      statusCards: document.querySelectorAll('.gw-status-card'),
      genderButtons: document.querySelectorAll('.gw-gender-btn'),
      cardsContainer: document.getElementById('gwCardsContainer'),
      resultsCounter: document.getElementById('gwResultsCounter'),
      loyaltyTitle: document.getElementById('gwLoyaltyTitle'),
      loyaltyDesc: document.getElementById('gwLoyaltyDesc'),
      emptyState: document.getElementById('gwEmptyState'),
      btnReset: document.getElementById('gwBtnReset'),
      btnResetEmpty: document.getElementById('gwBtnResetEmpty'),
      btnSubmit: document.getElementById('gwBtnSubmit'),
      btnShare: document.getElementById('gwBtnShare'),
      btnMobileToggle: document.getElementById('gwMobileFilterToggle'),
      filterPanel: document.getElementById('gwFilterPanel'),
      btnFilterCloseMobile: document.getElementById('gwFilterCloseMobile'),
      // Модальное окно
      modalBackdrop: document.getElementById('gwModalBackdrop'),
      modalCloseBtn: document.getElementById('gwModalCloseBtn'),
      modalMainImg: document.getElementById('gwModalMainImg'),
      modalThumbs: document.getElementById('gwModalThumbs'),
      modalTitle: document.getElementById('gwModalTitle'),
      modalPrice: document.getElementById('gwModalPrice'),
      modalDesc: document.getElementById('gwModalDesc'),
      modalFeatures: document.getElementById('gwModalFeatures'),
      modalOrderLink: document.getElementById('gwModalOrderLink'),
      toast: document.getElementById('gwToast')
    };
  }

  // Обновление отображения двойного ползунка цен
  function updateRangeTrack() {
    const minVal = Math.min(state.priceMin, state.priceMax);
    const maxVal = Math.max(state.priceMin, state.priceMax);
    const rangeSpan = PRICE_LIMITS.max - PRICE_LIMITS.min;

    const leftPercent = ((minVal - PRICE_LIMITS.min) / rangeSpan) * 100;
    const rightPercent = 100 - (((maxVal - PRICE_LIMITS.min) / rangeSpan) * 100);

    if (elements.rangeProgress) {
      elements.rangeProgress.style.left = `${leftPercent}%`;
      elements.rangeProgress.style.right = `${rightPercent}%`;
    }

    if (elements.priceMinInput && document.activeElement !== elements.priceMinInput) {
      elements.priceMinInput.value = formatPrice(minVal);
    }
    if (elements.priceMaxInput && document.activeElement !== elements.priceMaxInput) {
      elements.priceMaxInput.value = formatPrice(maxVal);
    }

    if (elements.rangeMin) elements.rangeMin.value = minVal;
    if (elements.rangeMax) elements.rangeMax.value = maxVal;

    // Подсветка активных пресетов
    elements.pricePresets.forEach(chip => {
      const preset = chip.dataset.preset;
      let active = false;
      if (preset === 'all' && minVal === 5000 && maxVal === 29000) active = true;
      if (preset === 'under-10k' && minVal === 5000 && maxVal === 10000) active = true;
      if (preset === '10k-15k' && minVal === 10000 && maxVal === 15000) active = true;
      if (preset === 'premium' && minVal === 20000 && maxVal === 29000) active = true;
      chip.classList.toggle('is-active', active);
    });
  }

  // Алгоритм ранжирования и лояльности по статусу (в соответствии с требованиями на эскизе)
  function calculateRelevance(book) {
    let score = 70;
    let badgeText = "Подходит";
    let isBestMatch = false;

    // 1. Повод
    if (state.occasion !== 'all') {
      if (book.occasions.includes(state.occasion)) {
        score += 18;
      } else {
        score -= 10;
      }
    }

    // 2. Адресат / Пол
    if (state.gender !== 'all') {
      if (book.genders.includes(state.gender) || book.genders.includes('universal')) {
        score += 12;
      } else {
        score -= 14;
      }
    }

    // 3. Статус относительно дарителя
    const priceMidpoint = (state.priceMin + state.priceMax) / 2;
    const priceDistance = Math.abs(book.price - priceMidpoint);

    if (state.statusRelation === 'higher') {
      // Для тех, кто выше по статусу — сначала дорогие и престижные книги
      if (book.prestige >= 3) score += 20;
      if (book.price >= 20000) {
        score += 15;
        badgeText = "Идеально для руководителя";
        isBestMatch = true;
      } else if (book.price >= 9500) {
        score += 8;
        badgeText = "Статусный выбор";
      } else {
        score -= 12;
      }
    } else if (state.statusRelation === 'lower') {
      // Для тех, кто ниже по статусу — сначала приятные, душевные, доступные по бюджету
      if (book.price <= 9500) {
        score += 20;
        badgeText = "Душевный подарок";
        isBestMatch = true;
      } else if (book.price <= 12000) {
        score += 5;
        badgeText = "Оптимальный выбор";
      } else {
        score -= 22; // слишком дорого для подчиненного/младшего
      }
    } else {
      // Равный статус — сбалансированная золотая середина диапазона
      const proximityFactor = Math.max(0, 1 - (priceDistance / 15000));
      score += Math.round(proximityFactor * 22);
      if (book.prestige === 2 || book.prestige === 3) {
        score += 8;
      }
      badgeText = "Золотая середина";
      if (score > 88) isBestMatch = true;
    }

    // Дополнительные тематические бейджи
    if (state.occasion === 'wedding' && book.id === 14) {
      badgeText = "Свадебный бестселлер";
      isBestMatch = true;
    } else if (state.occasion === 'jubilee' && (book.id === 1 || book.id === 2)) {
      badgeText = "Топ-выбор на юбилей";
      isBestMatch = true;
    }

    // Ограничение диапазона отображения процентов
    const displayScore = Math.min(99, Math.max(82, score));

    return {
      score,
      displayScore,
      badgeText,
      isBestMatch
    };
  }

  // Фильтрация и сортировка каталога
  function getFilteredAndSortedBooks() {
    const minP = Math.min(state.priceMin, state.priceMax);
    const maxP = Math.max(state.priceMin, state.priceMax);

    // 1. Фильтрация по строгому ценовому диапазону
    let filtered = CATALOG_BOOKS.filter(book => {
      if (book.price < minP || book.price > maxP) return false;

      // Строгий фильтр пола (если указан мужчина/женщина, исключаем явно противоположные)
      if (state.gender === 'male' && book.genders.length === 1 && book.genders[0] === 'female') return false;
      if (state.gender === 'female' && book.genders.length === 1 && book.genders[0] === 'male') return false;

      return true;
    });

    // Добавляем расчёт соответствия
    const withScores = filtered.map(book => {
      const rel = calculateRelevance(book);
      return {
        ...book,
        ...rel
      };
    });

    // 2. Сортировка по логике статуса из ТЗ:
    // «если выше по статусу то сначало дорогие которые больше подходят по условиям,
    // если ниже то сначало дешовые,
    // если равные хз, те которые примерно в центре диапозрона и больше подходят»
    withScores.sort((a, b) => {
      if (state.statusRelation === 'higher') {
        // Дорогие сначала, при равенстве — по большему совпадению
        if (b.price !== a.price) return b.price - a.price;
        return b.score - a.score;
      } else if (state.statusRelation === 'lower') {
        // Дешёвые сначала, при равенстве — по большему совпадению
        if (a.price !== b.price) return a.price - b.price;
        return b.score - a.score;
      } else {
        // Равный статус — ближе к центру диапазона и максимальный score
        const mid = (minP + maxP) / 2;
        const distA = Math.abs(a.price - mid);
        const distB = Math.abs(b.price - mid);
        if (Math.abs(distA - distB) > 3000) {
          return distA - distB;
        }
        return b.score - a.score;
      }
    });

    return withScores;
  }

  // Отрисовка карточек подарков
  function renderResults() {
    const results = getFilteredAndSortedBooks();

    // Обновляем счётчик
    const count = results.length;
    let word = "книг";
    if (count % 10 === 1 && count % 100 !== 11) word = "книга";
    else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) word = "книги";

    if (elements.resultsCounter) {
      elements.resultsCounter.textContent = `Подобрано: ${count} ${word}`;
    }

    // Обновление текста лояльности
    if (elements.loyaltyTitle && elements.loyaltyDesc) {
      if (state.statusRelation === 'higher') {
        elements.loyaltyTitle.innerHTML = '<i class="fas fa-crown" style="color:#d4af37;"></i> Для руководителя и VIP-персоны:';
        elements.loyaltyDesc.textContent = 'Первыми показаны самые статусные, солидные и дорогие издания в натуральной коже с золотым тиснением.';
      } else if (state.statusRelation === 'lower') {
        elements.loyaltyTitle.innerHTML = '<i class="fas fa-heart" style="color:#d4af37;"></i> Для подчинённого или младшего родственника:';
        elements.loyaltyDesc.textContent = 'Первыми выведены душевные и доступные книги с гармоничным бюджетом без излишнего официоза.';
      } else {
        elements.loyaltyTitle.innerHTML = '<i class="fas fa-handshake" style="color:#d4af37;"></i> Для равного статуса (друг, партнёр, семья):';
        elements.loyaltyDesc.textContent = 'Отобраны популярные бестселлеры из золотой середины выбранного вами ценового диапазона.';
      }
    }

    // Если ничего не найдено в строгих рамках
    if (count === 0) {
      if (elements.cardsContainer) elements.cardsContainer.style.display = 'none';
      if (elements.emptyState) elements.emptyState.style.display = 'block';
      return;
    }

    if (elements.cardsContainer) elements.cardsContainer.style.display = 'grid';
    if (elements.emptyState) elements.emptyState.style.display = 'none';

    // Рендер карточек
    elements.cardsContainer.innerHTML = results.map(book => {
      const bestClass = book.isBestMatch ? 'is-best-match' : '';
      const tagsHtml = book.tags.map(t => `<span class="gw-card-tag">${t}</span>`).join('');

      return `
        <article class="gw-card" data-id="${book.id}">
          <div class="gw-card-match-badge ${bestClass}">
            <i class="fas fa-check-circle"></i>
            <span>${book.displayScore}% соответствие · ${book.badgeText}</span>
          </div>

          <div class="gw-card-media" onclick="window.giftWizardOpenModal(${book.id})">
            <img class="gw-card-img" src="${book.image}" alt="${book.title}" loading="lazy">
            <div class="gw-card-quickview-overlay">
              <span class="gw-btn-quickview-chip"><i class="far fa-eye"></i> Быстрый просмотр</span>
            </div>
          </div>

          <div class="gw-card-body">
            <h3 class="gw-card-title" onclick="window.giftWizardOpenModal(${book.id})">${book.title}</h3>
            <div class="gw-card-price-row">
              <div class="gw-card-price">${formatPrice(book.price)}<span class="gw-card-ruble">₽</span></div>
            </div>
            <p class="gw-card-desc">${book.description}</p>
            <div class="gw-card-tags">${tagsHtml}</div>

            <div class="gw-card-actions">
              <button class="gw-btn-details" type="button" onclick="window.giftWizardOpenModal(${book.id})">
                <i class="far fa-images"></i> Фото и детали
              </button>
              <a class="gw-btn-order" href="./catalog.html?book=${book.id}">
                Заказать <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Модальное окно быстрого просмотра
  window.giftWizardOpenModal = function (bookId) {
    const book = CATALOG_BOOKS.find(b => b.id === bookId);
    if (!book) return;

    if (elements.modalTitle) elements.modalTitle.textContent = book.title;
    if (elements.modalPrice) elements.modalPrice.innerHTML = `${formatPrice(book.price)} <span style="font-size:18px;color:#d4af37;">₽</span>`;
    if (elements.modalDesc) elements.modalDesc.textContent = book.description;

    if (elements.modalMainImg) {
      elements.modalMainImg.src = book.image;
      elements.modalMainImg.alt = book.title;
    }

    if (elements.modalThumbs) {
      elements.modalThumbs.innerHTML = book.images.map((imgSrc, idx) => `
        <img class="gw-modal-thumb ${idx === 0 ? 'is-active' : ''}" src="${imgSrc}" alt="${book.title}" onclick="window.giftWizardSwitchPhoto('${imgSrc}', this)">
      `).join('');
    }

    if (elements.modalFeatures) {
      elements.modalFeatures.innerHTML = book.tags.map(t => `
        <li><i class="fas fa-check"></i> ${t}</li>
      `).join('') + `<li><i class="fas fa-check"></i> Персональное оформление и сертификат подлинности</li>`;
    }

    if (elements.modalOrderLink) {
      elements.modalOrderLink.href = `./catalog.html?book=${book.id}`;
    }

    if (elements.modalBackdrop) {
      elements.modalBackdrop.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.giftWizardSwitchPhoto = function (src, thumbElem) {
    if (elements.modalMainImg) elements.modalMainImg.src = src;
    if (elements.modalThumbs) {
      elements.modalThumbs.querySelectorAll('.gw-modal-thumb').forEach(t => t.classList.remove('is-active'));
      if (thumbElem) thumbElem.classList.add('is-active');
    }
  };

  function closeModal() {
    if (elements.modalBackdrop) {
      elements.modalBackdrop.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  }

  // Toast-уведомление
  function showToast(msg) {
    if (!elements.toast) return;
    elements.toast.querySelector('.gw-toast-text').textContent = msg;
    elements.toast.classList.add('is-shown');
    setTimeout(() => {
      elements.toast.classList.remove('is-shown');
    }, 3200);
  }

  // Сохранение ссылки / Поделиться
  function shareSelection() {
    const params = new URLSearchParams();
    params.set('min', state.priceMin);
    params.set('max', state.priceMax);
    params.set('occasion', state.occasion);
    params.set('status', state.statusRelation);
    params.set('gender', state.gender);

    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("Ссылка на вашу подборку скопирована!");
      }).catch(() => {
        prompt("Скопируйте ссылку на подборку:", shareUrl);
      });
    } else {
      prompt("Скопируйте ссылку на подборку:", shareUrl);
    }
  }

  // Сброс фильтров к исходному состоянию
  function resetFilters() {
    state.priceMin = 5000;
    state.priceMax = 29000;
    state.occasion = 'all';
    state.statusRelation = 'higher';
    state.gender = 'all';

    // Обновляем визуальные элементы
    updateRangeTrack();

    elements.occasionChips.forEach(c => {
      c.classList.toggle('is-active', c.dataset.occasion === 'all');
    });

    elements.statusCards.forEach(c => {
      const radio = c.querySelector('input[type="radio"]');
      const isHigher = c.dataset.status === 'higher';
      c.classList.toggle('is-active', isHigher);
      if (radio) radio.checked = isHigher;
    });

    elements.genderButtons.forEach(b => {
      b.classList.toggle('is-active', b.dataset.gender === 'all');
    });

    renderResults();
  }

  // Загрузка состояния из URL если передан
  function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('min')) {
      const min = parseInt(params.get('min'), 10);
      if (!isNaN(min) && min >= PRICE_LIMITS.min) state.priceMin = min;
    }
    if (params.has('max')) {
      const max = parseInt(params.get('max'), 10);
      if (!isNaN(max) && max <= PRICE_LIMITS.max) state.priceMax = max;
    }
    if (params.has('occasion')) state.occasion = params.get('occasion');
    if (params.has('status')) state.statusRelation = params.get('status');
    if (params.has('gender')) state.gender = params.get('gender');
  }

  // Подключение обработчиков событий
  function attachEvents() {
    // 1. Ползунки
    if (elements.rangeMin) {
      elements.rangeMin.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10);
        if (val > state.priceMax - 1000) val = state.priceMax - 1000;
        state.priceMin = Math.max(PRICE_LIMITS.min, val);
        updateRangeTrack();
        renderResults();
      });
    }

    if (elements.rangeMax) {
      elements.rangeMax.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10);
        if (val < state.priceMin + 1000) val = state.priceMin + 1000;
        state.priceMax = Math.min(PRICE_LIMITS.max, val);
        updateRangeTrack();
        renderResults();
      });
    }

    // 2. Ввод цен вручную
    const parseFormattedNumber = (str) => parseInt(str.replace(/\D/g, ''), 10) || 0;

    if (elements.priceMinInput) {
      elements.priceMinInput.addEventListener('change', (e) => {
        let val = parseFormattedNumber(e.target.value);
        val = Math.max(PRICE_LIMITS.min, Math.min(val, state.priceMax - 500));
        state.priceMin = val;
        updateRangeTrack();
        renderResults();
      });
    }

    if (elements.priceMaxInput) {
      elements.priceMaxInput.addEventListener('change', (e) => {
        let val = parseFormattedNumber(e.target.value);
        val = Math.min(PRICE_LIMITS.max, Math.max(val, state.priceMin + 500));
        state.priceMax = val;
        updateRangeTrack();
        renderResults();
      });
    }

    // 3. Пресеты бюджета
    elements.pricePresets.forEach(chip => {
      chip.addEventListener('click', () => {
        const preset = chip.dataset.preset;
        if (preset === 'all') {
          state.priceMin = 5000;
          state.priceMax = 29000;
        } else if (preset === 'under-10k') {
          state.priceMin = 5000;
          state.priceMax = 10000;
        } else if (preset === '10k-15k') {
          state.priceMin = 10000;
          state.priceMax = 15000;
        } else if (preset === 'premium') {
          state.priceMin = 20000;
          state.priceMax = 29000;
        }
        updateRangeTrack();
        renderResults();
      });
    });

    // 4. Выбор повода
    elements.occasionChips.forEach(chip => {
      chip.addEventListener('click', () => {
        elements.occasionChips.forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        state.occasion = chip.dataset.occasion;
        renderResults();
      });
    });

    // 5. Выбор статуса
    elements.statusCards.forEach(card => {
      card.addEventListener('click', () => {
        elements.statusCards.forEach(c => c.classList.remove('is-active'));
        card.classList.add('is-active');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
        state.statusRelation = card.dataset.status;
        renderResults();
      });
    });

    // 6. Выбор пола / адресата
    elements.genderButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.genderButtons.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        state.gender = btn.dataset.gender;
        renderResults();
      });
    });

    // 7. Кнопки сброса и поделиться
    if (elements.btnReset) elements.btnReset.addEventListener('click', resetFilters);
    if (elements.btnResetEmpty) elements.btnResetEmpty.addEventListener('click', resetFilters);
    if (elements.btnShare) elements.btnShare.addEventListener('click', shareSelection);

    if (elements.btnSubmit) {
      elements.btnSubmit.addEventListener('click', () => {
        renderResults();
        // Плавный скролл к результатам на мобильных устройствах
        if (window.innerWidth <= 860) {
          if (elements.filterPanel) elements.filterPanel.classList.remove('is-open');
          const resultsPanel = document.querySelector('.gift-results-panel');
          if (resultsPanel) {
            resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    }

    // 8. Мобильное сворачивание фильтра
    if (elements.btnMobileToggle) {
      elements.btnMobileToggle.addEventListener('click', () => {
        if (elements.filterPanel) elements.filterPanel.classList.add('is-open');
      });
    }
    if (elements.btnFilterCloseMobile) {
      elements.btnFilterCloseMobile.addEventListener('click', () => {
        if (elements.filterPanel) elements.filterPanel.classList.remove('is-open');
      });
    }

    // 9. Закрытие модального окна
    if (elements.modalCloseBtn) elements.modalCloseBtn.addEventListener('click', closeModal);
    if (elements.modalBackdrop) {
      elements.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.modalBackdrop) closeModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  // Точка входа
  function init() {
    initElements();
    loadStateFromUrl();
    updateRangeTrack();

    // Синхронизация активных классов в UI на основе загруженного состояния
    elements.occasionChips.forEach(c => {
      c.classList.toggle('is-active', c.dataset.occasion === state.occasion);
    });
    elements.statusCards.forEach(c => {
      const isActive = c.dataset.status === state.statusRelation;
      c.classList.toggle('is-active', isActive);
      const radio = c.querySelector('input[type="radio"]');
      if (radio) radio.checked = isActive;
    });
    elements.genderButtons.forEach(b => {
      b.classList.toggle('is-active', b.dataset.gender === state.gender);
    });

    attachEvents();
    renderResults();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

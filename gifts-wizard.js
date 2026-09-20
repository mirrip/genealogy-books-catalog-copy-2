/**
 * GIFTS WIZARD - Интеллектуальный подбор подарка
 * Полная интеграция с базой и стилистикой каталога РодКод
 */

(function () {
  'use strict';

  // Полная база книг из каталога
  const books = [
    {
      id: 1,
      title: "Элитная",
      price: 29000,
      image: "элитная 29/elitnaya_01_under_3mb.jpg",
      description: "Подарите семье реликвию, достойную поколений. Эта книга сохранит историю рода в самом статусном исполнении.",
      occasions: ["jubilee", "vip", "birthday", "family"],
      gender: "male"
    },
    {
      id: 2,
      title: "Элитная с тиснением",
      price: 26500,
      image: "элитная с тен 26/elitnaya_s_ten_01_under_3mb.jpg",
      description: "Подарите историю семьи в тёплом кожаном облике. Эта книга станет дорогой памятью для будущих поколений.",
      occasions: ["jubilee", "vip", "family", "birthday"],
      gender: "universal"
    },
    {
      id: 3,
      title: "Изысканная в оплётке с золочёным древом",
      price: 11200,
      image: "изызканная в оплетке 11/braid_album_01_optimized.jpg",
      description: "Подарите близким книгу, где род оживает золотым древом. Она сохранит память семьи красиво и торжественно.",
      occasions: ["wedding", "jubilee", "family", "birthday"],
      gender: "universal"
    },
    {
      id: 4,
      title: "Изысканная в оплётке",
      price: 10500,
      image: "изызканная в оплетке/izyskannaya_2_01_under_3mb.jpg",
      description: "Подарите семье тёплую родословную книгу с особым характером. В ней оживут имена, истории и поколения.",
      occasions: ["jubilee", "family", "birthday", "vip"],
      gender: "universal"
    },
    {
      id: 5,
      title: "Изысканная",
      price: 9500,
      image: "изысканная 9/izyskannaya_album_01_optimized.jpg",
      description: "Подарите книгу, которая объединит поколения. В ней сохранятся главные семейные имена, события и фотографии.",
      occasions: ["family", "birthday", "jubilee", "wedding"],
      gender: "female"
    },
    {
      id: 6,
      title: "Изысканная «Тройка»",
      price: 9500,
      image: "тройка изыск/troyka_izysk_01_under_3mb.jpg",
      description: "Подарите семье книгу с русским характером. Тройка на обложке подчеркнёт силу, движение и связь поколений.",
      occasions: ["jubilee", "birthday", "vip", "family"],
      gender: "male"
    },
    {
      id: 7,
      title: "Изысканная «Летописец»",
      price: 9500,
      image: "изыск летописец/letopisets_album_01_optimized.jpg",
      description: "Подарите близким книгу, в которой семья напишет собственную историю. Символ мудрости и уважения к предкам.",
      occasions: ["jubilee", "birthday", "vip", "family"],
      gender: "male"
    },
    {
      id: 8,
      title: "Изысканная «Благословение»",
      price: 9500,
      image: "изыск благословие/blessing_album_01_optimized.jpg",
      description: "Подарите книгу, наполненную теплом и родительским благословением. Она сохранит историю рода для будущих поколений.",
      occasions: ["wedding", "child", "family", "jubilee"],
      gender: "female"
    },
    {
      id: 9,
      title: "Семейный альбом",
      price: 5000,
      image: "альбом/album_01_optimized.jpg",
      description: "Подарите семье уютный альбом для самых дорогих лиц и дат. Отличный повод собрать важные фотоснимки вместе.",
      occasions: ["family", "birthday", "child", "wedding"],
      gender: "universal"
    },
    {
      id: 10,
      title: "Художественная бордовая с гербом",
      price: 7200,
      image: "худож герб 7/hudozh_gerb_01_under_3mb.jpg",
      description: "Подарите семье книгу в торжественном бордовом переплёте. Герб подчеркнёт уважение к корням и статус вашего рода.",
      occasions: ["vip", "jubilee", "birthday", "family"],
      gender: "male"
    },
    {
      id: 11,
      title: "Художественная бордовая с древом",
      price: 7200,
      image: "худож древо 7/hudozh_drevo_01_under_3mb.jpg",
      description: "Подарите близким образ цветущего родового древа. Эта книга станет наглядной историей нескольких поколений семьи.",
      occasions: ["family", "jubilee", "wedding", "birthday"],
      gender: "universal"
    },
    {
      id: 12,
      title: "Художественная чёрная с гербом",
      price: 7200,
      image: "худож черн 7/hudozh_chern_01_under_3mb.jpg",
      description: "Подарите сдержанную классику со строгим гербом. Книга для тех, кто ценит лаконичность, солидность и глубину.",
      occasions: ["jubilee", "vip", "birthday"],
      gender: "male"
    },
    {
      id: 13,
      title: "Художественная синяя с гербом",
      price: 7200,
      image: "худож син 7/hudozh_sin_01_under_3mb.jpg",
      description: "Подарите благородную синюю книгу с золотым гербом. Она сохранит важные страницы вашей семейной хроники.",
      occasions: ["jubilee", "vip", "birthday"],
      gender: "male"
    },
    {
      id: 14,
      title: "Художественная «Свадебная с древом»",
      price: 7200,
      image: "худож свадебная 7/hudozh_svadebnaya_01_under_3mb.jpg",
      description: "Подарите молодожёнам красивое начало их общей истории. Книга сохранит день свадьбы и объединит два рода.",
      occasions: ["wedding", "family", "child"],
      gender: "universal"
    },
    {
      id: 15,
      title: "Художественная зелёная с мечетью",
      price: 7200,
      image: "худож мечеть 7/hudozh_mechet_01_under_3mb.jpg",
      description: "Подарите семье книгу с изображением мечети. В ней бережно сохранятся духовные традиции, предки и добрые имена.",
      occasions: ["jubilee", "family", "birthday"],
      gender: "universal"
    },
    {
      id: 16,
      title: "Художественная мусульманская",
      price: 7200,
      image: "худож мусульман 7/hudozh_musulman_01_under_3mb.jpg",
      description: "Подарите родословную книгу в восточной стилистике. Она бережно сохранит шежере семьи на многие поколения вперёд.",
      occasions: ["jubilee", "family", "wedding"],
      gender: "universal"
    },
    {
      id: 17,
      title: "Художественная на английском",
      price: 7200,
      image: "худож англ 10/hudozh_angl_01_under_3mb.jpg",
      description: "Подарите семейную книгу на английском языке. Отличный выбор для интернациональных семей и памяти без границ.",
      occasions: ["vip", "birthday", "family", "wedding"],
      gender: "universal"
    },
    {
      id: 18,
      title: "Изысканная на английском",
      price: 7200,
      image: "изыск англ 10/elegant_english_album_01_optimized.jpg",
      description: "Подарите международное издание родословной книги. Достойный подарок близким за рубежом и память для поколений.",
      occasions: ["vip", "wedding", "family"],
      gender: "universal"
    },
    {
      id: 19,
      title: "Изысканная эко-кожа",
      price: 7200,
      image: "изыск экокожа 7/eco_leather_album_01_optimized.jpg",
      description: "Подарите практичную родословную книгу в современной эко-коже. Прочный и красивый дом для вашей семейной памяти.",
      occasions: ["family", "birthday", "wedding"],
      gender: "female"
    }
  ];

  const PRICE_LIMITS = { min: 5000, max: 29000 };

  // Состояние
  const state = {
    priceMin: 5000,
    priceMax: 29000,
    occasion: 'all',     // all | jubilee | wedding | birthday | family | child
    statusRelation: 'higher', // higher | equal | lower
    gender: 'all'        // all | male | female
  };

  // Избранное из общего хранилища сайта
  let favorites = [];
  try {
    favorites = JSON.parse(localStorage.getItem('rodkod_favorites')) || [];
  } catch (e) {
    favorites = [];
  }

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
  }

  // DOM элементы
  let priceMinInput, priceMaxInput, rangeMin, rangeMax, activeTrack;
  let booksGrid, emptyView, toastElem;

  function initDOMElements() {
    priceMinInput = document.getElementById('giftPriceMin');
    priceMaxInput = document.getElementById('giftPriceMax');
    rangeMin = document.getElementById('giftRangeMin');
    rangeMax = document.getElementById('giftRangeMax');
    activeTrack = document.getElementById('giftSliderActiveTrack');
    booksGrid = document.getElementById('giftBooksGrid');
    emptyView = document.getElementById('giftEmptyView');
    toastElem = document.getElementById('giftToast');
  }

  function updateSliderVisuals() {
    const minVal = Math.min(state.priceMin, state.priceMax);
    const maxVal = Math.max(state.priceMin, state.priceMax);
    const totalSpan = PRICE_LIMITS.max - PRICE_LIMITS.min;

    const leftPct = ((minVal - PRICE_LIMITS.min) / totalSpan) * 100;
    const rightPct = 100 - (((maxVal - PRICE_LIMITS.min) / totalSpan) * 100);

    if (activeTrack) {
      activeTrack.style.left = leftPct + '%';
      activeTrack.style.right = rightPct + '%';
    }

    if (priceMinInput && document.activeElement !== priceMinInput) {
      priceMinInput.value = minVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    if (priceMaxInput && document.activeElement !== priceMaxInput) {
      priceMaxInput.value = maxVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    if (rangeMin) rangeMin.value = minVal;
    if (rangeMax) rangeMax.value = maxVal;
  }

  // Логика подбора и сортировки по условиям из ТЗ
  function getFilteredAndSortedBooks() {
    const minP = Math.min(state.priceMin, state.priceMax);
    const maxP = Math.max(state.priceMin, state.priceMax);

    let list = books.filter(b => {
      // 1. Фильтр по цене
      if (b.price < minP || b.price > maxP) return false;

      // 2. Фильтр по полу
      if (state.gender === 'male' && b.gender === 'female') return false;
      if (state.gender === 'female' && b.gender === 'male') return false;

      return true;
    });

    // Расчёт релевантности поводов
    const occasionMatches = (b) => {
      if (state.occasion === 'all') return 1;
      return b.occasions.includes(state.occasion) ? 2 : 0;
    };

    // Сортировка строго по ТЗ пользователя:
    // «если выше по статусу то сначало дорогие которые больше подходят по условиям,
    // если ниже то сначало дешовые,
    // если равные хз, те которые примерно в центре диапозрона и больше подходят»
    list.sort((a, b) => {
      const occA = occasionMatches(a);
      const occB = occasionMatches(b);

      if (state.statusRelation === 'higher') {
        // Сначала дорогие
        if (b.price !== a.price) return b.price - a.price;
        return occB - occA;
      } else if (state.statusRelation === 'lower') {
        // Сначала дешёвые
        if (a.price !== b.price) return a.price - b.price;
        return occB - occA;
      } else {
        // Равный статус — ближе к центру диапазона
        const mid = (minP + maxP) / 2;
        const distA = Math.abs(a.price - mid);
        const distB = Math.abs(b.price - mid);
        if (Math.abs(distA - distB) > 2500) {
          return distA - distB;
        }
        return occB - occA;
      }
    });

    return list;
  }

  // Отрисовка карточек книг в точности как в catalog.html
  function renderBooks() {
    const list = getFilteredAndSortedBooks();

    if (!booksGrid) return;

    if (list.length === 0) {
      booksGrid.style.display = 'none';
      if (emptyView) emptyView.style.display = 'block';
      return;
    }

    booksGrid.style.display = 'grid';
    if (emptyView) emptyView.style.display = 'none';

    booksGrid.innerHTML = list.map(book => {
      const isLiked = favorites.some(fav => fav.id === book.id);
      const priceDisplay = formatPrice(book.price);

      return `
        <div class="book-card" data-id="${book.id}">
            <div class="book-image-container">
                <img class="book-image" src="${book.image}" alt="${book.title}" loading="lazy">
                <div class="book-like-mobile ${isLiked ? 'liked' : ''}" data-id="${book.id}">
                    <i class="${isLiked ? 'fas' : 'far'} fa-heart"></i>
                </div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <div class="book-price">${priceDisplay}</div>
                <p class="book-description">${book.description}</p>
            </div>
        </div>
      `;
    }).join('');
  }

  // Переключение избранного (полная совместимость с каталогом)
  function toggleFavorite(id) {
    const index = favorites.findIndex(item => item.id === id);
    if (index === -1) {
      const book = books.find(item => item.id === id);
      if (book) favorites.push(book);
    } else {
      favorites.splice(index, 1);
    }
    try {
      localStorage.setItem('rodkod_favorites', JSON.stringify(favorites));
    } catch (e) {}

    // Обновляем сердечко в карточке
    const heart = booksGrid.querySelector(`.book-like-mobile[data-id="${id}"]`);
    if (heart) {
      const isLiked = favorites.some(item => item.id === id);
      heart.classList.toggle('liked', isLiked);
      const icon = heart.querySelector('i');
      if (icon) {
        icon.className = isLiked ? 'fas fa-heart' : 'far fa-heart';
      }
    }
  }

  // Показ уведомления
  function showToast(msg) {
    if (!toastElem) return;
    toastElem.textContent = msg;
    toastElem.classList.add('is-visible');
    setTimeout(() => {
      toastElem.classList.remove('is-visible');
    }, 2800);
  }

  // Сохранить / скопировать подборку
  function saveSelection() {
    const params = new URLSearchParams();
    params.set('min', state.priceMin);
    params.set('max', state.priceMax);
    params.set('occasion', state.occasion);
    params.set('status', state.statusRelation);
    params.set('gender', state.gender);

    const shareUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast("Ссылка на подборку скопирована");
      }).catch(() => {
        prompt("Скопируйте ссылку:", shareUrl);
      });
    } else {
      prompt("Скопируйте ссылку:", shareUrl);
    }
  }

  // Сброс
  function resetAll() {
    state.priceMin = 5000;
    state.priceMax = 29000;
    state.occasion = 'all';
    state.statusRelation = 'higher';
    state.gender = 'all';

    updateSliderVisuals();

    document.querySelectorAll('.gift-option-row').forEach(row => {
      const input = row.querySelector('input[type="radio"]');
      if (!input) return;
      if (input.name === 'giftOccasion') {
        const check = input.value === 'all';
        input.checked = check;
        row.classList.toggle('is-selected', check);
      } else if (input.name === 'giftStatus') {
        const check = input.value === 'higher';
        input.checked = check;
        row.classList.toggle('is-selected', check);
      } else if (input.name === 'giftGender') {
        const check = input.value === 'all';
        input.checked = check;
        row.classList.toggle('is-selected', check);
      }
    });

    renderBooks();
  }

  // Чтение URL параметров при открытии страницы
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

  function syncRadioUI() {
    document.querySelectorAll('.gift-option-row').forEach(row => {
      const input = row.querySelector('input[type="radio"]');
      if (!input) return;
      let check = false;
      if (input.name === 'giftOccasion' && input.value === state.occasion) check = true;
      if (input.name === 'giftStatus' && input.value === state.statusRelation) check = true;
      if (input.name === 'giftGender' && input.value === state.gender) check = true;
      input.checked = check;
      row.classList.toggle('is-selected', check);
    });
  }

  // Привязка событий
  function attachEvents() {
    // 1. Слайдер
    if (rangeMin) {
      rangeMin.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10);
        if (val > state.priceMax - 1000) val = state.priceMax - 1000;
        state.priceMin = Math.max(PRICE_LIMITS.min, val);
        updateSliderVisuals();
        renderBooks();
      });
    }

    if (rangeMax) {
      rangeMax.addEventListener('input', (e) => {
        let val = parseInt(e.target.value, 10);
        if (val < state.priceMin + 1000) val = state.priceMin + 1000;
        state.priceMax = Math.min(PRICE_LIMITS.max, val);
        updateSliderVisuals();
        renderBooks();
      });
    }

    // 2. Ввод цен вручную
    const parseNum = (str) => parseInt(str.replace(/\D/g, ''), 10) || 0;

    if (priceMinInput) {
      priceMinInput.addEventListener('change', (e) => {
        let val = parseNum(e.target.value);
        val = Math.max(PRICE_LIMITS.min, Math.min(val, state.priceMax - 500));
        state.priceMin = val;
        updateSliderVisuals();
        renderBooks();
      });
    }

    if (priceMaxInput) {
      priceMaxInput.addEventListener('change', (e) => {
        let val = parseNum(e.target.value);
        val = Math.min(PRICE_LIMITS.max, Math.max(val, state.priceMin + 500));
        state.priceMax = val;
        updateSliderVisuals();
        renderBooks();
      });
    }

    // 3. Радио-опции (повод, статус, пол)
    document.querySelectorAll('.gift-option-row').forEach(row => {
      row.addEventListener('click', () => {
        const input = row.querySelector('input[type="radio"]');
        if (!input) return;
        input.checked = true;

        const name = input.name;
        document.querySelectorAll(`input[name="${name}"]`).forEach(inp => {
          const parent = inp.closest('.gift-option-row');
          if (parent) parent.classList.toggle('is-selected', inp.checked);
        });

        if (name === 'giftOccasion') state.occasion = input.value;
        if (name === 'giftStatus') state.statusRelation = input.value;
        if (name === 'giftGender') state.gender = input.value;

        renderBooks();
      });
    });

    // 4. Клик по карточке и сердечку
    if (booksGrid) {
      booksGrid.addEventListener('click', (e) => {
        const heartBtn = e.target.closest('.book-like-mobile');
        if (heartBtn) {
          e.stopPropagation();
          const id = parseInt(heartBtn.dataset.id, 10);
          toggleFavorite(id);
          return;
        }

        const card = e.target.closest('.book-card');
        if (card) {
          const id = parseInt(card.dataset.id, 10);
          if (!isNaN(id)) {
            window.location.href = `./catalog.html?book=${id}`;
          }
        }
      });
    }

    // 5. Кнопки сохранения и сброса
    const btnSave = document.getElementById('giftBtnSave');
    if (btnSave) btnSave.addEventListener('click', saveSelection);

    const btnReset = document.getElementById('giftBtnReset');
    if (btnReset) btnReset.addEventListener('click', resetAll);
  }

  function init() {
    initDOMElements();
    loadStateFromUrl();
    syncRadioUI();
    updateSliderVisuals();
    attachEvents();
    renderBooks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

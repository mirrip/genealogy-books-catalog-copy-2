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

  // Интеллектуальные списки книг по поводам и адресатам
  // Каждая комбинация задаёт точный список подходящих книг в порядке релевантности (для «Равного статуса»)
  const CURATED_LISTS = {
    // 1. Рождение ребёнка
    child: {
      all: [14, 8, 9, 3, 11, 2],
      male: [3, 8, 2, 9],
      female: [8, 14, 9, 11, 19]
    },
    // 2. Свадьба, годовщина
    wedding: {
      all: [14, 3, 8, 2, 11, 9, 19, 16, 18],
      male: [3, 2, 14, 5],
      female: [14, 8, 3, 11, 9, 19]
    },
    // 3. Юбилей
    jubilee: {
      all: [1, 2, 3, 10, 4, 13, 7, 11, 15],
      male: [1, 2, 6, 7, 12, 10, 13, 4],
      female: [2, 3, 8, 11, 5, 1]
    },
    // 4. День рождения
    birthday: {
      all: [3, 5, 11, 2, 9, 10, 13, 1],
      male: [6, 7, 12, 13, 4, 1, 10, 2],
      female: [11, 5, 8, 19, 3, 9, 2]
    },
    // 5. Семейная дата
    family: {
      all: [3, 2, 9, 5, 11, 8, 4, 1, 14, 19, 10, 15, 16],
      male: [2, 4, 7, 1, 10, 3],
      female: [8, 11, 9, 3, 5, 2, 19]
    },
    // 6. Все поводы
    all: {
      all: [3, 2, 1, 5, 11, 8, 14, 9, 4, 10, 12, 13, 6, 7, 19, 15, 16, 17, 18],
      male: [1, 2, 6, 7, 12, 10, 13, 4, 3, 5],
      female: [8, 11, 14, 3, 5, 19, 9, 2, 1]
    }
  };

  // Логика подбора и сортировки по условиям
  function getFilteredAndSortedBooks() {
    const minP = Math.min(state.priceMin, state.priceMax);
    const maxP = Math.max(state.priceMin, state.priceMax);

    // Получаем целевой список ID для выбранной комбинации (Повод × Получатель)
    const occasionGroup = CURATED_LISTS[state.occasion] || CURATED_LISTS.all;
    const allowedIds = occasionGroup[state.gender] || occasionGroup.all;

    // 1. Фильтрация по списку ID и диапазону цен
    const list = books.filter(b => {
      if (!allowedIds.includes(b.id)) return false;
      if (b.price < minP || b.price > maxP) return false;
      return true;
    });

    // 2. Сортировка по статусу получателя:
    // «выше по статусу — сначала дорогие,
    // равный по статусу — сначала те, которые лучше всех подходят (по смысловому рейтингу),
    // ниже по статусу — сначала дешёвые»
    list.sort((a, b) => {
      const rankA = allowedIds.indexOf(a.id);
      const rankB = allowedIds.indexOf(b.id);

      if (state.statusRelation === 'higher') {
        // Сначала дорогие, при равенстве цен — по смысловому рейтингу
        if (b.price !== a.price) return b.price - a.price;
        return rankA - rankB;
      } else if (state.statusRelation === 'lower') {
        // Сначала дешёвые, при равенстве цен — по смысловому рейтингу
        if (a.price !== b.price) return a.price - b.price;
        return rankA - rankB;
      } else {
        // Равный статус — строгий порядок экспертного соответствия
        return rankA - rankB;
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
      if (updateSidebarSticky) {
        requestAnimationFrame(updateSidebarSticky);
      }
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

    if (updateSidebarSticky) {
      requestAnimationFrame(updateSidebarSticky);
    }
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

    // 6. Мобильное меню / сайдбар в точности как в каталоге
    const logoBtn = document.getElementById('logoBtn') || document.getElementById('sectionMenuButton');
    const profileSidebar = document.getElementById('profileSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const sidebarProfileBtn = document.getElementById('sidebarProfileBtn');

    if (logoBtn && profileSidebar && sidebarOverlay) {
      logoBtn.addEventListener('click', () => {
        profileSidebar.classList.add('open');
        sidebarOverlay.classList.add('active');
      });
    }
    if (sidebarProfileBtn && profileSidebar && sidebarOverlay) {
      sidebarProfileBtn.addEventListener('click', () => {
        profileSidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
      });
    }
    if (sidebarOverlay && profileSidebar) {
      sidebarOverlay.addEventListener('click', () => {
        profileSidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && profileSidebar && profileSidebar.classList.contains('open')) {
        profileSidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
      }
    });
  }

  // 7. Интеллектуальный двунаправленный sticky-скролл для левой колонки (фильтры)
  let updateSidebarSticky = null;

  function initStickySidebar() {
    const sidebar = document.querySelector('.gift-sidebar');
    const layout = document.querySelector('.gift-layout');
    if (!sidebar || !layout) return;

    let currentY = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const topSpacing = 20;    // отступ сверху при скролле вверх (к блоку Бюджет)
    const bottomSpacing = 24; // отступ снизу при скролле вниз (видны кнопки)

    function updateSidebarPosition() {
      if (window.innerWidth <= 1180) {
        sidebar.style.transform = '';
        currentY = 0;
        lastScrollY = window.scrollY;
        ticking = false;
        return;
      }

      const scrollY = window.scrollY;
      const scrollDiff = scrollY - lastScrollY;
      const windowHeight = window.innerHeight;
      const sidebarHeight = sidebar.offsetHeight;
      const layoutRect = layout.getBoundingClientRect();
      const layoutAbsoluteTop = scrollY + layoutRect.top;
      const maxTranslate = Math.max(0, layout.offsetHeight - sidebarHeight);

      if (scrollDiff > 0) {
        // Скроллим ВНИЗ -> фиксируем сайдбар по низу экрана (видны кнопки Сохранить/Сбросить)
        const desiredY = scrollY + windowHeight - bottomSpacing - layoutAbsoluteTop - sidebarHeight;
        if (desiredY > currentY) {
          currentY = Math.min(desiredY, maxTranslate);
        }
      } else if (scrollDiff < 0) {
        // Скроллим ВВЕРХ -> фиксируем сайдбар по верху экрана (на блоке Бюджет)
        const desiredY = scrollY + topSpacing - layoutAbsoluteTop;
        if (desiredY < currentY) {
          currentY = Math.max(0, desiredY);
        }
      }

      // Если общая высота изменилась при фильтрации
      if (currentY > maxTranslate) {
        currentY = maxTranslate;
      }

      sidebar.style.transform = `translate3d(0, ${currentY}px, 0)`;
      lastScrollY = scrollY;
      ticking = false;
    }

    updateSidebarSticky = updateSidebarPosition;

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(updateSidebarPosition);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateSidebarPosition);
    updateSidebarPosition();
  }

  function init() {
    initDOMElements();
    loadStateFromUrl();
    syncRadioUI();
    updateSliderVisuals();
    attachEvents();
    renderBooks();
    initStickySidebar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

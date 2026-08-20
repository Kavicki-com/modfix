/* =====================================================================
   ModFix — scripts do site
   1) Catálogo de produtos (17 itens do Figma)
   2) Texturas decorativas de quadradinhos
   3) Scroll suave da navegação
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1) PRODUTOS
     ------------------------------------------------------------------ */
  var PRODUCTS = [
    { name: 'Gôndola Central Dupla Face',   desc: 'Acabamento Eletrostático Azul, 5 Prateleiras', code: 'MOD-GC-01', img: '01-gondola-central-dupla-face' },
    { name: 'Balcão Check-out Farmácia',    desc: 'Estrutura em Aço com Cestos Aramados',         code: 'MOD-CF-02', img: '02-balcao-checkout-farmacia' },
    { name: 'Gôndola de Parede',            desc: 'Chapa de Aço Tratado, Testeiras Vermelhas',    code: 'MOD-GP-03', img: '03-gondola-de-parede' },
    { name: 'Gôndola Central Grande',       desc: 'Dupla Face, Alta Capacidade, Azul',            code: 'MOD-GG-04', img: '04-gondola-central-grande' },
    { name: 'Gôndola de Parede Grande',     desc: 'Testeiras Vermelhas, 6 Prateleiras',           code: 'MOD-GP-05', img: '05-gondola-parede-grande' },
    { name: 'Balcão Check-out com Cestos',  desc: 'Estrutura Reforçada, Gavetas Aramadas',        code: 'MOD-BC-06', img: '06-balcao-checkout-cestos' },
    { name: 'Balcão Caixa Expositor',       desc: 'Faixa Amarela, Prateleiras em Grade',          code: 'MOD-CE-07', img: '07-balcao-caixa-expositor' },
    { name: 'Check-out Caixa Premium',      desc: 'MDF com Detalhe Laranja e Monitor',            code: 'MOD-CP-08', img: '08-checkout-caixa-premium' },
    { name: 'Cesto Aramado 3 Níveis',       desc: 'Base Reforçada com Rodízios',                  code: 'MOD-CA-09', img: '09-cesto-aramado-3-niveis', crop: ['13.77%', '0.11%', '72.46%', '111.58%'] },
    { name: 'Expositor Giratório',          desc: 'Três Níveis, Ganchos Rotativos',               code: 'MOD-EG-10', img: '10-expositor-giratorio',    crop: ['15.51%', '6.5%',  '68.99%', '106.24%'] },
    { name: 'Arara Vintage',                desc: 'Acabamento Cobre, Design Retrô',               code: 'MOD-AV-11', img: '11-arara-vintage',          crop: ['16.33%', '8.5%',  '67.33%', '103.69%'] },
    { name: 'Arara Simples',                desc: 'Estrutura Tubular, Pés em T',                  code: 'MOD-AS-12', img: '12-arara-simples' },
    { name: 'Arara Reta',                   desc: 'Regulável, Estrutura Leve',                    code: 'MOD-AR-13', img: '13-arara-reta' },
    { name: 'Arara Dupla com Prateleiras',  desc: 'Dois Níveis, Sapateira Integrada',             code: 'MOD-AD-14', img: '14-arara-dupla-prateleiras' },
    { name: 'Arara em T',                   desc: 'Braços com Ganchos, Pé Central',               code: 'MOD-AT-15', img: '15-arara-em-t' },
    { name: 'Arara Semicircular de Parede', desc: 'Fixação em Painel, Aço Cromado',               code: 'MOD-SP-16', img: '16-arara-semicircular-parede' },
    { name: 'Cesto Aramado',                desc: 'Estrutura em Aço, Rodízios, Uso Versátil',     code: 'MOD-CS-17', img: '17-cesto-aramado', cover: true }
  ];

  function renderProducts() {
    var grid = document.getElementById('products-grid');
    if (!grid) return;

    var frag = document.createDocumentFragment();

    PRODUCTS.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'product-card';

      var media = document.createElement('div');
      media.className = 'product-card__media';
      var img = document.createElement('img');
      img.src = 'assets/img/produtos/' + p.img + '.webp';
      img.alt = p.name;
      img.loading = 'lazy';

      if (p.crop) {
        img.className = 'is-crop';
        img.style.setProperty('--crop-x', p.crop[0]);
        img.style.setProperty('--crop-y', p.crop[1]);
        img.style.setProperty('--crop-w', p.crop[2]);
        img.style.setProperty('--crop-h', p.crop[3]);
      } else if (p.cover) {
        img.className = 'is-cover';
      }

      media.appendChild(img);

      var info = document.createElement('div');
      info.className = 'product-card__info';

      var name = document.createElement('p');
      name.className = 'product-card__name';
      name.textContent = p.name;

      var desc = document.createElement('p');
      desc.className = 'product-card__desc';
      desc.textContent = p.desc;

      var code = document.createElement('p');
      code.className = 'product-card__code';
      code.textContent = 'Código: ' + p.code;

      var price = document.createElement('p');
      price.className = 'product-card__price';
      price.textContent = 'Sob Consulta';

      info.appendChild(name);
      info.appendChild(desc);
      info.appendChild(code);
      info.appendChild(price);

      card.appendChild(media);
      card.appendChild(info);
      frag.appendChild(card);
    });

    grid.appendChild(frag);
  }

  /* ------------------------------------------------------------------
     2) TEXTURAS DE QUADRADINHOS
     Padrão de 5 cores que se repete a cada 4 linhas (igual ao Figma).
     ------------------------------------------------------------------ */
  var PALETTE = [
    ['#f6a800', '#ff7d20', '#0068cf', '#abcbee', '#0049b0'],
    ['#abcbee', '#0068cf', '#f6a800', '#ff7d20', '#0049b0'],
    ['#0049b0', '#abcbee', '#0068cf', '#f6a800', '#ff7d20'],
    ['#ff7d20', '#0049b0', '#abcbee', '#0068cf', '#f6a800']
  ];

  /* Todas as texturas do Figma usam a mesma grade 5 x 9 — muda só a escala. */
  var TEXTURE_SPECS = {
    corner:   { cols: 5, rows: 9 },
    products: { cols: 5, rows: 9 },
    diff:     { cols: 5, rows: 9 }
  };

  function renderTextures() {
    var nodes = document.querySelectorAll('.square-texture');

    Array.prototype.forEach.call(nodes, function (node) {
      var spec = TEXTURE_SPECS[node.getAttribute('data-texture')] || TEXTURE_SPECS.corner;
      var frag = document.createDocumentFragment();

      for (var r = 0; r < spec.rows; r++) {
        for (var c = 0; c < spec.cols; c++) {
          var cell = document.createElement('span');
          cell.style.background = PALETTE[r % 4][c % 5];
          cell.style.display = 'block';
          frag.appendChild(cell);
        }
      }

      node.appendChild(frag);
    });
  }

  /* ------------------------------------------------------------------
     3) SCROLL SUAVE
     ------------------------------------------------------------------ */
  function enableSmoothScroll() {
    document.addEventListener('click', function (e) {
      var link = e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!link) return;

      var id = link.getAttribute('href');
      if (!id || id === '#') return;

      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
  }

  /* ------------------------------------------------------------------
     4) SOMBRA DO HEADER FIXO AO ROLAR
     ------------------------------------------------------------------ */
  function watchStickyHeader() {
    var header = document.querySelector('.header');
    if (!header) return;

    var ticking = false;

    function update() {
      header.classList.toggle('is-stuck', header.getBoundingClientRect().top <= 0);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  /* ------------------------------------------------------------------ */
  function init() {
    renderProducts();
    renderTextures();
    enableSmoothScroll();
    watchStickyHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

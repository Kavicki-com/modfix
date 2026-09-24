/* =====================================================================
   ModFix — scripts do site
   1) Catálogo de produtos (25 itens)
   2) Texturas decorativas de quadradinhos
   3) Scroll suave da navegação
   ===================================================================== */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1) PRODUTOS
     ------------------------------------------------------------------ */
  /* size vazio = "Medida personalizada para o cliente" */
  var PRODUCTS = [
    { name: 'Gôndola Central',              desc: 'Gôndola central em aço com pintura eletrostática a pó', img: '01-gondola-central-dupla-face' },
    { name: 'Balcão Check-out Farmácia',    desc: 'Balcão check-out ponto de venda com cesto para varejo e suporte de monitor. Pintura eletrostática a pó', img: '02-balcao-checkout-farmacia' },
    { name: 'Gôndola de Parede',            desc: 'Gôndola de parede em aço com pintura eletrostática a pó', img: '03-gondola-de-parede' },
    { name: 'Gôndola Central 2 Lances',     desc: 'Gôndola central em aço com pintura eletrostática a pó — 2 lances', img: '04-gondola-central-grande' },
    { name: 'Gôndola de Parede 4 Lances',   desc: 'Gôndola de parede em aço com pintura eletrostática a pó — 4 lances', img: '05-gondola-parede-grande' },
    { name: 'Balcão Caixa 1,30 m',          desc: 'Balcão caixa em aço com pintura eletrostática a pó, com gaveta com chave, cesto para varejo, suporte para monitor e estrutura em tela com ganchos', size: '1,30 × 0,59 × 1,00 × 0,50 m', img: '06-balcao-checkout-cestos' },
    { name: 'Balcão Caixa 0,96 m',          desc: 'Balcão caixa em aço com pintura eletrostática a pó, com gaveta com chave, cesto para varejo, suporte para monitor e estrutura em tela com ganchos', size: '0,96 × 0,59 × 1,00 × 0,50 m', img: '06-balcao-checkout-cestos' },
    { name: 'Balcão Gaveteiro',             desc: 'Balcão gaveteiro para armazenagem de comprimidos cartelados. Pintura eletrostática a pó', size: '1,00 × 0,40 × 1,00 m', img: '07-balcao-caixa-expositor' },
    { name: 'Check-out 1,20 × 0,93 m',      desc: 'Check-out em aço com pintura eletrostática a pó, tampo da pista em aço inox', size: '1,20 × 0,93 × 0,90 m', img: '08-checkout-caixa-premium' },
    { name: 'Check-out 1,20 × 1,08 m',      desc: 'Check-out em aço com pintura eletrostática a pó, tampo da pista em aço inox', size: '1,20 × 1,08 × 0,90 m', img: '08-checkout-caixa-premium' },
    { name: 'Cesto Aramado 3 Níveis',       desc: 'Base Reforçada com Rodízios',          img: '09-cesto-aramado-3-niveis', crop: ['13.77%', '0.11%', '72.46%', '111.58%'] },
    { name: 'Expositor Giratório',          desc: 'Três Níveis, Ganchos Rotativos',       img: '10-expositor-giratorio',    crop: ['15.51%', '6.5%',  '68.99%', '106.24%'] },
    { name: 'Arara Vintage',                desc: 'Design Retrô',                         img: '11-arara-vintage',          crop: ['16.33%', '8.5%',  '67.33%', '103.69%'] },
    { name: 'Arara Simples',                desc: 'Estrutura Tubular, Pés em T',          img: '12-arara-simples' },
    { name: 'Arara Reta',                   desc: 'Regulável, Estrutura Leve',            img: '13-arara-reta' },
    { name: 'Arara Dupla com Prateleiras',  desc: 'Dois Níveis, Sapateira Integrada',     img: '14-arara-dupla-prateleiras' },
    { name: 'Arara em T',                   desc: 'Braços com Ganchos, Pé Central',       img: '15-arara-em-t' },
    { name: 'Arara Semicircular de Parede', desc: 'Fixação em Painel, Aço Cromado',       img: '16-arara-semicircular-parede' },
    { name: 'Cesto Aramado',                desc: 'Estrutura em Aço, Rodízios, Uso Versátil', img: '17-cesto-aramado', cover: true },
    { name: 'Balcão PDV em Alumínio',       desc: 'Balcão PDV em alumínio com 1 gaveta com suporte para teclado', size: '0,60 × 1,03 × 0,40 m', img: '18-balcao-caixa-aluminio' },
    { name: 'Balcão Caixa em MDF',          desc: 'Balcão caixa em MDF com 1 gaveta com porta notas e 1 gaveta com suporte porta teclado', img: '19-balcao-caixa-mdf' },
    { name: 'Balcão Vitrine',               desc: 'Balcão vitrine com estrutura em MDF, frente, tampo e três prateleiras de vidro', img: '20-balcao-vitrine-vidro' },
    { name: 'Balcão PDV em MDF',            desc: 'Balcão PDV em MDF com tampo de vidro serigrafado, gaveta porta notas e 1 prateleira', size: '0,60 × 1,03 × 0,40 m', img: '21-balcao-caixa-mdf-compacto' },
    { name: 'Arara Industrial 2 Níveis',    desc: 'Desmontável', size: '1,96 × 1,20 × 0,45 m', img: '22-arara-industrial-2-niveis' },
    { name: 'Balcão Vitrine Premium',       desc: 'Alumínio e Vidro',                     img: '23-balcao-vitrine-premium' }
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

      var size = document.createElement('p');
      size.className = 'product-card__size';
      size.textContent = p.size || 'Medida personalizada para o cliente';

      var price = document.createElement('p');
      price.className = 'product-card__price';
      price.textContent = 'Sob Consulta';

      info.appendChild(name);
      info.appendChild(desc);
      info.appendChild(size);
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

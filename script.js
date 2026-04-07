'use strict';

/* ----------------------------------------------------------------
   1. PRODUCT DATA
   ---------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 1,
    name: "Men's Ankara T-shirt",
    category: 'tops',
    categoryLabel: 'Tops',
    price: 'Rs 1,200',
    badge: 'New',
    image: 'images/men-tshirt.jpeg',
    description:
      'A contemporary take on the classic Dashiki, cut in breathable woven fabric with a modern relaxed fit. Rich African-inspired block print in terracotta and indigo. Perfect for campus days or casual evenings out.',
    sizes: [
      { value: 'XS', available: false },
      { value: 'S', available: false },
      { value: 'M', available: false },
      { value: 'L', available: false },
      { value: 'XL', available: false },
      { value: 'XXL', available: true },
    ],
    prints: [
      { name: 'Button down Long  Tshirt', image: 'images/men-tshirt.jpeg', available: true },    ],
  },
  {
    id: 2,
    name: 'Wide-Leg Cargo Trousers',
    category: 'bottoms',
    categoryLabel: 'Bottoms',
    price: 'Rs 600',
    badge: 'Bestseller',
    image: 'images/cowrie-palazzo.jpeg',
    description:
      'Unisex statement wide-leg trousers in bold print. High-waist silhouette with an elasticated back for all-day comfort. Pair with a plain tee for effortless contrast.',
    sizes: [{ value: 'L', available: true }],
    prints: [
      { name: 'Cowrie Print',     image: 'images/cowrie-palazzo.jpeg',                available: true, maxQty: 1 },
      { name: 'Red TribalCode',   image: 'images/cargo-redwhite-tribal.jpeg',         available: true, maxQty: 1 },
      { name: 'Blue Swirl',       image: 'images/cargo-blue-swirl-motion.jpeg',       available: true, maxQty: 1 },
      { name: 'OrangePurple Adire', image: 'images/cargo-orangepurple-adire.jpeg',   available: true, maxQty: 1 },
      { name: 'Red Swirl',        image: 'images/cargo-red-swirl-motion.jpeg',        available: true, maxQty: 1 },
      { name: 'BlackWhite XOXO',  image: 'images/cargo-blackandwhite.jpeg',           available: true, maxQty: 1 },
      { name: 'Green XOXO',       image: 'images/cargo-green-xo.jpeg',                available: true, maxQty: 1 },
      { name: 'RedBeige Code',    image: 'images/cargo-redblackcream-symbols.jpeg',   available: true, maxQty: 1 },
      { name: 'Teal Stripes',     image: 'images/cargo-stripes-circle.jpeg',          available: true, maxQty: 1 },
      { name: 'Multicolour Grid', image: 'images/cargo-multicolour-black.jpeg',       available: true, maxQty: 2 }, /* 2 available */
      { name: 'Golden XOXO',      image: 'images/cargo-yellow-brown-xoxo.jpeg',       available: true, maxQty: 1 },
      { name: 'BlackWhite Grid',  image: 'images/cargo-whiteblack-urban.jpeg',        available: true, maxQty: 2 }, /* 2 available */
      { name: 'Blue Geometric',   image: 'images/cargo-blue-cracked.jpeg',            available: true, maxQty: 1 },
      { name: 'Fire Garden',      image: 'images/cargo-dark-yellow-redmix.jpeg',      available: true, maxQty: 2 }, /* 2 available */
      { name: 'Midnight Leaf',    image: 'images/cargo-leaves.jpeg',                  available: true, maxQty: 1 },
      { name: 'BluePink Blocks',  image: 'images/cargo-blue-pink-blocks.jpeg',        available: true, maxQty: 1 },
      { name: 'GreenBlack Orbit', image: 'images/cargo-greenblack-circles.jpeg',      available: true, maxQty: 2 }, /* 2 available */
      { name: 'RedWhite Adire',   image: 'images/cargo-adire.jpeg',                   available: true, maxQty: 1 },
      { name: 'WhiteBlack Swirl', image: 'images/cargo-whiteblack-swirl.jpeg',        available: true, maxQty: 2 }, /* 2 available */
    ],
  },
  {
    id: 3,
    name: 'Wide-Leg Trousers',
    category: 'bottoms',
    categoryLabel: 'Bottoms',
    price: 'Rs 500',
    badge: 'Bestseller',
    image: 'images/rainbow-weed-normal-trousers.jpeg',
    description:
      'Unisex statement wide-leg trousers in bold print. High-waist silhouette with an elasticated back for all-day comfort. Pair with a plain tee for effortless contrast.',
    sizes: [{ value: 'L', available: true }],
    prints: [
      { name: 'Safari Bloom',          image: 'images/rainbow-weed-normal-trousers.jpeg',    available: true, maxQty: 1 },
      { name: 'RedBlack Crimson Pulse', image: 'images/red-balck-normal-trousers.jpeg',        available: true, maxQty: 1 },
      { name: 'Emerald Grid',           image: 'images/normal-trousers-green-brown.jpeg',      available: true, maxQty: 1 },
      { name: 'Fendi Matrix',           image: 'images/fendi-red-white-normaltrousers.jpeg',   available: true, maxQty: 1 },
      { name: 'Royal Fusion',           image: 'images/red-blue-beige-normal-trousers.jpeg',   available: true, maxQty: 2 }, /* 2 available */
      { name: 'Monochrome Dust',        image: 'images/white-black-normal-trousers.jpeg',      available: true, maxQty: 1 },
      { name: 'Green Checkermix',       image: 'images/green-white-normal-trousers.jpeg',      available: true, maxQty: 1 },
    ],
  },
  {
    id: 4,
    name: '2-piece Smokey Trousers Set',
    category: 'sets',
    categoryLabel: 'Sets',
    price: 'Rs 900',
    badge: 'Limited',
    image: 'images/2-piece-smokey trousers.jpeg',
    description:
      'Hand-dyed Adire resist-print in midnight blue and cream. Adjustable wrap waist with a floaty midi hem. Limited run -- only 30 pieces per colourway.',
    sizes: [
      { value: 'XS', available: false },
      { value: 'S', available: false },
      { value: 'M', available: true },
      { value: 'L', available: true },
      { value: 'XL', available: false },
    ],
    prints: [
      { name: 'Cowrie Print', image: 'images/2-piece-smokey trousers.jpeg', available: true },
      { name: 'Teal Eclipse', image: 'images/2-piece trouser set/tealblack.jpeg', available: true },
      { name: 'WhiteRed Rust', image: 'images/2-piece trouser set/whitered-adire.jpeg', available: true },
      { name: 'OrangeBlack Bold', image: 'images/2-piece trouser set/orangeblack.jpeg', available: true },
      { name: 'Cherry Spiral', image: 'images/2-piece trouser set/red-adire.jpeg', available: true },
    ],
  },
  {
    id: 5,
    name: 'Bohemian Earrings',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 'Rs 350',
    badge: null,
    maxQty: 1,  /* accessories: max 1 per order */
    image: 'images/wooden-earrings.jpeg',
    description:
      'Long drop earrings featuring real cowrie shells threaded on gold-tone wire. A symbol of prosperity and fertility across the African continent. Wear your history.',
    colours: [
      { name: 'Bohemian Wooden Dangle Earrings', image: 'images/wooden-earrings.jpeg', available: true },
      { name: 'Medallion WhiteBlack Earrings', image: 'images/blackwhite-earring.jpeg', available: true },
      { name: 'Afro Map Earrings', image: 'images/map-earrings.jpeg', available: true },
      { name: 'Royal Fan Drop Earrings', image: 'images/royal-fan-earring.jpeg', available: true },
      { name: 'Flower Burst Earrings', image: 'images/flower-burst-earring.jpeg', available: true },
      { name: 'Tribal Carved Drop Earrings', image: 'images/carved-disc-earring.jpeg', available: true },
      { name: 'Heritage Shield Drop Earrings', image: 'images/shield-drop-earring.jpeg', available: true },
    ],
  },
  {
    id: 6,
    name: 'Ankara Bomber Jacket',
    category: 'tops',
    categoryLabel: 'Tops',
    price: 'Rs 1,500',
    badge: 'New',
    maxQty: 1,
    image: 'images/ankara-jacket.jpeg',
    description:
      'A satin-lined bomber in vibrant Ankara print with ribbed cuffs and collar. The standout piece for any cultural event or campus appearance.',
    sizes: [
      { value: 'XS', available: false },
      { value: 'S', available: false },
      { value: 'M', available: false },
      { value: 'L', available: false },
      { value: 'XL', available: false },
    ],
    prints: [
      { name: 'Bomber', image: 'images/ankara-jacket.jpeg', available: false },
    ],
  },
  {
    id: 7,
    name: '2-piece Cargo Skirt Set',
    category: 'sets',
    categoryLabel: 'Sets',
    price: 'Rs 700',
    badge: 'Bestseller',
    maxQty: 1,
    image: 'images/2-piece-cargo-skirt.jpeg',
    description:
      'Two-piece set in Mali-inspired Bogolan (mud cloth) print. Oversized crop top + high-waist straight-leg skirt. A full look in one -- just add your cleanest kicks.',
    sizes: [
      { value: '8', available: true },
      { value: '10', available: true },
      { value: '12', available: false },
    ],
    prints: [
      { name: 'OrangeBlack Blocks', image: 'images/2-piece-cargo-skirt.jpeg', available: true },
      { name: 'PinkBlack Fusion', image: 'images/cargoskirt-ii.jpeg', available: true },
      { name: 'Ruby Swirl', image: 'images/cargoskirt-iii.jpeg', available: true },
      { name: 'Multicolour Kente', image: 'images/cargoskirt-iv.jpeg', available: true },
      { name: 'Purple Adire', image: 'images/cargoskirt-v.jpeg', available: true },
      { name: 'Amber Texture', image: 'images/cargoskirt-vi.jpeg', available: true },
    ],
  },
  {
    id: 8,
    name: 'Tribal Beaded Earrings',
    category: 'accessories',
    categoryLabel: 'Accessories',
    price: 'Rs 380',
    badge: null,
    maxQty: 1,  /* accessories: max 1 per order */
    image: 'images/beaded-earrings.jpeg',
    description:
      'Hand-strung beaded earrings inspired by West African Krobo bead traditions. Stack them, mix them, wear them your way.',
    colours: [
      { name: 'White Ivory Beaded Earrings', image: 'images/beaded-earrings/white-long.jpeg', available: true },
      { name: 'Blue Fringe Earrings', image: 'images/beaded-earrings/blue-beaded.jpeg', available: true },
      { name: 'Orange Fringe Earrings', image: 'images/beaded-earrings/orange-beaded.jpeg', available: true },
      { name: 'Red Ruby Earrings', image: 'images/beaded-earrings/red-ruby.jpeg', available: true },
      { name: 'Green Fringe Earrings', image: 'images/beaded-earrings/green-fringe.jpeg', available: true },
      { name: 'Midnight Tassels Earrings', image: 'images/beaded-earrings/black-long.jpeg', available: true },
    ],
  },
  {
    id: 9,
    name: 'Adire Print Long Skirt',
    category: 'bottoms',
    categoryLabel: 'Bottoms',
    price: 'Rs 600',
    badge: null,
    image: 'images/longskirt/purple-adire.jpeg',
    description:
      'Flowy A-line midi skirt in East African Kanga print. Elastic waistband with a pull-on fit. The print features a traditional Swahili proverb border; fashion that speaks.',
    sizes: [
      { value: '8', available: true },
      { value: '10', available: true },
      { value: '12', available: false },
    ],
    prints: [
      { name: 'Purple Adire', image: 'images/longskirt/purple-adire.jpeg', available: true },
      { name: 'Multicolour Kente', image: 'images/longskirt/multicolour kente.jpeg', available: true },
      { name: 'OrangeBlack Blocks', image: 'images/longskirt/orangeblack block.jpeg', available: true },
      { name: 'PinkBlack Fusion', image: 'images/longskirt/pinkblack-fusion.jpeg', available: true },
      { name: 'Ruby Swirl', image: 'images/longskirt/ruby-swirl.jpeg', available: true },
    ],
  },
  {
    id: 10,
    name: 'African Print Kente-Style Shorts',
    category: 'bottoms',
    categoryLabel: 'Bottoms',
    price: 'Rs 500',
    badge: null,
    image: 'images/Shorts.jpeg',
    description:
      'Unisex bold Kente-inspired print shorts with an elasticated waist and relaxed fit. Great for warm days on or off campus.',
    sizes: [
      { value: 'XS', available: false },
      { value: 'S', available: false },
      { value: 'M', available: true },
      { value: 'L', available: true },
      { value: 'XL', available: false },
    ],
    prints: [
      { name: 'Kente Print', image: 'images/Shorts.jpeg', available: true },
      { name: 'Blue Symbols', image: 'images/short-blue-symbols.jpeg', available: true },
      { name: 'Green Waves', image: 'images/short-green-waves.jpeg', available: true },
      { name: 'PinkBlack Fusion', image: 'images/short-pinkblack.jpeg', available: true },
      { name: 'BluePaint Splash', image: 'images/short-paint-splash.jpeg', available: true },
      { name: 'WhiteBlack Tribal', image: 'images/short-whiteblack.jpeg', available: true },
      { name: 'BluePatch Blocks', image: 'images/short-bluepatch.jpeg', available: true },
    ],
  },

  {
    id: 11,
    name: 'Smokey Dress',
    category: 'dresses',
    categoryLabel: 'Dresses',
    price: 'Rs 650',
    badge: 'New',
    image: 'images/dresses/orangepurple.jpeg',
    description: 'A stunning Adire-inspired smokey print dress with a flowing silhouette. Perfect for evenings out or special occasions. Available in one size fits most.',
    sizes: [
      { value: 'S/M', available: true },
      { value: 'L/XL', available: true },
    ],
    prints: [
      { name: 'OrangePurple', image: 'images/dresses/orangepurple.jpeg', available: true, maxQty: 1 },
      { name: 'Purple Stripes', image: 'images/dresses/purplestripes.jpeg', available: true, maxQty: 1 },
      { name: 'Gold Brown', image: 'images/dresses/goldbrown.jpeg', available: true, maxQty: 1 },
      { name: 'RedWhite', image: 'images/dresses/redwhite.jpeg', available: true, maxQty: 1 },
      { name: 'Purple Orange', image: 'images/dresses/purpleorange.jpeg', available: true, maxQty: 1 },
      { name: 'Orange Gold', image: 'images/dresses/orangegold.jpeg', available: true, maxQty: 1 },

    ],
  },
  {
    id: 12,
    name: 'Short Bubu Dress',
    category: 'dresses',
    categoryLabel: 'Dresses',
    price: 'Rs 750',
    badge: null,
    image: 'images/shortbubu/orangeblack.jpeg',
    description: 'A chic short Bubu dress in vibrant African print. Relaxed fit, easy to style. Great for campus days or casual outings.',
    sizes: [
      { value: 'One Size', available: true },
    ],
    prints: [
      { name: 'Bold Print',     image: 'images/shortbubu/orangeblack.jpeg',   available: true, maxQty: 1 },
      { name: 'Blue Ankara',      image: 'images/shortbubu/brownwhite.jpeg',    available: true, maxQty: 1 },
      { name: 'Terracotta Block', image: 'images/shortbubu/yellowblack.jpeg',     available: true, maxQty: 1 },    
    ],
  },
  {
    id: 13,
    name: 'Long Bubu Dress',
    category: 'dresses',
    categoryLabel: 'Dresses',
    price: 'Rs 1200',
    badge: null,
    image: 'images/long-bubu.jpeg',
    description: 'A floor-length Bubu dress in bold African print. Elegant and comfortable — the perfect statement piece for any occasion.',
    sizes: [
      { value: 'One Size', available: true },
    ],
    prints: [
      { name: 'Cowrie Print',     image: 'images/prints/cowrie-print.jpeg',   available: true, maxQty: 2 },
      { name: 'Forest Adire',     image: 'images/prints/forest-adire.jpeg',   available: true, maxQty: 2 },
      { name: 'Indigo Stripe',    image: 'images/prints/indigo-stripe.jpeg',  available: true, maxQty: 1 },
      { name: 'Cream Kanga',      image: 'images/prints/cream-kanga.jpeg',    available: false, maxQty: 1 },
    ],
  },
];

const WA_NUMBER = '23055198497';
const MAX_QTY = 2;

/* ----------------------------------------------------------------
   2. PAGE ROUTING
   ---------------------------------------------------------------- */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));

  const target = document.getElementById('page-' + pageId);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav__link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileNav();
  setupRevealObserver();
}
window.showPage = showPage;

/* ----------------------------------------------------------------
   3. PRODUCT CARD RENDERING
   ---------------------------------------------------------------- */
function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.setAttribute('data-category', product.category);
  card.innerHTML = `
    <div class="product-card__img-wrap">
      <img class="product-card__img" src="${product.image}" alt="${product.name}" loading="lazy" />
      ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
    </div>
    <div class="product-card__body">
      <p class="product-card__category">${product.categoryLabel}</p>
      <h3 class="product-card__name">${product.name}</h3>
      <p class="product-card__price">${product.price}</p>
      <span class="product-card__btn">View Product</span>
    </div>
  `;
  card.addEventListener('click', () => openProduct(product));
  return card;
}

function renderProductGrid(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = '';
  products.forEach((p, i) => {
    const card = createProductCard(p);
    if (i % 4 === 1) card.classList.add('reveal-delay-1');
    if (i % 4 === 2) card.classList.add('reveal-delay-2');
    if (i % 4 === 3) card.classList.add('reveal-delay-3');
    container.appendChild(card);
  });

  setupRevealObserver();
}

renderProductGrid('featured-products', PRODUCTS.slice(0, 4));
renderProductGrid('shop-products', PRODUCTS);

/* ----------------------------------------------------------------
   4. PRODUCT DETAIL PAGE
   ---------------------------------------------------------------- */
let currentProduct = null;
let selectedPrint = null;
let selectedSize = null;
let selectedColour = null;
let currentQty = 1;

function openProduct(product) {
  currentProduct = product;
  selectedPrint = null;
  selectedSize = null;
  selectedColour = null;
  currentQty = 1;

  const mainImg = document.getElementById('product-main-img');
  const category = document.getElementById('product-category');
  const name = document.getElementById('product-name');
  const price = document.getElementById('product-price');
  const desc = document.getElementById('product-desc');
  const qtyDisplay = document.getElementById('qty-display');

  if (mainImg) {
    mainImg.src = product.image;
    mainImg.alt = product.name;
  }
  if (category) category.textContent = product.categoryLabel;
  if (name) name.textContent = product.name;
  if (price) price.textContent = product.price;
  if (desc) desc.textContent = product.description;
  if (qtyDisplay) qtyDisplay.textContent = '1';

  const printLabel = document.getElementById('selected-print-label');
  const sizeLabel = document.getElementById('selected-size-label');
  const colourLabel = document.getElementById('selected-colour-label');
  const printOosMsg = document.getElementById('print-oos-msg');
  const sizeOosMsg = document.getElementById('size-oos-msg');
  const colourOosMsg = document.getElementById('colour-oos-msg');

  if (printLabel) printLabel.textContent = '';
  if (sizeLabel) sizeLabel.textContent = '';
  if (colourLabel) colourLabel.textContent = '';

  if (printOosMsg) printOosMsg.hidden = true;
  if (sizeOosMsg) sizeOosMsg.hidden = true;
  if (colourOosMsg) colourOosMsg.hidden = true;

  setAvailability(true);

  buildThumbnailStrip(product);
  buildPrintSelector(product);
  buildColourSelector(product);
  buildSizeSelector(product);
  updateQtyNote();  /* set correct max qty note for this product */
  updateProductLinks(product.name);

  showPage('product');
}

function buildThumbnailStrip(product) {
  const strip = document.getElementById('product-thumbs');
  if (!strip) return;

  strip.innerHTML = '';

  /* Determine which array to use for thumbnails: prints or colours */
  const thumbSource = (product.prints && product.prints.length > 0)
    ? product.prints
    : (product.colours && product.colours.length > 0)
      ? product.colours
      : null;

  if (!thumbSource) {
    /* No variants — show single main product image */
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'thumb-btn active';
    thumb.innerHTML = `<img src="${product.image}" alt="${product.name}" />`;
    strip.appendChild(thumb);
    return;
  }

  thumbSource.forEach((item, index) => {
    const thumb = document.createElement('button');
    thumb.type = 'button';
    thumb.className = 'thumb-btn';
    thumb.setAttribute('aria-label', item.name);
    thumb.dataset.index = index;
    thumb.innerHTML =
      `<img src="${item.image}" alt="${item.name}" onerror="this.src='${product.image}'" />` +
      (!item.available ? '<span class="thumb-oos-overlay">&#x2715;</span>' : '');

    thumb.addEventListener('click', () => {
      const mainImg = document.getElementById('product-main-img');
      if (mainImg) mainImg.src = item.image;

      strip.querySelectorAll('.thumb-btn').forEach((b) => b.classList.remove('active'));
      thumb.classList.add('active');

      /* Sync print selector if this product uses prints */
      if (product.prints && product.prints.length > 0) {
        syncPrintSelection(index, item);
      }
      /* Sync earring list if this product uses colours */
      if (product.colours && product.colours.length > 0) {
        const listRows = document.querySelectorAll('.earring-list-row');
        listRows.forEach((r) => r.classList.remove('active'));
        if (listRows[index]) listRows[index].click();
      }
    });

    strip.appendChild(thumb);
  });

  /* Auto-activate first available */
  let firstAvail = thumbSource.findIndex((t) => t.available);
  if (firstAvail === -1) firstAvail = 0;

  const thumbBtns = strip.querySelectorAll('.thumb-btn');
  if (thumbBtns[firstAvail]) thumbBtns[firstAvail].classList.add('active');

  const mainImg = document.getElementById('product-main-img');
  if (mainImg) mainImg.src = thumbSource[firstAvail].image;

  /* Only sync print selection here — colour selection is handled by buildColourSelector */
  if (product.prints && product.prints.length > 0) {
    syncPrintSelection(firstAvail, product.prints[firstAvail]);
  }
}

function buildPrintSelector(product) {
  const group = document.getElementById('print-selector-group');
  const options = document.getElementById('print-options');
  const oosMsg = document.getElementById('print-oos-msg');

  if (!group || !options || !oosMsg) return;

  if (!product.prints || product.prints.length === 0) {
    group.hidden = true;
    return;
  }

  group.hidden = false;
  oosMsg.hidden = true;
  options.innerHTML = '';

  product.prints.forEach((print, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'print-swatch-btn' + (!print.available ? ' out-of-stock' : '');
    btn.setAttribute('aria-label', print.name + (!print.available ? ' (Out of Stock)' : ''));
    btn.title = print.name + (!print.available ? ' -- Out of Stock' : '');
    btn.innerHTML =
      `<img src="${print.image}" alt="${print.name}" onerror="this.style.background='#D5C8B5'" />` +
      (!print.available ? '<span class="swatch-oos-x">&#x2715;</span>' : '');

    btn.addEventListener('click', () => {
      const strip = document.getElementById('product-thumbs');
      const thumbs = strip ? strip.querySelectorAll('.thumb-btn') : [];
      thumbs.forEach((b) => b.classList.remove('active'));
      if (thumbs[index]) thumbs[index].classList.add('active');

      const mainImg = document.getElementById('product-main-img');
      if (mainImg) mainImg.src = print.image;

      syncPrintSelection(index, print);
    });

    options.appendChild(btn);
  });
}

function syncPrintSelection(index, print) {
  const options = document.getElementById('print-options');
  const label = document.getElementById('selected-print-label');
  const oosMsg = document.getElementById('print-oos-msg');

  if (options) {
    options.querySelectorAll('.print-swatch-btn').forEach((b, i) => {
      b.classList.toggle('active', i === index);
    });
  }

  selectedPrint = print;
  if (label) label.textContent = '-- ' + print.name;

  if (oosMsg) {
    if (print.available === false) {
      oosMsg.hidden = false;
    } else {
      oosMsg.hidden = true;
    }
  }

  setAvailability(print.available);
  updateQtyNote();  /* refresh max qty note and clamp currentQty for this print */
  updateProductLinks(currentProduct ? currentProduct.name : '');
}

function buildColourSelector(product) {
  const group = document.getElementById('colour-selector-group');
  const options = document.getElementById('colour-options');
  const oosMsg = document.getElementById('colour-oos-msg');

  if (!group || !options || !oosMsg) return;

  if (!product.colours || product.colours.length === 0) {
    group.hidden = true;
    return;
  }

  group.hidden = false;
  oosMsg.hidden = true;

  /* Switch the label to say "Select Style" for earrings */
  const labelEl = group.querySelector('.option-label');
  if (labelEl) {
    /* Preserve the selected-label span inside it */
    const selectedSpan = labelEl.querySelector('.option-selected-label');
    labelEl.textContent = 'Select Style ';
    if (selectedSpan) labelEl.appendChild(selectedSpan);
  }

  /* Build as a list: each row = small image + earring name */
  options.className = 'colour-options colour-options--list';
  options.innerHTML = '';

  product.colours.forEach((colour) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'earring-list-row' + (!colour.available ? ' out-of-stock' : '');

    row.innerHTML =
      /* Thumbnail image */
      '<div class="earring-list-row__img-wrap">' +
        '<img src="' + colour.image + '" alt="' + colour.name + '" ' +
             'onerror="this.src=\'' + product.image + '\'" />' +
        (!colour.available ? '<span class="earring-list-row__oos-x">&#x2715;</span>' : '') +
      '</div>' +
      /* Name + availability tag */
      '<div class="earring-list-row__info">' +
        '<span class="earring-list-row__name">' + colour.name + '</span>' +
        (!colour.available
          ? '<span class="earring-list-row__tag earring-list-row__tag--oos">Out of Stock</span>'
          : '<span class="earring-list-row__tag earring-list-row__tag--avail">Available</span>') +
      '</div>' +
      /* Checkmark shown when selected */
      '<span class="earring-list-row__check" aria-hidden="true">&#10003;</span>';

    row.addEventListener('click', () => {
      /* Deselect all rows */
      options.querySelectorAll('.earring-list-row').forEach((b) => b.classList.remove('active'));
      row.classList.add('active');

      /* Update main product image to this earring's photo */
      const mainImg = document.getElementById('product-main-img');
      if (mainImg) mainImg.src = colour.image;

      /* Update the left thumbnail strip too */
      const strip = document.getElementById('product-thumbs');
      if (strip) {
        strip.querySelectorAll('.thumb-btn').forEach((b) => b.classList.remove('active'));
        /* Find the matching thumb by index */
        const idx = product.colours.indexOf(colour);
        const thumb = strip.querySelectorAll('.thumb-btn')[idx];
        if (thumb) thumb.classList.add('active');
      }

      selectedColour = colour.name;

      const label = document.getElementById('selected-colour-label');
      if (label) label.textContent = '-- ' + colour.name;

      if (oosMsg) {
        oosMsg.hidden = colour.available !== false;
      }

      setAvailability(colour.available);
      updateQtyNote();
      updateProductLinks(currentProduct ? currentProduct.name : '');
    });

    options.appendChild(row);
  });

  /* Auto-select the first available earring */
  const firstAvail = product.colours.findIndex((c) => c.available);
  const allRows = options.querySelectorAll('.earring-list-row');
  if (firstAvail >= 0 && allRows[firstAvail]) {
    allRows[firstAvail].click();
  }
}

function buildSizeSelector(product) {
  const group = document.getElementById('size-selector-group');
  const options = document.getElementById('size-options');
  const oosMsg = document.getElementById('size-oos-msg');

  if (!group || !options || !oosMsg) return;

  if (!product.sizes || product.sizes.length === 0) {
    group.hidden = true;
    return;
  }

  group.hidden = false;
  oosMsg.hidden = true;
  options.innerHTML = '';

  product.sizes.forEach((size) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'size-btn' + (!size.available ? ' out-of-stock' : '');
    btn.textContent = size.value;
    btn.dataset.size = size.value;

    btn.addEventListener('click', () => {
      options.querySelectorAll('.size-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      selectedSize = size.value;

      const label = document.getElementById('selected-size-label');
      if (label) label.textContent = '-- ' + size.value;

      if (oosMsg) {
        if (size.available === false) {
          oosMsg.hidden = false;
        } else {
          oosMsg.hidden = true;
        }
      }

      setAvailability(size.available);
      updateProductLinks(currentProduct ? currentProduct.name : '');
    });

    options.appendChild(btn);
  });

  const firstAvail = product.sizes.findIndex((s) => s.available);
  const allBtns = options.querySelectorAll('.size-btn');
  if (firstAvail >= 0 && allBtns[firstAvail]) {
    allBtns[firstAvail].click();
  }
}

function setAvailability(isAvailable) {
  const badge = document.getElementById('product-availability');
  const text = document.getElementById('avail-text');
  if (!badge || !text) return;

  badge.classList.toggle('unavailable', !isAvailable);
  text.textContent = isAvailable ? 'Available' : 'Out of Stock';
}

/* ----------------------------------------------------------------
   HELPER: getMaxQty()
   Returns the effective max quantity for the current selection:
   - If the product has a product-level maxQty (accessories), use that
   - If the selected print has a maxQty, use that
   - Otherwise fall back to the global MAX_QTY constant
   ---------------------------------------------------------------- */
function getMaxQty() {
  /* Product-level override (e.g. accessories always max 1) */
  if (currentProduct && currentProduct.maxQty !== undefined) {
    return currentProduct.maxQty;
  }
  /* Per-print override */
  if (selectedPrint && selectedPrint.maxQty !== undefined) {
    return selectedPrint.maxQty;
  }
  return MAX_QTY;
}

/* Update the quantity note text to show the correct maximum */
function updateQtyNote() {
  const note = document.querySelector('.qty-max-note');
  if (note) {
    const max = getMaxQty();
    note.textContent = max === 1 ? 'Maximum 1 per item' : 'Maximum ' + max + ' per item';
  }
  /* Also clamp currentQty if it now exceeds the new max */
  if (currentQty > getMaxQty()) {
    currentQty = getMaxQty();
    const display = document.getElementById('qty-display');
    if (display) display.textContent = currentQty;
  }
}
document.getElementById('qty-decrease')?.addEventListener('click', () => {
  if (currentQty > 1) {
    currentQty--;
    const qtyDisplay = document.getElementById('qty-display');
    if (qtyDisplay) qtyDisplay.textContent = currentQty;
    updateProductLinks(currentProduct ? currentProduct.name : '');
  }
});

document.getElementById('qty-increase')?.addEventListener('click', () => {
  if (currentQty < getMaxQty()) {
    currentQty++;
    const qtyDisplay = document.getElementById('qty-display');
    if (qtyDisplay) qtyDisplay.textContent = currentQty;
    updateProductLinks(currentProduct ? currentProduct.name : '');
  } else {
    /* Flash the note to signal the limit */
    const note = document.querySelector('.qty-max-note');
    if (note) {
      note.classList.add('qty-max-flash');
      setTimeout(() => note.classList.remove('qty-max-flash'), 800);
    }
  }
});

function updateProductLinks(productName) {
  const printPart = selectedPrint ? ', Print: ' + selectedPrint.name : '';
  const sizePart = selectedSize ? ', Size: ' + selectedSize : '';
  const colourPart = selectedColour ? ', Colour: ' + selectedColour : '';
  const qtyPart = ' x' + currentQty;

  const orderMsg = encodeURIComponent(
    'Hello, I would like to order:\n' +
      productName +
      printPart +
      sizePart +
      colourPart +
      qtyPart +
      ' from Aso Luxe.'
  );

  const waBtn = document.getElementById('whatsapp-order-btn');
  if (waBtn) {
    waBtn.href = 'https://wa.me/' + WA_NUMBER + '?text=' + orderMsg;
  }

  const shareMessage = encodeURIComponent(
    'Check out this product on Aso Luxe: ' +
      productName +
      printPart +
      sizePart +
      colourPart
  );

  const shareUrl = encodeURIComponent(window.location.href);

  const shareWa = document.getElementById('share-whatsapp');
  if (shareWa) {
    shareWa.href = 'https://wa.me/?text=' + shareMessage + '%20' + shareUrl;
  }

  const shareFb = document.getElementById('share-facebook');
  if (shareFb) {
    shareFb.href = 'https://www.facebook.com/sharer/sharer.php?u=' + shareUrl;
  }

  const shareIg = document.getElementById('share-instagram');
  if (shareIg) {
    shareIg.href =
      'https://www.instagram.com/aso_luxe.mu?igsh=MXJua2h1cGozYmVxbg%3D%3D&utm_source=qr';
  }
}

/* ----------------------------------------------------------------
   5. SHOP FILTER LOGIC
   ---------------------------------------------------------------- */
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.dataset.filter;
    const filtered =
      filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

    renderProductGrid('shop-products', filtered);
  });
});

/* ----------------------------------------------------------------
   6. NAVIGATION
   ---------------------------------------------------------------- */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const siteHeader = document.getElementById('site-header');

function closeMobileNav() {
  navLinks?.classList.remove('open');
  hamburger?.classList.remove('open');
}

hamburger?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
  hamburger?.classList.toggle('open');
});

window.addEventListener(
  'scroll',
  () => {
    siteHeader?.classList.toggle('scrolled', window.scrollY > 20);
  },
  { passive: true }
);

/* ----------------------------------------------------------------
   7. CONTACT FORM
   ---------------------------------------------------------------- */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('c-name')?.value.trim() || '';
  const email = document.getElementById('c-email')?.value.trim() || '';
  const message = document.getElementById('c-message')?.value.trim() || '';

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  /* Stricter email validation:
     - must have @ with non-empty local part
     - domain must have at least one dot
     - TLD must be at least 2 characters (e.g. .com, .mu, .org)
     - rejects things like "you.example.com" (no @) or "user@domain" (no TLD) */
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    alert('Please enter a valid email address (e.g. name@example.com).');
    return;
  }

  console.log('Form submission:', { name, email, message });
  contactForm.reset();

  if (formSuccess) {
    formSuccess.hidden = false;
    setTimeout(() => {
      formSuccess.hidden = true;
    }, 5000);
  }
});

/* ----------------------------------------------------------------
   8. SCROLL REVEAL
   ---------------------------------------------------------------- */
function setupRevealObserver() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealItems.forEach((el) => observer.observe(el));
}

document
  .querySelectorAll(
    '.category-card, .value-card, .campus__text, .campus__image, .brand-story__inner, .about-story__text, .about-story__image'
  )
  .forEach((el) => el.classList.add('reveal'));

setupRevealObserver();

/* ----------------------------------------------------------------
   9. INITIAL PAGE LOAD
   ---------------------------------------------------------------- */
(function init() {
  const hash = window.location.hash.replace('#', '') || 'home';
  const validPages = ['home', 'shop', 'product', 'about', 'contact'];
  showPage(validPages.includes(hash) ? hash : 'home');
})();

/* ----------------------------------------------------------------
   10. DARK MODE
   ---------------------------------------------------------------- */
const darkToggleBtn = document.getElementById('dark-toggle');

function setDarkMode(isDark) {
  document.body.classList.toggle('dark', isDark);
  localStorage.setItem('asoluxe-dark', isDark ? '1' : '0');
}

darkToggleBtn?.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark'));
});

(function initDarkMode() {
  const saved = localStorage.getItem('asoluxe-dark');
  if (saved === '1') {
    setDarkMode(true);
  }
})();

/* ----------------------------------------------------------------
   11. CART SYSTEM
   ---------------------------------------------------------------- */
function loadCart() {
  try {
    return JSON.parse(localStorage.getItem('asoluxe-cart')) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cartArr) {
  localStorage.setItem('asoluxe-cart', JSON.stringify(cartArr));
}

let cart = loadCart();

const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');

function openCart() {
  cartDrawer?.classList.add('open');
  cartOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartDrawer();
}

function closeCart() {
  cartDrawer?.classList.remove('open');
  cartOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

window.closeCart = closeCart;

document.getElementById('cart-btn')?.addEventListener('click', openCart);
cartOverlay?.addEventListener('click', closeCart);
document.getElementById('cart-close')?.addEventListener('click', closeCart);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeCart();
});

function addToCart() {
  if (!currentProduct) return;

  const name = currentProduct.name;
  const price = currentProduct.price;
  const image = document.getElementById('product-main-img')?.src || currentProduct.image;

  const printPart = selectedPrint ? 'Print: ' + selectedPrint.name : '';
  const sizePart = selectedSize ? 'Size: ' + selectedSize : '';
  const colourPart = selectedColour ? 'Colour: ' + selectedColour : '';
  const optionParts = [printPart, sizePart, colourPart].filter(Boolean);
  const optionsStr = optionParts.length ? optionParts.join(', ') : 'One Size';

  const key = name + '__' + optionsStr;
  const existing = cart.find((item) => item.key === key);

  if (existing) {
    existing.qty = Math.min(existing.qty + currentQty, getMaxQty());
  } else {
    cart.push({
      key,
      name,
      price,
      image,
      options: optionsStr,
      qty: currentQty,
      maxQty: getMaxQty(),  /* store per-item max for use in cart drawer */
    });
  }

  saveCart(cart);
  updateCartBadge();

  const addBtn = document.getElementById('add-to-cart-btn');
  if (addBtn) {
    addBtn.textContent = '✓ Added to Cart';
    addBtn.classList.add('btn--added');
    setTimeout(() => {
      addBtn.textContent = 'Add to Cart';
      addBtn.classList.remove('btn--added');
    }, 1500);
  }

  setTimeout(openCart, 400);
}

document.getElementById('add-to-cart-btn')?.addEventListener('click', addToCart);

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (!badge) return;

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  if (totalQty > 0) {
    badge.textContent = totalQty;
    badge.hidden = false;
    badge.classList.remove('badge-animate');
    void badge.offsetWidth;
    badge.classList.add('badge-animate');
  } else {
    badge.hidden = true;
  }
}

updateCartBadge();

function renderCartDrawer() {
  const listEl   = document.getElementById('cart-items-list');
  const emptyEl  = document.getElementById('cart-empty');
  const footerEl = document.getElementById('cart-footer');
  const totalEl  = document.getElementById('cart-total-price');

  if (!listEl || !emptyEl) return;

  if (cart.length === 0) {
    listEl.innerHTML = '';
    emptyEl.hidden = false;   /* just show the empty message — don't move it */
    if (footerEl) footerEl.hidden = true;
    return;
  }

  emptyEl.hidden = true;
  listEl.innerHTML = '';

  cart.forEach((item) => {
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML =
      `<img class="cart-item__img" src="${item.image}" alt="${item.name}" />` +
      `<div class="cart-item__details">` +
        `<p class="cart-item__name">${item.name}</p>` +
        `<p class="cart-item__meta">${item.options}</p>` +
        `<p class="cart-item__price">${item.price}</p>` +
        `<div class="cart-item__controls">` +
          `<button class="qty-btn" data-key="${item.key}" data-action="decrease" aria-label="Decrease" type="button">−</button>` +
          `<span class="qty-value">${item.qty}</span>` +
          `<button class="qty-btn" data-key="${item.key}" data-action="increase" aria-label="Increase" type="button">+</button>` +
          `<button class="cart-item__remove" data-key="${item.key}" type="button">Remove</button>` +
        `</div>` +
      `</div>`;
    listEl.appendChild(row);
  });

  if (footerEl) footerEl.hidden = false;

  const total = cart.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0);
  if (totalEl) totalEl.textContent = 'Rs ' + total.toLocaleString();

  listEl.querySelectorAll('.qty-btn').forEach((btn) => {
    btn.addEventListener('click', () => changeQty(btn.dataset.key, btn.dataset.action));
  });

  listEl.querySelectorAll('.cart-item__remove').forEach((btn) => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
  });
}

function changeQty(key, action) {
  const item = cart.find((i) => i.key === key);
  if (!item) return;

  const itemMax = item.maxQty !== undefined ? item.maxQty : MAX_QTY;

  if (action === 'increase') {
    if (item.qty < itemMax) item.qty++;
  } else if (action === 'decrease') {
    item.qty--;
    if (item.qty <= 0) {
      removeFromCart(key);
      return;
    }
  }

  saveCart(cart);
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(key) {
  cart = cart.filter((i) => i.key !== key);
  saveCart(cart);
  updateCartBadge();
  renderCartDrawer();
}

document.getElementById('cart-clear-btn')?.addEventListener('click', () => {
  cart = [];
  saveCart(cart);
  updateCartBadge();
  renderCartDrawer();
});

function parsePrice(priceStr) {
  return parseInt(String(priceStr).replace(/[^0-9]/g, ''), 10) || 0;
}
/* ================================================================
   CHECKOUT SYSTEM
   Flow:
   1. User clicks Checkout → openCheckout() → page-checkout shown
   2. User picks Pickup or Delivery + area
   3. User clicks "Bank Transfer" → if no shipping chosen, show error
      else show bank details
   4. User uploads receipt → confirm button activates
   5. User clicks confirm → WhatsApp opens with full order details
   ================================================================ */

/* Shipping state */
let coMethod     = null;   /* 'pickup' | 'delivery' */
let coArea       = null;   /* e.g. 'Port Louis' */
let coAreaPrice  = 0;      /* delivery fee in Rs */
let coReceiptFile = null;  /* the uploaded File object */

/**
 * openCheckout()
 * Called when user clicks Checkout in the cart drawer.
 * Populates the order summary and resets the form state.
 */
function openCheckout() {
  /* Don't open if cart is empty */
  if (!cart || cart.length === 0) {
    showPage('shop');
    return;
  }

  /* Reset state */
  coMethod      = null;
  coArea        = null;
  coAreaPrice   = 0;
  coReceiptFile = null;

  /* Uncheck all radios */
  document.querySelectorAll('input[name="co-method"]').forEach(r => r.checked = false);
  document.querySelectorAll('input[name="co-area"]').forEach(r => r.checked = false);

  /* Hide dynamic sections */
  const deliveryAreas = document.getElementById('co-delivery-areas');
  if (deliveryAreas) deliveryAreas.hidden = true;

  const bankDetails = document.getElementById('co-bank-details');
  if (bankDetails) bankDetails.hidden = true;

  const methodError = document.getElementById('co-method-error');
  if (methodError) methodError.hidden = true;

  /* Reset receipt upload */
  const receiptInput = document.getElementById('co-receipt-input');
  if (receiptInput) receiptInput.value = '';
  const uploadText = document.getElementById('co-upload-text');
  if (uploadText) uploadText.textContent = 'Click here to upload payment receipt';
  const uploadSuccess = document.getElementById('co-upload-success');
  if (uploadSuccess) uploadSuccess.hidden = true;
  coReceiptFile = null;
  const confirmBtn = document.getElementById('co-confirm-btn');
  if (confirmBtn) confirmBtn.disabled = true;

  /* Populate order summary */
  renderCheckoutSummary();

  showPage('checkout');
}

/* Expose globally for inline onclick */
window.openCheckout = openCheckout;

/**
 * renderCheckoutSummary()
 * Fills the right-side order summary panel with current cart items.
 */
function renderCheckoutSummary() {
  const itemsEl    = document.getElementById('co-order-items');
  const subtotalEl = document.getElementById('co-subtotal');
  const shippingEl = document.getElementById('co-shipping-display');
  const totalEl    = document.getElementById('co-total');

  if (!itemsEl) return;

  itemsEl.innerHTML = '';

  cart.forEach(item => {
    const row = document.createElement('div');
    row.className = 'co-order-item';
    row.innerHTML =
      `<img class="co-order-item__img" src="${item.image}" alt="${item.name}" />` +
      `<div class="co-order-item__info">` +
        `<p class="co-order-item__name">${item.name}</p>` +
        `<p class="co-order-item__meta">${item.options}</p>` +
        `<p class="co-order-item__qty">Qty: ${item.qty}</p>` +
      `</div>` +
      `<p class="co-order-item__price">${item.price}</p>`;
    itemsEl.appendChild(row);
  });

  const subtotal = cart.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0);
  if (subtotalEl) subtotalEl.textContent = 'Rs ' + subtotal.toLocaleString();
  if (shippingEl) shippingEl.textContent = coMethod ? (coMethod === 'pickup' ? 'Free' : 'Rs ' + coAreaPrice) : '—';
  if (totalEl)    totalEl.textContent    = 'Rs ' + (subtotal + coAreaPrice).toLocaleString();
}

/* ── Shipping method radio listeners ── */

document.getElementById('co-pickup-radio')?.addEventListener('change', () => {
  coMethod     = 'pickup';
  coArea       = 'African Leadership Campus, Kongo 105';
  coAreaPrice  = 0;

  const deliveryAreas = document.getElementById('co-delivery-areas');
  if (deliveryAreas) deliveryAreas.hidden = true;

  /* Clear any area selection */
  document.querySelectorAll('input[name="co-area"]').forEach(r => r.checked = false);

  renderCheckoutSummary();
  hideMethodError();
});

document.getElementById('co-delivery-radio')?.addEventListener('change', () => {
  coMethod    = 'delivery';
  coArea      = null;
  coAreaPrice = 0;

  const deliveryAreas = document.getElementById('co-delivery-areas');
  if (deliveryAreas) deliveryAreas.hidden = false;

  renderCheckoutSummary();
  hideMethodError();
});

/* Delivery area radio listeners */
document.querySelectorAll('input[name="co-area"]').forEach(radio => {
  radio.addEventListener('change', () => {
    coArea      = radio.value;
    coAreaPrice = parseInt(radio.dataset.price, 10) || 0;
    renderCheckoutSummary();
    hideMethodError();
  });
});

function hideMethodError() {
  const el = document.getElementById('co-method-error');
  if (el) el.hidden = true;
}

/* ── Merchant Account button ── */

document.getElementById('co-merchant-btn')?.addEventListener('click', () => {
  /* Validate: must have chosen a method and (if delivery) an area */
  const hasMethod   = coMethod !== null;
  const hasArea     = coMethod === 'pickup' || (coMethod === 'delivery' && coArea !== null);

  if (!hasMethod || !hasArea) {
    const err = document.getElementById('co-method-error');
    if (err) {
      err.textContent = coMethod === 'delivery' && !coArea
        ? 'Please select a delivery area to continue.'
        : 'You must select a shipping method to place your order.';
      err.hidden = false;
    }
    return;
  }

  /* All good — show bank details */
  const bankDetails = document.getElementById('co-bank-details');
  if (bankDetails) bankDetails.hidden = false;

  /* Scroll to bank details smoothly */
  bankDetails?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* ── Receipt upload ── */

document.getElementById('co-receipt-input')?.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  coReceiptFile = file;

  const uploadText    = document.getElementById('co-upload-text');
  const uploadSuccess = document.getElementById('co-upload-success');
  const filenameEl    = document.getElementById('co-upload-filename');
  const confirmBtn    = document.getElementById('co-confirm-btn');

  if (uploadText)    uploadText.textContent = 'Receipt selected ✓';
  if (filenameEl)    filenameEl.textContent = file.name;
  if (uploadSuccess) uploadSuccess.hidden   = false;
  if (confirmBtn)    confirmBtn.disabled    = false;
});

/* File input is triggered naturally by the <label for="co-receipt-input"> HTML attribute.
   No manual click listener needed — adding one causes a double-open on desktop
   and can block the native file picker on mobile browsers. */

/* ── Confirm payment → WhatsApp ── */

document.getElementById('co-confirm-btn')?.addEventListener('click', () => {
  if (!coReceiptFile) return;   /* safety check — button should be disabled */

  const subtotal = cart.reduce((sum, i) => sum + parsePrice(i.price) * i.qty, 0);
  const total    = subtotal + coAreaPrice;

  const itemLines = cart.map(item =>
    `- ${item.name} (${item.options}) x${item.qty} -- ${item.price}`
  ).join('\n');

  const shippingLine = coMethod === 'pickup'
    ? `Shipping: Pickup -- African Leadership Campus, Kongo 105 (Free)`
    : `Shipping: Delivery to ${coArea} -- Rs ${coAreaPrice}`;

  const message =
    `Hello Aso Luxe! I have made payment for my order.\n\n` +
    `ORDER DETAILS:\n${itemLines}\n\n` +
    `${shippingLine}\n` +
    `Subtotal: Rs ${subtotal.toLocaleString()}\n` +
    `Total Paid: Rs ${total.toLocaleString()}\n\n` +
    `Receipt uploaded: ${coReceiptFile.name}\n` +
    `Please confirm my order. Thank you!`;

  window.open(
    'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(message),
    '_blank'
  );

  /* Clear the cart now that the order has been sent */
  cart = [];
  saveCart(cart);
  updateCartBadge();

  /* Send user back to home page after a short delay */
  setTimeout(() => showPage('home'), 500);
});

const whatsappNumber = "5511972480984";

const categories = [
  "Todos",
  "Importados Femininos",
  "Importados Masculinos",
  "Árabes Masculinos",
  "Árabes Femininos"
];

const products = [
  {
    id: 1,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 2,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 3,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 4,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 5,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 6,
    name: "Em Breve",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 7,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 8,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 9,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 10,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 11,
    name: "Carolina Herrera La Bomba",
    volume: "80 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "la.bomba.jpeg",
    tag: "Importado Feminino",
    description: "Aroma leve e marcante",
    featured: true,
    hidden: false,
  },
  {
    id: 12,
    name: "Chanel Chance Eau Tendre",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "chanel.fem.jpeg",
    tag: "Importado Feminino",
    description: "Fragrância Marcante.",
    featured: false,
    hidden: false,
  },
  {
    id: 13,
    name: "Carolina Herrera Good Girl Blush",
    volume: "90 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "good.girl.blush.jpeg",
    tag: "Premium",
    description: "Sofisticado, muito famoso.",
    featured: true,
    hidden: false,
  },
  {
    id: 14,
    name: "Dolce & Gabbana The One EDP",
    volume: "75 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "dolcegabbana.jpeg",
    tag: "Importado Feminino",
    description: "Leve, refrescante e elegante para o dia a dia.",
    featured: true,
    hidden: false,
  },
  {
    id: 15,
    name: "Lancome La Vie Belle Iris Absolut",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "la.vie.jpeg",
    tag: "Importado Feminino",
    description: "Doce, marcante e muito querida entre os femininos.",
    featured: false,
    hidden: false,
  },
  {
    id: 16,
    name: "Versace Bright Crystal Parfum",
    volume: "90 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "versace.fem.jpeg",
    tag: "Importado Feminino",
    description: "Clássico feminino com sensualidade e elegância.",
    featured: false,
    hidden: false,
  },
  {
    id: 17,
    name: "Dolce & Gabbana Light Blue",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "dolce.light.jpeg",
    tag: "Best Seller",
    description: "Perfume leve e sofisticado para momentos especiais.",
    featured: false,
    hidden: false,
  },
  {
    id: 18,
    name: "Chanel Coco Mademoiselle EDP",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "mademoiselle.jpeg",
    tag: "Importado Feminino",
    description: "Aroma moderno, jovem e muito versátil.",
    featured: false,
    hidden: false,
  },
  {
    id: 19,
    name: "Chanel Chance Eau Splendide",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "spledide.jpeg",
    tag: "Premium",
    description: "Presença luxuosa com assinatura elegante.",
    featured: false,
    hidden: false,
  },
  {
    id: 21,
    name: "Lattafa asad",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 226.20,
    priceCard: 286.20,
    image: "asad.jpeg",
    tag: "Árabe Premium",
    description: "Fragrância intensa, sofisticada e muito elogiada, com alta fixação.",
    featured: false,
    hidden: false,
  },
  {
    id: 22,
    name: "Armaf Club De Nuit Intense Man",
    volume: "105 ml",
    category: "Árabes Masculinos",
    pricePix: 291.20,
    priceCard: 351.20,
    image: "de.nuit.man.jpeg",
    tag: "Best Seller Árabe",
    description: "Fragrância intensa e sofisticada, muito comparada ao Creed Aventus.",
    featured: false,
    hidden: false,
  },
  {
    id: 23,
    name: "Lattafa Fakhar Black",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 226.20,
    priceCard: 286.20,
    image: "fakhar.jpeg",
    tag: "Árabe Premium",
    description: "Perfume elegante, fresco e marcante, inspirado no YSL Y.",
    featured: false,
    hidden: false,
  },
  {
    id: 24,
    name: "Afnan 9PM",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 245.70,
    priceCard: 305.70,
    image: "afnan.jpeg",
    tag: "Best Seller Árabe",
    description: "Perfume doce e sedutor com ótima fixação, inspirado no Ultra Male.",
    featured: false,
    hidden: false,
  },
  {
    id: 45,
    name: "Maison Alhambra No.2 Men",
    volume: "80 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "maison.jpeg",
    tag: "Importado Masculino",
    description: "Perfume versátil, fresco e muito agradável.",
    featured: false,
    hidden: false,
  },
  {
    id: 46,
    name: "Maison Alhambra Salvo Elixir",
    volume: "60 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "salvo.jpeg",
    tag: "Clássico",
    description: "Masculino elegante, equilibrado e muito popular.",
    featured: false,
    hidden: false,
  },
  {
    id: 47,
    name: "Maison Alhambra Panther",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "panther.jpeg",
    tag: "Destaque",
    description: "Fragrância intensa, envolvente e cheia de personalidade.",
    featured: false,
    hidden: false,
  },{
    id: 44,
    name: "Rayhaan Nocturno",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "nocturno.jpeg",
    tag: "Luxo",
    description: "Marcante, elegante e noturno.",
    featured: false,
    hidden: false,
  },
  {
    id: 25,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 26,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 27,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 28,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 29,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 30,
    name: "Em Breve",
    volume: "00 ml",
    category: "Árabes Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "em.breve.jpeg",
    tag: "Novidade em Breve",
    description: "Novidade em Breve.",
    featured: false,
    hidden: false,
  },
  {
    id: 31,
    name: "Dior Sauvage Eau de Parfum",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "dior.sauvage.jpeg",
    tag: "Importado Masculino",
    description: "Fragrância de presença forte e elegante.",
    featured: true,
    hidden: false,
  },
  {
    id: 32,
    name: "Animale For Men",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "animale.jpeg",
    tag: "Luxo",
    description: "Sofisticado, refinado e extremamente versátil.",
    featured: false,
    hidden: false,
  },
  {
    id: 33,
    name: "Paco Rabanne One Million Edt",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "paco.rabenne.one.million.jpeg",
    tag: "Importado Masculino",
    description: "Moderno, vibrante e cheio de energia.",
    featured: true,
    hidden: false,
  },
  {
    id: 34,
    name: "Jean Paul Gaultier Le Male Parfum",
    volume: "125 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "jean.paul.jpeg",
    tag: "Importado Masculino",
    description: "Clássico masculino marcante e elegante.",
    featured: false,
    hidden: false,
  },
  {
    id: 35,
    name: "Calvin Klein BE",
    volume: "200 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "calvin.jpeg",
    tag: "Importado Masculino",
    description: "Leve, fresco e perfeito para uso diário.",
    featured: false,
    hidden: false,
  },
  {
    id: 36,
    name: "Ferrari Black",
    volume: "125 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "ferrari.black.jpeg",
    tag: "Importado Masculino",
    description: "Fragrância acessível e muito conhecida.",
    featured: false,
    hidden: false,
  },
  {
    id: 37,
    name: "Prada Paradigme",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "prada.masc.jpeg",
    tag: "Importado Masculino",
    description: "Fresco, sofisticado e muito agradável.",
    featured: false,
    hidden: false,
  },
  {
    id: 38,
    name: "Azzaro Pour Homme",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "azzaro.jpeg",
    tag: "Clássico",
    description: "Masculino clássico com personalidade forte.",
    featured: false,
    hidden: false,
  },
  {
    id: 39,
    name: "Paco Rabanne Phantom",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "phantom.jpeg",
    tag: "Premium",
    description: "Cheiro moderno, luxuoso e sedutor.",
    featured: false,
    hidden: false,
  },
  {
    id: 40,
    name: "Chanel Bleu Parfum",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "chanel.jpeg",
    tag: "Luxo",
    description: "Sofisticação clássica com assinatura forte.",
    featured: false,
    hidden: false,
  },
  {
    id: 41,
    name: "Carolina Herrera CHHC Men",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "chhc.jpeg",
    tag: "Best Seller",
    description: "Perfume marcante, sedutor e muito procurado.",
    featured: false,
    hidden: false,
  },
  {
    id: 42,
    name: "Dior Homme Intense",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "dior.intense.jpeg",
    tag: "Importado Masculino",
    description: "Fragrância moderna com presença forte e elegante.",
    featured: false,
    hidden: false,
  },
  {
    id: 43,
    name: "Rabanne Invictus EDT",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "invictus.jpeg",
    tag: "Premium",
    description: "Aroma sofisticado, refinado e noturno.",
    featured: true,
    hidden: false,
  },
  
  
  {
    id: 48,
    name: "Carolina Herrera 212 Vip Black",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "212.vip.black.jpeg",
    tag: "Premium",
    description: "Cheiro sofisticado, moderno e muito elogiado.",
    featured: true,
    hidden: false,
  },
  {
    id: 51,
    name: "Olympea de Paco Rabanne Eau de Parfum",
    volume: "80 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "olympea.jpeg",
    tag: "Importado Feminino",
    description: "Alto padrão e marca presença.",
    featured: false,
    hidden: false,
  },
  {
    id: 52,
    name: "Good Girl de Carolina Herrera Eau de Parfum",
    volume: "80 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "good.girl.jpeg",
    tag: "Importado Feminino",
    description: "Elegância e frescor.",
    featured: false,
    hidden: false,
  },
  {
    id: 53,
    name: "Scandal de Jean Paul Gaultier Feminino Eau de Parfum",
    volume: "80 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "scandal.jpeg",
    tag: "Importado Feminino",
    description: "Sensualidade e elegância.",
    featured: false,
    hidden: false,
  },
  {
    id: 54,
    name: "La Vie Belle Lancome Eau Parfum",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "la.belle.jpeg",
    tag: "Importado Feminino",
    description: "Clássico feminino.",
    featured: false,
    hidden: false,
  },
  {
    id: 56,
    name: "La Vie Est Belle L'Elixir Lancome",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 765.70,
    priceCard: 825.70,
    image: "l.elixir.jpeg",
    tag: "Importado Feminino",
    description: "Envolvente e cheia de personalidade.",
    featured: true,
    hidden: false,
  },
];

let selectedCategory = "Todos";
let cart = [];

const categoriesContainer = document.getElementById("categories");
const productsGrid = document.getElementById("productsGrid");
const featuredGrid = document.getElementById("featuredGrid");

const gridImportadosMasculinos = document.getElementById("gridImportadosMasculinos");
const gridImportadosFemininos = document.getElementById("gridImportadosFemininos");
const gridArabesMasculinos = document.getElementById("gridArabesMasculinos");
const gridArabesFemininos = document.getElementById("gridArabesFemininos");

const searchInput = document.getElementById("searchInput");

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const floatingCartBtn = document.getElementById("floatingCartBtn");

const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCountTop = document.getElementById("cartCountTop");
const cartCountFloat = document.getElementById("cartCountFloat");
const checkoutBtn = document.getElementById("checkoutBtn");

const customerName = document.getElementById("customerName");
const customerPhone = document.getElementById("customerPhone");
const customerAddress = document.getElementById("customerAddress");
const customerComplement = document.getElementById("customerComplement");
const customerDistrict = document.getElementById("customerDistrict");
const customerCity = document.getElementById("customerCity");
const customerCep = document.getElementById("customerCep");
const paymentMethod = document.getElementById("paymentMethod");

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

function formatPrice(value) {
  return Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function getProductPrice(product) {
  return product.pricePix ?? product.price ?? 0;
}

function createProductCard(product) {
  const pixPrice = product.pricePix ?? product.price ?? 0;
  const cardPrice = product.priceCard ?? product.price ?? 0;

  const priceHtml =
    product.pricePix && product.priceCard
      ? `
        <div class="product-price-box">
          <strong class="pix">${formatPrice(pixPrice)} PIX</strong>
          <span class="card">${formatPrice(cardPrice)} 5x s/ juros</span>
        </div>
      `
      : `
        <span class="product-price">${formatPrice(product.price ?? 0)}</span>
      `;

  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-tag">${product.tag}</span>
      </div>

      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-volume">${product.volume}</p>
        <p class="product-description">${product.description}</p>

        <div class="product-bottom">
          ${priceHtml}
          <button class="add-cart-btn" data-id="${product.id}">Adicionar</button>
        </div>
      </div>
    </article>
  `;
}

function bindAddToCartButtons(scope = document) {
  scope.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.id));
    });
  });
}

function renderCategories() {
  categoriesContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.textContent = category;

    if (category === selectedCategory) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      selectedCategory = category;
      renderCategories();
      renderProducts();
    });

    categoriesContainer.appendChild(button);
  });
}

function renderProducts() {
  const term = searchInput.value.toLowerCase().trim();

  const filtered = products.filter((product) => {
    if (product.hidden) return false;

    const categoryMatch =
      selectedCategory === "Todos" || product.category === selectedCategory;

    const searchMatch =
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term);

    return categoryMatch && searchMatch;
  });

  productsGrid.innerHTML = filtered.length
    ? filtered.map(createProductCard).join("")
    : `<p style="color:#bdbdbd;font-size:18px;">Nenhum perfume encontrado.</p>`;

  bindAddToCartButtons(productsGrid);
}

function renderStaticSections() {
  const featured = products.filter((item) => item.featured && !item.hidden).slice(0, 8);
  featuredGrid.innerHTML = featured.map(createProductCard).join("");

  gridImportadosMasculinos.innerHTML = products
    .filter((item) => item.category === "Importados Masculinos" && !item.hidden)
    .slice(0, 18)
    .map(createProductCard)
    .join("");

  gridImportadosFemininos.innerHTML = products
    .filter((item) => item.category === "Importados Femininos" && !item.hidden)
    .slice(0, 20)
    .map(createProductCard)
    .join("");

  gridArabesMasculinos.innerHTML = products
    .filter((item) => item.category === "Árabes Masculinos" && !item.hidden)
    .slice(0, 8)
    .map(createProductCard)
    .join("");

  gridArabesFemininos.innerHTML = products
    .filter((item) => item.category === "Árabes Femininos" && !item.hidden)
    .slice(0, 8)
    .map(createProductCard)
    .join("");

  bindAddToCartButtons(featuredGrid);
  bindAddToCartButtons(gridImportadosMasculinos);
  bindAddToCartButtons(gridImportadosFemininos);
  bindAddToCartButtons(gridArabesMasculinos);
  bindAddToCartButtons(gridArabesFemininos);
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (!product) return;

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

function increaseItem(productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.quantity += 1;
  renderCart();
}

function decreaseItem(productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cart = cart.filter((cartItem) => cartItem.id !== productId);
  }

  renderCart();
}

function buildWhatsAppMessage(total) {
  const payment = paymentMethod.value || "Pix";

  const orderLines = cart
    .map(
      (item) =>
        `Produto: * ${item.name} (${item.quantity}x) — ${formatPrice(getProductPrice(item) * item.quantity)}`
    )
    .join("\n");

  return ` Pedido Realizado

${orderLines}

Total: ${formatPrice(total)}

Dados do Cliente
Nome: ${customerName.value || "-"}
Telefone: ${customerPhone.value || "-"}
Endereço: ${customerAddress.value || "-"}
Bairro: ${customerDistrict.value || "-"}
Cidade: ${customerCity.value || "-"}
CEP: ${customerCep.value || "-"}

Pagamento: ${payment}

Prazo de Entrega: 3 a 5 dias após a confirmação do pagamento.

Confirmação do Pedido:
Para confirmar o pedido, é necessário o pagamento de no mínimo 50% do valor antecipado via Pix ou cartão de crédito em até 5x s/ Juros.

Após a confirmação do pagamento, seu perfume será reservado e encomendado exclusivamente para você.

Pedimos que, após o pagamento, envie o comprovante neste WhatsApp para confirmação do pedido. O valor restante poderá ser pago na entrega do produto.

Agradecemos pela preferência! 

Rodrigues Perfums`;
}

function updateCheckoutLink() {
  const total = cart.reduce((sum, item) => sum + getProductPrice(item) * item.quantity, 0);

  if (!cart.length) {
    checkoutBtn.href = `https://wa.me/${whatsappNumber}`;
    return;
  }

  const message = buildWhatsAppMessage(total);
  checkoutBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderCart() {
  cartItems.innerHTML = "";

  if (!cart.length) {
    cartItems.innerHTML = `<p class="empty-cart">Nenhum item adicionado ainda.</p>`;
    cartTotal.textContent = formatPrice(0);
    cartCountTop.textContent = "0";
    cartCountFloat.textContent = "0";
    updateCheckoutLink();
    return;
  }

  let total = 0;
  let quantity = 0;

  cart.forEach((item) => {
    const itemPrice = getProductPrice(item);

    total += itemPrice * item.quantity;
    quantity += item.quantity;

    const card = document.createElement("div");
    card.className = "cart-item";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.volume}</p>
        <p>${formatPrice(itemPrice)}</p>

        <div class="quantity-controls">
          <button class="decrease-btn" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase-btn" data-id="${item.id}">+</button>
        </div>
      </div>
    `;

    cartItems.appendChild(card);
  });

  cartTotal.textContent = formatPrice(total);
  cartCountTop.textContent = String(quantity);
  cartCountFloat.textContent = String(quantity);

  updateCheckoutLink();

  document.querySelectorAll(".increase-btn").forEach((button) => {
    button.addEventListener("click", () => {
      increaseItem(Number(button.dataset.id));
    });
  });

  document.querySelectorAll(".decrease-btn").forEach((button) => {
    button.addEventListener("click", () => {
      decreaseItem(Number(button.dataset.id));
    });
  });
}

function openCart() {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
}

function closeCart() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
}

function verificarCampos() {
  const nome = customerName.value.trim();
  const telefone = customerPhone.value.trim();
  const endereco = customerAddress.value.trim();
  const bairro = customerDistrict.value.trim();
  const cidade = customerCity.value.trim();
  const cep = customerCep.value.trim();

  if (!nome || !telefone || !endereco || !bairro || !cidade || !cep) {
    alert("Preencha todos os campos antes de finalizar o pedido.");
    return false;
  }

  return true;
}

searchInput.addEventListener("input", renderProducts);

openCartBtn.addEventListener("click", openCart);
floatingCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

menuToggle.addEventListener("click", toggleMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

[
  customerName,
  customerPhone,
  customerAddress,
  customerComplement,
  customerDistrict,
  customerCity,
  customerCep,
  paymentMethod
].forEach((field) => {
  field.addEventListener("input", updateCheckoutLink);
  field.addEventListener("change", updateCheckoutLink);
});

checkoutBtn.addEventListener("click", function (e) {
  if (!verificarCampos()) {
    e.preventDefault();
  }
});

renderCategories();
renderProducts();
renderStaticSections();
renderCart();
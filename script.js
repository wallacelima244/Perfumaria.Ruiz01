const whatsappNumber = "5511972480984";

const categories = [
  "Todos",
  "Importados Femininos",
  "Importados Masculinos",
  "Árabes Femininos",
  "Árabes Masculinos"
];

const products = [
  {
    id: 1,
    name: "Lattafa Yara Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 189.0,
    image: "img/perfume-1.jpg",
    tag: "Árabe Feminino",
    description: "Fragrância doce e elegante com toque moderno e envolvente.",
    featured: true
  },
  {
    id: 2,
    name: "Lattafa Fakhar Rose Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 199.0,
    image: "img/perfume-2.jpg",
    tag: "Árabe Feminino",
    description: "Aroma floral sofisticado com identidade marcante.",
    featured: false
  },
  {
    id: 3,
    name: "Lattafa Yara Moi Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 209.0,
    image: "img/perfume-3.jpg",
    tag: "Árabe Feminino",
    description: "Perfume cremoso, refinado e cheio de presença.",
    featured: false
  },
  {
    id: 4,
    name: "Lattafa Badee Al Oud Amethyst",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 229.0,
    image: "img/perfume-4.jpg",
    tag: "Luxo Árabe",
    description: "Fragrância intensa, exótica e de alta fixação.",
    featured: true
  },
  {
    id: 5,
    name: "Lattafa Victoria Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 189.0,
    image: "img/perfume-5.jpg",
    tag: "Árabe Feminino",
    description: "Aroma elegante para mulheres que gostam de sofisticação.",
    featured: false
  },
  {
    id: 6,
    name: "Lattafa Tharwah Gold Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 239.0,
    image: "img/perfume-6.jpg",
    tag: "Destaque",
    description: "Toque luxuoso com presença forte e refinada.",
    featured: false
  },
  {
    id: 7,
    name: "Lattafa Petra Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 199.0,
    image: "img/perfume-7.jpg",
    tag: "Árabe Feminino",
    description: "Fragrância delicada e marcante ao mesmo tempo.",
    featured: false
  },
  {
    id: 8,
    name: "Lattafa Afeef Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 209.0,
    image: "img/perfume-8.jpg",
    tag: "Árabe Feminino",
    description: "Elegância oriental com acabamento luxuoso.",
    featured: false
  },
  {
    id: 9,
    name: "Lattafa The Kingdom Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 219.0,
    image: "img/perfume-9.jpg",
    tag: "Premium",
    description: "Fragrância de personalidade forte e sofisticada.",
    featured: false
  },
  {
    id: 10,
    name: "Lattafa Habik For Women Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Femininos",
    price: 199.0,
    image: "img/perfume-10.jpg",
    tag: "Árabe Feminino",
    description: "Aroma feminino refinado, envolvente e moderno.",
    featured: false
  },
  {
    id: 11,
    name: "Lancôme La Vie Est Belle Eau de Parfum",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 429.0,
    image: "img/perfume-11.jpg",
    tag: "Importado Feminino",
    description: "Doce elegante com baunilha e íris, muito popular.",
    featured: true
  },
  {
    id: 12,
    name: "Carolina Herrera 212 VIP Black",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 518.70,
    image: "212.vip.black.jpeg",
    tag: "Importado Masculino",
    description: "Fragrância Marcante.",
    featured: false
  },
  {
    id: 13,
    name: "Dior J’adore Eau de Parfum",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 459.0,
    image: "img/perfume-13.jpg",
    tag: "Premium",
    description: "Floral sofisticado muito famoso.",
    featured: true
  },
  {
    id: 14,
    name: "Dolce & Gabbana Light Blue Pour Femme",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 399.0,
    image: "img/perfume-14.jpg",
    tag: "Importado Feminino",
    description: "Leve, refrescante e elegante para o dia a dia.",
    featured: false
  },
  {
    id: 15,
    name: "Britney Spears Fantasy Eau de Parfum",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 279.0,
    image: "img/perfume-15.jpg",
    tag: "Importado Feminino",
    description: "Doce, marcante e muito querida entre os femininos.",
    featured: false
  },
  {
    id: 16,
    name: "Jean Paul Gaultier Classique Eau de Toilette",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 419.0,
    image: "img/perfume-16.jpg",
    tag: "Importado Feminino",
    description: "Clássico feminino com sensualidade e elegância.",
    featured: false
  },
  {
    id: 17,
    name: "Carolina Herrera Good Girl Eau de Parfum",
    volume: "80 ml",
    category: "Importados Femininos",
    price: 449.0,
    image: "img/perfume-17.jpg",
    tag: "Best Seller",
    description: "Perfume intenso e sofisticado para momentos especiais.",
    featured: true
  },
  {
    id: 18,
    name: "Calvin Klein CK IN2U For Her",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 299.0,
    image: "img/perfume-18.jpg",
    tag: "Importado Feminino",
    description: "Aroma moderno, jovem e muito versátil.",
    featured: false
  },
  {
    id: 19,
    name: "Valentino Donna Born in Roma",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 469.0,
    image: "img/perfume-19.jpg",
    tag: "Premium",
    description: "Presença luxuosa com assinatura elegante.",
    featured: false
  },
  {
    id: 20,
    name: "Chanel Chance Eau Tendre",
    volume: "100 ml",
    category: "Importados Femininos",
    price: 489.0,
    image: "img/perfume-20.jpg",
    tag: "Luxo",
    description: "Fragrância refinada, delicada e sofisticada.",
    featured: false
  },
  {
    id: 21,
    name: "Lattafa Asad Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 209.0,
    image: "img/perfume-21.jpg",
    tag: "Árabe Masculino",
    description: "Fragrância quente, intensa e poderosa.",
    featured: true
  },
  {
    id: 22,
    name: "Armaf Club de Nuit Intense Man",
    volume: "105 ml",
    category: "Árabes Masculinos",
    price: 299.0,
    image: "img/perfume-22.jpg",
    tag: "Árabe Masculino",
    description: "Aroma marcante com muita presença e fixação.",
    featured: true
  },
  {
    id: 23,
    name: "Afnan 9PM Eau de Parfum",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 289.0,
    image: "img/perfume-23.jpg",
    tag: "Árabe Masculino",
    description: "Perfume envolvente e impactante para noites especiais.",
    featured: false
  },
  {
    id: 24,
    name: "Lattafa Fakhar Black",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 219.0,
    image: "img/perfume-24.jpg",
    tag: "Árabe Masculino",
    description: "Cheiro sofisticado, elegante e de forte projeção.",
    featured: false
  },
  {
    id: 25,
    name: "Lattafa Qaed Al Fursan",
    volume: "90 ml",
    category: "Árabes Masculinos",
    price: 199.0,
    image: "img/perfume-25.jpg",
    tag: "Árabe Masculino",
    description: "Aroma exótico com personalidade e luxo.",
    featured: false
  },
  {
    id: 26,
    name: "Lattafa Badee Al Oud Oud for Glory",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 239.0,
    image: "img/perfume-26.jpg",
    tag: "Luxo Árabe",
    description: "Intenso, nobre e muito marcante.",
    featured: false
  },
  {
    id: 27,
    name: "Lattafa Khamrah",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 249.0,
    image: "img/perfume-27.jpg",
    tag: "Best Seller",
    description: "Quente, doce e sofisticado com ótima fixação.",
    featured: false
  },
  {
    id: 28,
    name: "Lattafa Ameer Al Oudh Intense Oud",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 229.0,
    image: "img/perfume-28.jpg",
    tag: "Árabe Masculino",
    description: "Perfume de presença forte e assinatura luxuosa.",
    featured: false
  },
  {
    id: 29,
    name: "Lattafa Maahir Legacy",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 239.0,
    image: "img/perfume-29.jpg",
    tag: "Árabe Masculino",
    description: "Fresco, refinado e muito elegante.",
    featured: false
  },
  {
    id: 30,
    name: "Lattafa Al Nashama Caprice",
    volume: "100 ml",
    category: "Árabes Masculinos",
    price: 249.0,
    image: "img/perfume-30.jpg",
    tag: "Premium",
    description: "Aroma sofisticado com projeção e personalidade.",
    featured: false
  },
  {
    id: 31,
    name: "Dior Sauvage Eau de Parfum",
    volume: "100 ml",
    category: "Importados Masculinos",
    price: 713.70,
    image: "dior.sauvage.jpeg",
    tag: "Importado Masculino",
    description: "Fragrância de presença forte e elegante.",
    featured: true
  },
  {
    id: 32,
    name: "Animale For Men ",
    volume: "100 ml",
    category: "Importados Masculinos",
    price: 253.50,
    image: "animale.jpeg",
    tag: "Luxo",
    description: "Sofisticado, refinado e extremamente versátil.",
    featured: true
  },
  {
    id: 33,
    name: "Paco Rabanne One Million Edt",
    volume: "100 ml",
    category: "Importados Masculinos",
    price: 492.70,
    image: "paco.rabenne.one.million.jpeg",
    tag: "Importado Masculino",
    description: "Moderno, vibrante e cheio de energia.",
    featured: false
  },
  {
    id: 34,
    name: "Jean Paul Gaultier Le Male Parfum",
    volume: "125 ml",
    category: "Importados Masculinos",
    price: 648.70,
    image: "jean.paul.jpeg",
    tag: "Importado Masculino",
    description: "Clássico masculino marcante e elegante.",
    featured: false
  },
  {
    id: 35,
    name: "Calvin Klein BE",
    volume: "200 ml",
    category: "Importados Masculinos",
    price:336.70,
    image: "calvin.jpeg",
    tag: "Importado Masculino",
    description: "Leve, fresco e perfeito para uso diário.",
    featured: false
  },
  {
    id: 36,
    name: "Ferrari Black ",
    volume: "125 ml",
    category: "Importados Masculinos",
    price: 253.50,
    image: "ferrari.black.jpeg",
    tag: "Importado Masculino",
    description: "Fragrância acessível e muito conhecida.",
    featured: false
  },
  {
    id: 37,
    name: "Prada Paradigme",
    volume: "100 ml",
    category: "Importados Masculinos",
    price: 882.70,
    image: "prada.masc.jpeg",
    tag: "Importado Masculino",
    description: "Fresco, sofisticado e muito agradável.",
    featured: false
  },
  {
    id: 38,
    name: "Azzaro Pour Homme",
    volume: "100 ml",
    category: "Importados Masculinos",
    price:317.20,
    image: "azzaro.jpeg",
    tag: "Clássico",
    description: "Masculino clássico com personalidade forte.",
    featured: false
  },
  {
    id: 39,
    name: "Paco Rabanne Phantom",
    volume: "100 ml",
    category: "Importados Masculinos",
    price: 570.70,
    image: "phantom.jpeg",
    tag: "Premium",
    description: "Cheiro moderno, luxuoso e sedutor.",
    featured: false
  },
  {
    id: 40,
    name: "Chanel Bleu Parfum",
    volume: "100 ml",
    category: "Importados Masculinos",
    price: 1415.70,
    image: "chanel.jpeg",
    tag: "Luxo",
    description: "Sofisticação clássica com assinatura forte.",
    featured: false
    },
    {
  id: 41,
  name: "Carolina Herrera CHHC Men",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 531.70,
  image: "chhc.jpeg",
  tag: "Best Seller",
  description: "Perfume marcante, sedutor e muito procurado.",
  featured: true
},
{
  id: 42,
  name: "Dior Homme Intense ",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 921.70,
  image: "dior.intense.jpeg",
  tag: "Importado Masculino",
  description: "Fragrância moderna com presença forte e elegante.",
  featured: false
},
{
  id: 43,
  name: "Rabanne Invictus EDT ",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 492.70,
  image: "invictus.jpeg",
  tag: "Premium",
  description: "Aroma sofisticado, refinado e noturno.",
  featured: false
},
{
  id: 44,
  name: "Rayhaan Nocturno",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 284.70,
  image: "nocturno.jpeg",
  tag: "Luxo",
  description: "Marcante, elegante e noturno.",
  featured: false
},
{
  id: 45,
  name: "Maison Alhambra No.2 Men",
  volume: "80 ml",
  category: "Importados Masculinos",
  price: 206.70,
  image: "maison.jpeg",
  tag: "Importado Masculino",
  description: "Perfume versátil, fresco e muito agradável.",
  featured: false
},
{
  id: 46,
  name: "Maison Alhambra Salvo Elixir",
  volume: "60 ml",
  category: "Importados Masculinos",
  price: 206.50,
  image: "salvo.jpeg",
  tag: "Clássico",
  description: "Masculino elegante, equilibrado e muito popular.",
  featured: false
},
{
  id: 47,
  name: "Maison Alhambra Panther",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 206.70,
  image: "panther.jpeg",
  tag: "Destaque",
  description: "Fragrância intensa, envolvente e cheia de personalidade.",
  featured: false
},
{
  id: 48,
  name: "Carolina Herrera 212 Vip Black",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 518.70,
  image: "212.vip.black.jpeg",
  tag: "Premium",
  description: "Cheiro sofisticado, moderno e muito elogiado.",
  featured: false
},
{
  id: 49,
  name: "Y Yves Saint Laurent Eau de Parfum",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 519.0,
  image: "img/perfume-48.jpg",
  tag: "Premium",
  description: "Cheiro sofisticado, moderno e muito elogiado.",
  featured: false
},
{
  id: 50,
  name: "Y Yves Saint Laurent Eau de Parfum",
  volume: "100 ml",
  category: "Importados Masculinos",
  price: 519.0,
  image: "img/perfume-48.jpg",
  tag: "Premium",
  description: "Cheiro sofisticado, moderno e muito elogiado.",
  featured: false
}  
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
const customerDistrict = document.getElementById("customerDistrict");
const customerCity = document.getElementById("customerCity");
const customerCep = document.getElementById("customerCep");
const paymentMethod = document.getElementById("paymentMethod");

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function createProductCard(product) {
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
          <span class="product-price">${formatPrice(product.price)}</span>
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
  const featured = products.filter((item) => item.featured).slice(0, 8);
  featuredGrid.innerHTML = featured.map(createProductCard).join("");

 gridImportadosMasculinos.innerHTML = products
  .filter((item) => item.category === "Importados Masculinos")
  .slice(0, 18)
  .map(createProductCard)
  .join("");


  gridImportadosFemininos.innerHTML = products
    .filter((item) => item.category === "Importados Femininos")
    .slice(0, 8)
    .map(createProductCard)
    .join("");

  gridArabesMasculinos.innerHTML = products
    .filter((item) => item.category === "Árabes Masculinos")
    .slice(0, 8)
    .map(createProductCard)
    .join("");

  gridArabesFemininos.innerHTML = products
    .filter((item) => item.category === "Árabes Femininos")
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

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
}

function increaseItem(productId) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;
  item.quantity += 1;
  renderCart();
}

function decreaseItem(productId) {
  const item = cart.find((item) => item.id === productId);
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  }

  renderCart();
}

function buildWhatsAppMessage(total) {
  const payment = paymentMethod.value || "Pix";

  const orderLines = cart
    .map(
      (item) =>
        `* ${item.name} (${item.quantity}x) - ${formatPrice(item.price * item.quantity)}`
    )
    .join("\n");

  return `Meu Pedido

${orderLines}

Total: ${formatPrice(total)}

Nome: ${customerName.value || "-"}
Telefone: ${customerPhone.value || "-"}
Endereço: ${customerAddress.value || "-"}
Bairro: ${customerDistrict.value || "-"}
Cidade: ${customerCity.value || "-"}
Cep: ${customerCep.value || "-"}

Pagamento: ${payment}

Prazo de Entrega: 3 a 5 dias após a confirmação da compra.

Para finalizar sua compra, enviaremos o link de pagamento, Pix ou 
Cartão de crédito em até 5x com acréscimo da taxa da maquininha, após efetuar pagamento nos envie o comprovante. 

Obrigado pela compra.

Rodrigues Perfums`;
}

function updateCheckoutLink() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
    total += item.price * item.quantity;
    quantity += item.quantity;

    const card = document.createElement("div");
    card.className = "cart-item";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.volume}</p>
        <p>${formatPrice(item.price)}</p>

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
  customerDistrict,
  customerCity,
  customerCep,
  paymentMethod
].forEach((field) => {
  field.addEventListener("input", updateCheckoutLink);
  field.addEventListener("change", updateCheckoutLink);
});

renderCategories();
renderProducts();
renderStaticSections();
renderCart();

const whatsappNumber = "5511972480984";
const cartStorageKey = "rg-perfumes-cart";

const products = [
  {
    id: 1,
    name: "Dior Sauvage",
    category: "Importado Masculino",
    price: 479.9,
    oldPrice: 529.9,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
    tag: "Mais vendido",
    description: "Importado masculino de presença forte, elegante e sofisticada."
  },
  {
    id: 2,
    name: "212 VIP Men",
    category: "Importado Masculino",
    price: 389.9,
    oldPrice: 429.9,
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80",
    tag: "Destaque",
    description: "Aroma moderno, sedutor e cheio de personalidade."
  },
  {
    id: 3,
    name: "Bleu de Chanel",
    category: "Importado Masculino",
    price: 529.9,
    oldPrice: 589.9,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80",
    tag: "Premium",
    description: "Fragrância refinada, intensa e moderna para homens de presença."
  },
  {
    id: 4,
    name: "Invictus",
    category: "Importado Masculino",
    price: 419.9,
    oldPrice: 469.9,
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=900&q=80",
    tag: "Sucesso",
    description: "Perfume vibrante, marcante e ideal para quem quer destaque."
  },
  {
    id: 5,
    name: "One Million",
    category: "Importado Masculino",
    price: 439.9,
    oldPrice: 489.9,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    tag: "Luxo",
    description: "Clássico sedutor com presença forte e sofisticada."
  },
  {
    id: 6,
    name: "Acqua di Giò",
    category: "Importado Masculino",
    price: 459.9,
    oldPrice: 509.9,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80",
    tag: "Clássico",
    description: "Fresco, elegante e perfeito para o dia a dia."
  },
  {
    id: 7,
    name: "Good Girl",
    category: "Importado Feminino",
    price: 499.9,
    oldPrice: 549.9,
    image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=80",
    tag: "Mais vendido",
    description: "Importado feminino marcante, sofisticado e perfeito para ocasiões especiais."
  },
  {
    id: 8,
    name: "La Vie Est Belle",
    category: "Importado Feminino",
    price: 469.9,
    oldPrice: 519.9,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    tag: "Elegante",
    description: "Fragrância feminina doce, elegante e luxuosa."
  },
  {
    id: 9,
    name: "Scandal",
    category: "Importado Feminino",
    price: 459.9,
    oldPrice: 509.9,
    image: "https://images.unsplash.com/photo-1619994403073-2cec7b30c1b6?auto=format&fit=crop&w=900&q=80",
    tag: "Sucesso",
    description: "Perfume feminino intenso, doce e extremamente chamativo."
  },
  {
    id: 10,
    name: "Libre",
    category: "Importado Feminino",
    price: 489.9,
    oldPrice: 539.9,
    image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80",
    tag: "Refinado",
    description: "Elegância moderna com sensualidade e presença."
  },
  {
    id: 11,
    name: "Idôle",
    category: "Importado Feminino",
    price: 429.9,
    oldPrice: 469.9,
    image: "https://images.unsplash.com/photo-1615634788081-5cb2f4c9cace?auto=format&fit=crop&w=900&q=80",
    tag: "Delicado",
    description: "Perfume feminino sofisticado, floral e elegante."
  },
  {
    id: 12,
    name: "J'adore",
    category: "Importado Feminino",
    price: 519.9,
    oldPrice: 579.9,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=900&q=80",
    tag: "Luxo",
    description: "Clássico feminino de alta elegância e feminilidade."
  },
  {
    id: 13,
    name: "Asad",
    category: "Árabe Masculino",
    price: 199.9,
    oldPrice: 229.9,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?auto=format&fit=crop&w=900&q=80",
    tag: "Fixação forte",
    description: "Fragrância quente, intensa e poderosa para destaque absoluto."
  },
  {
    id: 14,
    name: "Bade'e Al Oud",
    category: "Árabe Masculino",
    price: 239.9,
    oldPrice: 269.9,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80",
    tag: "Árabe",
    description: "Perfume marcante com alta fixação e aroma intenso."
  },
  {
    id: 15,
    name: "Fakhar Black",
    category: "Árabe Masculino",
    price: 219.9,
    oldPrice: 249.9,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=900&q=80",
    tag: "Intenso",
    description: "Aroma noturno, impactante e cheio de personalidade."
  },
  {
    id: 16,
    name: "Khamrah",
    category: "Árabe Masculino",
    price: 259.9,
    oldPrice: 299.9,
    image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=900&q=80",
    tag: "Luxo árabe",
    description: "Doce, quente e muito marcante, com ótima fixação."
  },
  {
    id: 17,
    name: "Oud for Glory",
    category: "Árabe Masculino",
    price: 249.9,
    oldPrice: 289.9,
    image: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80",
    tag: "Marcante",
    description: "Fragrância poderosa para quem gosta de perfume pesado."
  },
  {
    id: 18,
    name: "Yara",
    category: "Árabe Feminino",
    price: 189.9,
    oldPrice: 219.9,
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?auto=format&fit=crop&w=900&q=80",
    tag: "Sucesso",
    description: "Doce, cremosa e envolvente com toque exótico luxuoso."
  },
  {
    id: 19,
    name: "Fakhar Rose",
    category: "Árabe Feminino",
    price: 209.9,
    oldPrice: 239.9,
    image: "https://images.unsplash.com/photo-1610461888750-10bfc601b874?auto=format&fit=crop&w=900&q=80",
    tag: "Luxo Árabe",
    description: "Elegância floral oriental com forte sensação de exclusividade."
  },
  {
    id: 20,
    name: "Yara Moi",
    category: "Árabe Feminino",
    price: 199.9,
    oldPrice: 229.9,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80",
    tag: "Novo",
    description: "Versão elegante, cremosa e sofisticada para presença marcante."
  },
  {
    id: 21,
    name: "Haya",
    category: "Árabe Feminino",
    price: 229.9,
    oldPrice: 259.9,
    image: "https://images.unsplash.com/photo-1616604847462-db1d3c2403df?auto=format&fit=crop&w=900&q=80",
    tag: "Exclusivo",
    description: "Floral doce com visual luxuoso e aroma feminino refinado."
  },
  {
    id: 22,
    name: "Delilah",
    category: "Árabe Feminino",
    price: 219.9,
    oldPrice: 249.9,
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80",
    tag: "Charmoso",
    description: "Perfume feminino envolvente, delicado e muito elegante."
  }
];

let selectedCategory = "Todos";
let cart = loadCart();

const productsGrid = document.getElementById("productsGrid");
const featuredGrid = document.getElementById("featuredGrid");
const searchInput = document.getElementById("searchInput");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");
const cartCountEls = document.querySelectorAll("[data-cart-count]");

const cartSidebar = document.getElementById("cartSidebar");
const cartOverlay = document.getElementById("cartOverlay");
const openCartBtn = document.getElementById("openCartBtn");
const openCartBtnMobile = document.getElementById("openCartBtnMobile");
const heroCartBtn = document.getElementById("heroCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

const toast = document.getElementById("toast");
const categoryButtons = document.querySelectorAll(".category-btn");
const desktopCategoryLinks = document.querySelectorAll("[data-menu-category]");
const mobileCategoryLinks = document.querySelectorAll("[data-mobile-category]");

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function saveCart() {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
}

function loadCart() {
  const data = localStorage.getItem(cartStorageKey);
  return data ? JSON.parse(data) : [];
}

function showToast(message = "Produto adicionado ao carrinho") {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.toLowerCase().trim();

  return products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function productCardTemplate(product) {
  return `
    <article class="product">
      <div class="product__image">
        <img src="${product.image}" alt="${product.name}" />
        <span class="product__tag">${product.tag}</span>
      </div>

      <div class="product__body">
        <p class="product__category">${product.category}</p>
        <h3 class="product__title">${product.name}</h3>
        <p class="product__description">${product.description}</p>

        <div class="priceBox">
          <span class="oldPrice">${formatPrice(product.oldPrice)}</span>
          <strong class="price">${formatPrice(product.price)}</strong>
        </div>

        <div class="product__bottom">
          <button class="add-cart-btn" data-id="${product.id}">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </article>
  `;
}

function bindAddToCartButtons() {
  const addButtons = document.querySelectorAll(".add-cart-btn");

  addButtons.forEach((button) => {
    button.onclick = () => {
      const productId = Number(button.dataset.id);
      addToCart(productId);
    };
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="emptyState">
        Nenhum perfume encontrado nessa busca.
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map(productCardTemplate).join("");
  bindAddToCartButtons();
}

function renderFeaturedProducts() {
  const featuredProducts = products.slice(0, 10);
  featuredGrid.innerHTML = featuredProducts.map(productCardTemplate).join("");
  bindAddToCartButtons();
}

function addToCart(productId) {
  const foundProduct = products.find((product) => product.id === productId);
  if (!foundProduct) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...foundProduct, quantity: 1 });
  }

  saveCart();
  renderCart();
  openCart();
  showToast(`${foundProduct.name} adicionado ao carrinho`);
}

function decreaseItem(productId) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.id !== productId);
  }

  saveCart();
  renderCart();
}

function increaseItem(productId) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity += 1;
  saveCart();
  renderCart();
}

function removeItem(productId) {
  cart = cart.filter((product) => product.id !== productId);
  saveCart();
  renderCart();
  showToast("Produto removido do carrinho");
}

function updateCartCount(totalQuantity) {
  cartCountEls.forEach((element) => {
    element.textContent = totalQuantity;
  });
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart">Nenhum item adicionado ainda.</p>`;
    cartTotal.textContent = formatPrice(0);
    updateCartCount(0);
    checkoutBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      "Olá! Vim pelo site da Rodrigues Gomes Perfumes."
    )}`;
    return;
  }

  let total = 0;
  let totalQuantity = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
    totalQuantity += item.quantity;

    const cartCard = document.createElement("div");
    cartCard.classList.add("cart-item");

    cartCard.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />

      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.category}</p>
        <p>${formatPrice(item.price)}</p>

        <div class="quantity-controls">
          <button class="decrease-btn" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase-btn" data-id="${item.id}">+</button>
        </div>

        <button class="remove-btn" data-id="${item.id}">
          Remover item
        </button>
      </div>
    `;

    cartItems.appendChild(cartCard);
  });

  cartTotal.textContent = formatPrice(total);
  updateCartCount(totalQuantity);

  const message = `
Olá, quero finalizar meu pedido:

${cart
  .map(
    (item) =>
      `• ${item.name} | Qtd: ${item.quantity} | ${formatPrice(item.price * item.quantity)}`
  )
  .join("\n")}

Total: ${formatPrice(total)}
  `.trim();

  checkoutBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll(".decrease-btn").forEach((button) => {
    button.onclick = () => decreaseItem(Number(button.dataset.id));
  });

  document.querySelectorAll(".increase-btn").forEach((button) => {
    button.onclick = () => increaseItem(Number(button.dataset.id));
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.onclick = () => removeItem(Number(button.dataset.id));
  });
}

function openCart() {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
  cartSidebar.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
  cartSidebar.setAttribute("aria-hidden", "true");
}

function setCategory(category) {
  selectedCategory = category;

  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === category);
  });

  renderProducts();
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

function toggleMobileMenu() {
  const isOpen = mobileNav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
  mobileNav.classList.remove("show");
  menuBtn.setAttribute("aria-expanded", "false");
}

searchInput.addEventListener("input", renderProducts);

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});

desktopCategoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setCategory(link.dataset.menuCategory);
  });
});

mobileCategoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setCategory(link.dataset.mobileCategory);
    closeMobileMenu();
  });
});

openCartBtn.addEventListener("click", openCart);
openCartBtnMobile.addEventListener("click", openCart);
heroCartBtn.addEventListener("click", openCart);

closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

menuBtn.addEventListener("click", toggleMobileMenu);

document.querySelectorAll(".mobileNav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

renderProducts();
renderFeaturedProducts();
renderCart();
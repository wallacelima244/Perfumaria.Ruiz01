const whatsappNumber = "5511972480984";

const products = [
  { id: 1, name: "Lattafa Yara Elixir", volume: "100 ml", category: "Árabes Femininos", pricePix: 278.20, priceCard: 338.20, image: "yara.jpeg", tag: "Árabe Feminino Premium", description: "Fragrância doce, cremosa e envolvente, com ótima fixação e elegância.", featured: false, hidden: false },
  { id: 2, name: "Lattafa Fakhar Rose", volume: "100 ml", category: "Árabes Femininos", pricePix: 245.70, priceCard: 305.70, image: "rose.f.jpeg", tag: "Árabe Feminino Premium", description: "Fragrância floral elegante e sofisticada, inspirada no Givenchy L’Interdit.", featured: false, hidden: false },
  { id: 3, name: "Lataffa Kharah", volume: "100 ml", category: "Árabes Femininos", pricePix: 226.20, priceCard: 286.20, image: "kharah.jpeg", tag: "Best Seller Árabe", description: "Perfume doce e intenso, com toque amadeirado e excelente fixação.", featured: false, hidden: false },
  { id: 4, name: "Armaf Club De Nuit Woman", volume: "105 ml", category: "Árabes Femininos", pricePix: 278.20, priceCard: 338.20, image: "woman.jpeg", tag: "Best Seller Feminino", description: "Fragrância elegante e marcante, com toque floral sofisticado inspirado no Coco Mademoiselle", featured: false, hidden: false },
  { id: 5, name: "French Avenue Irida", volume: "100 ml", category: "Árabes Femininos", pricePix: 388.70, priceCard: 448.70, image: "irida.jpeg", tag: "Árabe Premium", description: "Fragrância elegante e envolvente, com toque adocicado e ótima fixação.", featured: false, hidden: false },
  { id: 6, name: "Rasani Hawas Pink For Her", volume: "100 ml", category: "Árabes Femininos", pricePix: 362.70, priceCard: 422.70, image: "rasani.jpeg", tag: "Árabe Feminino Premium", description: "Fragrância doce, frutada e vibrante, com ótima fixação e toque moderno.", featured: false, hidden: false },
  { id: 7, name: "Maison Alhambra Vogue Party", volume: "100 ml", category: "Árabes Femininos", pricePix: 206.70, priceCard: 266.70, image: "vogue.jpeg", tag: "Árabe Premium", description: "Fragrância doce e envolvente, com toque festivo e ótima fixação.", featured: false, hidden: false },
  { id: 8, name: "Maison Alhambra Chants Tenderina", volume: "100 ml", category: "Árabes Femininos", pricePix: 193.70, priceCard: 253.70, image: "chants.jpeg", tag: "Árabe Feminino Premium", description: "Fragrância floral delicada e elegante, com toque suave e sofisticado.", featured: false, hidden: false },
  { id: 11, name: "Carolina Herrera La Bomba", volume: "80 ml", category: "Importados Femininos", pricePix: 765.70, priceCard: 825.70, image: "la.bomba.jpeg", tag: "Importado Feminino", description: "Aroma leve e marcante", featured: false, hidden: false },
  { id: 12, name: "Chanel Chance Eau Tendre", volume: "100 ml", category: "Importados Femininos", pricePix: 1246.70, priceCard: 1396.70, image: "chanel.fem.jpeg", tag: "Importado Feminino", description: "Fragrância Marcante.", featured: true, hidden: false },
  { id: 13, name: "Carolina Herrera Good Girl Blush", volume: "90 ml", category: "Importados Femininos", pricePix: 687.70, priceCard: 747.70, image: "good.girl.blush.jpeg", tag: "Premium", description: "Sofisticado, muito famoso.", featured: true, hidden: false },
  { id: 14, name: "Dolce & Gabbana The One EDP", volume: "75 ml", category: "Importados Femininos", pricePix: 661.70, priceCard: 721.70, image: "dolcegabbana.jpeg", tag: "Importado Feminino", description: "Leve, refrescante e elegante para o dia a dia.", featured: true, hidden: false },
  { id: 15, name: "Lancome La Vie Belle Iris Absolut", volume: "100 ml", category: "Importados Femininos", pricePix: 726.70, priceCard: 796.70, image: "la.vie.jpeg", tag: "Importado Feminino", description: "Doce, marcante e muito querida entre os femininos.", featured: false, hidden: false },
  { id: 16, name: "Versace Bright Crystal Parfum", volume: "90 ml", category: "Importados Femininos", pricePix: 622.70, priceCard: 682.70, image: "versace.fem.jpeg", tag: "Importado Feminino", description: "Clássico feminino com sensualidade e elegância.", featured: false, hidden: false },
  { id: 17, name: "Dolce & Gabbana Light Blue", volume: "100 ml", category: "Importados Femininos", pricePix: 388.70, priceCard: 448.70, image: "dolce.light.jpeg", tag: "Best Seller", description: "Perfume leve e sofisticado para momentos especiais.", featured: false, hidden: false },
  { id: 18, name: "Chanel Coco Mademoiselle EDP", volume: "100 ml", category: "Importados Femininos", pricePix: 1258.70, priceCard: 1409.70, image: "mademoiselle.jpeg", tag: "Importado Feminino", description: "Aroma moderno, jovem e muito versátil.", featured: false, hidden: false },
  { id: 19, name: "Chanel Chance Eau Splendide", volume: "100 ml", category: "Importados Femininos", pricePix: 1246.70, priceCard: 1396.70, image: "spledide.jpeg", tag: "Premium", description: "Presença luxuosa com assinatura elegante.", featured: false, hidden: false },
  { id: 21, name: "Lattafa asad", volume: "100 ml", category: "Árabes Masculinos", pricePix: 226.20, priceCard: 286.20, image: "asad.jpeg", tag: "Árabe Premium", description: "Fragrância intensa, sofisticada e muito elogiada, com alta fixação.", featured: false, hidden: false },
  { id: 22, name: "Armaf Club De Nuit Intense Man", volume: "105 ml", category: "Árabes Masculinos", pricePix: 291.20, priceCard: 351.20, image: "de.nuit.man.jpeg", tag: "Best Seller Árabe", description: "Fragrância intensa e sofisticada, muito comparada ao Creed Aventus.", featured: false, hidden: false },
  { id: 23, name: "Lattafa Fakhar Black", volume: "100 ml", category: "Árabes Masculinos", pricePix: 226.20, priceCard: 286.20, image: "fakhar.jpeg", tag: "Árabe Premium", description: "Perfume elegante, fresco e marcante, inspirado no YSL Y.", featured: false, hidden: false },
  { id: 24, name: "Afnan 9PM", volume: "100 ml", category: "Árabes Masculinos", pricePix: 245.70, priceCard: 305.70, image: "afnan.jpeg", tag: "Best Seller Árabe", description: "Perfume doce e sedutor com ótima fixação, inspirado no Ultra Male.", featured: false, hidden: false },
  { id: 31, name: "Dior Sauvage Eau de Parfum", volume: "100 ml", category: "Importados Masculinos", pricePix: 713.70, priceCard: 773.70, image: "dior.sauvage.jpeg", tag: "Importado Masculino", description: "Fragrância de presença forte e elegante.", featured: true, hidden: false },
  { id: 32, name: "Animale For Men", volume: "100 ml", category: "Importados Masculinos", pricePix: 253.50, priceCard: 313.50, image: "animale.jpeg", tag: "Luxo", description: "Sofisticado, refinado e extremamente versátil.", featured: false, hidden: false },
  { id: 33, name: "Paco Rabanne One Million Edt", volume: "100 ml", category: "Importados Masculinos", pricePix: 492.70, priceCard: 552.70, image: "paco.rabenne.one.million.jpeg", tag: "Importado Masculino", description: "Moderno, vibrante e cheio de energia.", featured: true, hidden: false },
  { id: 43, name: "Rabanne Invictus EDT", volume: "100 ml", category: "Importados Masculinos", pricePix: 492.70, priceCard: 552.70, image: "invictus.jpeg", tag: "Premium", description: "Aroma sofisticado, refinado e noturno.", featured: true, hidden: false },
  { id: 48, name: "Carolina Herrera 212 Vip Black", volume: "100 ml", category: "Importados Masculinos", pricePix: 518.70, priceCard: 578.00, image: "212.vip.black.jpeg", tag: "Premium", description: "Cheiro sofisticado, moderno e muito elogiado.", featured: true, hidden: false },
  { id: 56, name: "La Vie Est Belle L'Elixir Lancome", volume: "100 ml", category: "Importados Femininos", pricePix: 713.70, priceCard: 793.70, image: "l.elixir.jpeg", tag: "Importado Feminino", description: "Envolvente e cheia de personalidade.", featured: true, hidden: false },
];

let selectedCategory = "Todos";
let cart = [];
let selectedPayment = "Pix";

// Seletores
const productsGrid = document.getElementById("productsGrid");
const featuredGrid = document.getElementById("featuredGrid");
const cartItemsContainer = document.getElementById("cartItems");
const cartTotalText = document.getElementById("cartTotal");
const cartCountTop = document.getElementById("cartCountTop");
const cartCountFloat = document.getElementById("cartCountFloat");
const searchInput = document.getElementById("searchInput");

// Utilitários
function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Renderização de Cards
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
        
        <div class="buttons-stack">
          <button class="btn-price-pix" onclick="addToCart(${product.id}, 'pix')">
            ${formatPrice(product.pricePix)} PIX
          </button>
          <button class="btn-price-card" onclick="addToCart(${product.id}, 'card')">
            ${formatPrice(product.priceCard)} 5x s/ juros
          </button>
        </div>
      </div>
    </article>
  `;
}

// Lógica do Carrinho
function addToCart(productId, type) {
  const product = products.find(p => p.id === productId);
  const price = type === 'card' ? product.priceCard : product.pricePix;
  
  const cartId = `${productId}-${type}`;
  const existing = cart.find(item => item.cartId === cartId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, cartId, selectedPrice: price, paymentType: type, quantity: 1 });
  }

  renderCart();
  openCart();
}

function renderCart() {
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="empty-cart">Nenhum item adicionado ainda.</p>';
    cartTotalText.innerText = "R$ 0,00";
    updateCounts(0);
    return;
  }

  let total = 0;
  let totalQty = 0;

  cart.forEach(item => {
    total += item.selectedPrice * item.quantity;
    totalQty += item.quantity;
    
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${formatPrice(item.selectedPrice)} (${item.paymentType.toUpperCase()})</p>
        <div class="quantity-controls">
          <button onclick="changeQty('${item.cartId}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty('${item.cartId}', 1)">+</button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(div);
  });

  cartTotalText.innerText = formatPrice(total);
  updateCounts(totalQty);
  updateCheckoutLink();
}

function changeQty(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(i => i.cartId !== cartId);
  }
  renderCart();
}

function updateCounts(qty) {
  cartCountTop.innerText = qty;
  cartCountFloat.innerText = qty;
}

// WhatsApp Link (MODELO PEDIDO REALIZADO)
// Substitua a função updateCheckoutLink por esta:
function updateCheckoutLink() {
  const checkoutBtn = document.getElementById("checkoutBtn");
  
  // 1. Pegar dados dos campos (Garante que não fiquem vazios)
  const name = document.getElementById("customerName").value.trim() || "Não informado";
  const phone = document.getElementById("customerPhone").value.trim() || "Não informado";
  const address = document.getElementById("customerAddress").value.trim() || "Não informado";
  const district = document.getElementById("customerDistrict").value.trim() || "---";
  const city = document.getElementById("customerCity").value.trim() || "---";
  const cep = document.getElementById("customerCep").value.trim() || "---";
  const complement = document.getElementById("customerComplement").value.trim();

  // 2. Montar a lista de produtos (Loop corrigido)
  let productLines = "";
  cart.forEach(item => {
    // Identifica qual botão o cliente clicou (PIX ou CARD)
    const labelPagamento = item.paymentType === 'card' ? "(5x s/ Juros)" : "(PIX)";
    const subtotal = item.selectedPrice * item.quantity;
    
    // Concatena cada produto em uma nova linha (%0A)
    productLines += `Produto: * ${item.name} ${labelPagamento} (${item.quantity}x) — ${formatPrice(subtotal)}%0A`;
  });

  const total = cartTotalText.innerText;

  // 3. Montar a mensagem completa exatamente no seu modelo
  let message = `*Pedido Realizado*%0A%0A`;
  message += `${productLines}%0A`; // Aqui entram todos os produtos listados acima
  message += `*Total: ${total}*%0A%0A`;
  message += `*Dados do Cliente*%0A`;
  message += `Nome: ${name}%0A`;
  message += `Telefone: ${phone}%0A`;
  message += `Endereço: ${address}${complement ? ' (' + complement + ')' : ''}%0A`;
  message += `Bairro: ${district}%0A`;
  message += `Cidade: ${city}%0A`;
  message += `CEP: ${cep}%0A%0A`;
  message += `*Pagamento:* ${selectedPayment}%0A%0A`;
  message += `*Prazo de Entrega:* 3 a 5 dias após a confirmação do pagamento.%0A%0A`;
  message += `*Confirmação do Pedido:*%0A`;
  message += `Para confirmar o pedido, é necessário o pagamento de no mínimo 50% do valor antecipado via Pix ou cartão de crédito em até 5x s/ Juros.%0A%0A`;
  message += `Após a confirmação do pagamento, seu perfume será reservado e encomendado exclusivamente para você.%0A%0A`;
  message += `Pedimos que, após o pagamento, envie o comprovante neste WhatsApp para confirmação do pedido. O valor restante poderá ser pago na entrega do produto.%0A%0A`;
  message += `Agradecemos pela preferência!%0A%0A`;
  message += `*Rodrigues Perfums*`;

  // 4. Aplicar o link ao botão de finalizar
  checkoutBtn.onclick = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }
    if (name === "Não informado" || address === "Não informado") {
      alert("Por favor, preencha seu Nome e Endereço para entrega.");
      return;
    }
    // O encodeURI limpa caracteres que podem quebrar o link
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
}

// Filtros e Categorias
function renderProducts() {
  const term = searchInput.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(term) && (selectedCategory === "Todos" || p.category === selectedCategory));
  productsGrid.innerHTML = filtered.map(createProductCard).join("");
}

function renderStaticSections() {
  const grids = [
    { id: "featuredGrid", filter: p => p.featured },
    { id: "gridImportadosMasculinos", filter: p => p.category === "Importados Masculinos" },
    { id: "gridImportadosFemininos", filter: p => p.category === "Importados Femininos" },
    { id: "gridArabesMasculinos", filter: p => p.category === "Árabes Masculinos" },
    { id: "gridArabesFemininos", filter: p => p.category === "Árabes Femininos" }
  ];

  grids.forEach(g => {
    const el = document.getElementById(g.id);
    if (el) el.innerHTML = products.filter(g.filter).map(createProductCard).join("");
  });
}

function renderCategoriesMenu() {
  const container = document.getElementById("categories");
  const cats = ["Todos", "Importados Femininos", "Importados Masculinos", "Árabes Masculinos", "Árabes Femininos"];
  container.innerHTML = cats.map(c => `<button class="category-btn ${c === selectedCategory ? 'active' : ''}" onclick="filterCat('${c}')">${c}</button>`).join("");
}

window.filterCat = (cat) => {
  selectedCategory = cat;
  renderCategoriesMenu();
  renderProducts();
};

// UI Handlers
function openCart() { document.getElementById("cartSidebar").classList.add("active"); document.getElementById("cartOverlay").classList.add("active"); }
function closeCart() { document.getElementById("cartSidebar").classList.remove("active"); document.getElementById("cartOverlay").classList.remove("active"); }

// Select de Pagamento
const paymentSelect = document.getElementById("paymentSelect");
if (paymentSelect) {
  const selected = paymentSelect.querySelector(".select-selected");
  const options = paymentSelect.querySelector(".select-options");
  selected.onclick = () => paymentSelect.classList.toggle("active");
  options.querySelectorAll("div").forEach(opt => {
    opt.onclick = () => {
      selected.innerText = opt.innerText;
      selectedPayment = opt.dataset.value;
      paymentSelect.classList.remove("active");
      updateCheckoutLink();
    };
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderStaticSections();
  renderProducts();
  renderCategoriesMenu();
  
  document.getElementById("openCartBtn").onclick = openCart;
  document.getElementById("floatingCartBtn").onclick = openCart;
  document.getElementById("closeCartBtn").onclick = closeCart;
  document.getElementById("cartOverlay").onclick = closeCart;
  document.getElementById("searchInput").oninput = renderProducts;
  document.getElementById("menuToggle").onclick = () => document.getElementById("mobileMenu").classList.toggle("active");
  
  ["customerName", "customerPhone", "customerAddress", "customerDistrict", "customerCity", "customerCep", "customerComplement"].forEach(id => {
    document.getElementById(id).addEventListener("input", updateCheckoutLink);
  });
});
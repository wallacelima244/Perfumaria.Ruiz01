const whatsappNumber = "5511972480984";

const products = [
 {
    id: 1,
    name: "Lattafa Yara Elixir ",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 278.20,
    priceCard: 338.20,
    image: "yara.jpeg",
    tag: "Árabe Feminino Premium",
    description: "Fragrância doce, cremosa e envolvente, com ótima fixação e elegância.",
    featured: false,
    hidden: false,
  },
  {
    id: 2,
    name: "Lattafa Fakhar Rose",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 245.70,
    priceCard: 305.70,
    image: "rose.f.jpeg",
    tag: "Árabe Feminino Premium",
    description: "Fragrância floral elegante e sofisticada, inspirada no Givenchy L’Interdit.",
    featured: false,
    hidden: false,
  },
  {
    id: 3,
    name: "Lataffa Kharah",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 226.20,
    priceCard: 286.20,
    image: "kharah.jpeg",
    tag: "Best Seller Árabe",
    description: "Perfume doce e intenso, com toque amadeirado e excelente fixação.",
    featured: false,
    hidden: false,
  },
  {
    id: 4,
    name: "Armaf Club De Nuit Woman",
    volume: "105 ml",
    category: "Árabes Femininos",
    pricePix: 278.20,
    priceCard: 338.20,
    image: "woman.jpeg",
    tag: "Best Seller Feminino",
    description: "Fragrância elegante e marcante, com toque floral sofisticado inspirado no Coco Mademoiselle",
    featured: false,
    hidden: false,
  },
  {
    id: 5,
    name: "French Avenue Irida",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 388.70,
    priceCard: 448.70,
    image: "irida.jpeg",
    tag: "Árabe Premium",
    description: "Fragrância elegante e envolvente, com toque adocicado e ótima fixação.",
    featured: false,
    hidden: false,
  },
  {
    id: 6,
    name: "Rasani Hawas Pink For Her",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 362.70,
    priceCard: 422.70,
    image: "rasani.jpeg",
    tag: "Árabe Feminino Premium",
    description: "Fragrância doce, frutada e vibrante, com ótima fixação e toque moderno.",
    featured: false,
    hidden: false,
  },
  {
    id: 7,
    name: "Maison Alhambra Vogue Party",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 206.70,
    priceCard: 266.70,
    image: "vogue.jpeg",
    tag: "Árabe Premium",
    description: "Fragrância doce e envolvente, com toque festivo e ótima fixação.",
    featured: false,
    hidden: false,
  },
  {
    id: 8,
    name: "Maison Alhambra Chants Tenderina",
    volume: "100 ml",
    category: "Árabes Femininos",
    pricePix: 193.70,
    priceCard: 253.70,
    image: "chants.jpeg",
    tag: "Árabe Feminino Premium",
    description: "Fragrância floral delicada e elegante, com toque suave e sofisticado.",
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
    featured: false,
    hidden: false,
  },
  {
    id: 12,
    name: "Chanel Chance Eau Tendre",
    volume: "100 ml",
    category: "Importados Femininos",
    pricePix: 1246.70,
    priceCard: 1396.70,
    image: "chanel.fem.jpeg",
    tag: "Importado Feminino",
    description: "Fragrância Marcante.",
    featured: true,
    hidden: false,
  },
  {
    id: 13,
    name: "Carolina Herrera Good Girl Blush",
    volume: "90 ml",
    category: "Importados Femininos",
    pricePix: 687.70,
    priceCard: 747.70,
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
    pricePix: 661.70,
    priceCard: 721.70,
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
    pricePix: 726.70,
    priceCard: 796.70,
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
    pricePix: 622.70,
    priceCard: 682.70,
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
    pricePix: 388.70,
    priceCard: 448.70,
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
    pricePix: 1258.70,
    priceCard: 1409.70,
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
    pricePix: 1246.70,
    priceCard: 1396.70,
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
    pricePix: 206.70,
    priceCard: 266.70,
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
    pricePix: 206.70,
    priceCard: 266.70,
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
    pricePix: 206.70,
    priceCard: 266.70,
    image: "pather.original.jpeg",
    tag: "Destaque",
    description: "Fragrância intensa, envolvente e cheia de personalidade.",
    featured: false,
    hidden: false,
  },{
    id: 44,
    name: "Rayhaan Nocturno",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 284.70,
    priceCard: 344.70,
    image: "nocturno.jpeg",
    tag: "Luxo",
    description: "Marcante, elegante e noturno.",
    featured: false,
    hidden: false,
  },
  {
    id: 25,
    name: "Maison Alhambra Glacier Ultra",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 206.70,
    priceCard: 266.70,
    image: "glacier.jpeg",
    tag: "Árabe Premium",
    description: "Fragrância doce, moderna e envolvente, inspirada no Ultra Male.",
    featured: false,
    hidden: false,
  },
  {
    id: 26,
    name: "Lattafa Asad Elixir",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 258.70,
    priceCard:318.70,
    image: "asad.elixir.jpeg",
    tag: "Lançamento Árabe",
    description: "Fragrância intensa e sofisticada, com alta fixação e pegada do Sauvage Elixir",
    featured: false,
    hidden: false,
  },
  {
    id: 27,
    name: "Lattafa Al Noble Safeer ",
    volume: "100 ml",
    category: "Árabes Masculinos",
    pricePix: 213.20,
    priceCard: 273.20,
    image: "safeer.jpeg",
    tag: "Árabe Premium",
    description: "Fragrância amadeirada e elegante, com presença marcante e ótima fixação.",
    featured: false,
    hidden: false,
  },
  
  {
    id: 31,
    name: "Dior Sauvage Eau de Parfum",
    volume: "100 ml",
    category: "Importados Masculinos",
    pricePix: 713.70,
    priceCard: 773.70,
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
    pricePix: 253.50,
    priceCard: 313.50,
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
    pricePix: 492.70,
    priceCard: 552.70,
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
    pricePix: 648.70,
    priceCard: 708.70,
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
    pricePix: 336.70,
    priceCard: 396.70,
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
    pricePix: 253.50,
    priceCard: 313.50,
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
    pricePix: 882.70,
    priceCard: 942.70,
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
    pricePix: 323.70,
    priceCard: 383.70,
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
    pricePix:570.70,
    priceCard: 630.70,
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
    pricePix: 1415.70,
    priceCard: 1535.70,
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
    pricePix: 531.70,
    priceCard: 591.70,
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
    pricePix: 921.70,
    priceCard: 991.70,
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
    pricePix: 492.70,
    priceCard: 552.70,
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
    pricePix: 518.70,
    priceCard: 578.00,
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
    pricePix: 596.70,
    priceCard: 676.70,
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
    pricePix: 689.00,
    priceCard: 769.00,
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
    pricePix: 708.50,
    priceCard: 798.50,
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
    pricePix: 713.70,
    priceCard: 793.70,
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
    pricePix: 713.70,
    priceCard: 793.70,
    image: "l.elixir.jpeg",
    tag: "Importado Feminino",
    description: "Envolvente e cheia de personalidade.",
    featured: true,
    hidden: false,
  }, 
];

let selectedCategory = "Todos";
let cart = [];
let selectedPayment = "Pix";

// Seletores
const getEl = (id) => document.getElementById(id);

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
window.addToCart = function(productId, type) {
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
  const container = getEl("cartItems");
  if(!container) return;

  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart">Nenhum item adicionado ainda.</p>';
    getEl("cartTotal").innerText = "R$ 0,00";
    updateCounts(0);
    return;
  }

  let total = 0;
  let totalQty = 0;

  cart.forEach(item => {
    total += item.selectedPrice * item.quantity;
    totalQty += item.quantity;
    
    // NOME AMIGÁVEL NO CARRINHO
    const labelAmigavel = item.paymentType === 'card' ? "5x s/ Juros" : "PIX";

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${formatPrice(item.selectedPrice)} (${labelAmigavel})</p>
        <div class="quantity-controls">
          <button onclick="changeQty('${item.cartId}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQty('${item.cartId}', 1)">+</button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  getEl("cartTotal").innerText = formatPrice(total);
  updateCounts(totalQty);
  updateCheckoutLink();
}

window.changeQty = function(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) cart = cart.filter(i => i.cartId !== cartId);
  }
  renderCart();
}

function updateCounts(qty) {
  if(getEl("cartCountFloat")) getEl("cartCountFloat").innerText = qty;
}

// MENSAGEM DO WHATSAPP COMPLETASSA
function updateCheckoutLink() {
  const checkoutBtn = getEl("checkoutBtn");
  if(!checkoutBtn) return;
  
  const name = getEl("customerName").value.trim() || "Não informado";
  const phone = getEl("customerPhone").value.trim() || "Não informado";
  const address = getEl("customerAddress").value.trim() || "Não informado";
  const district = getEl("customerDistrict").value.trim() || "---";
  const city = getEl("customerCity").value.trim() || "---";
  const cep = getEl("customerCep").value.trim() || "---";
  const complement = getEl("customerComplement").value.trim();

  let productLines = "";
  cart.forEach(item => {
    const labelPagamento = item.paymentType === 'card' ? "(5x s/ Juros)" : "(PIX)";
    const subtotal = item.selectedPrice * item.quantity;
    
    productLines += `Produto: * ${item.name} ${labelPagamento} (${item.quantity}x) — ${formatPrice(subtotal)}\n`;
  });

  const total = getEl("cartTotal").innerText;

  let message = `*Pedido Realizado*\n\n`;
  message += `${productLines}\n`;
  message += `*Total: ${total}*\n\n`;
  message += `*Dados do Cliente*\n`;
  message += `Nome: ${name}\n`;
  message += `Telefone: ${phone}\n`;
  message += `Endereço: ${address}${complement ? ' (' + complement + ')' : ''}\n`;
  message += `Bairro: ${district}\n`;
  message += `Cidade: ${city}\n`;
  message += `CEP: ${cep}\n\n`;
  message += `*Pagamento:* ${selectedPayment}\n\n`;
  message += `*Prazo de Entrega:* 3 a 5 dias após a confirmação do pagamento.\n\n`;
  message += `*Confirmação do Pedido:*\n`;
  message += `Para confirmar o pedido, é necessário o pagamento de no mínimo 50% do valor antecipado via Pix ou cartão de crédito em até 5x s/ Juros.\n\n`;
  message += `Após a confirmação do pagamento, seu perfume será reservado e encomendado exclusivamente para você.\n\n`;
  message += `Pedimos que, após o pagamento, envie o comprovante neste WhatsApp para confirmação do pedido. O valor restante poderá ser pago na entrega do produto.\n\n`;
  message += `Agradecemos pela preferência!\n\n`;
  message += `*Rodrigues Perfums*`;

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
    // EncodeURIComponent formata a mensagem pro WhatsApp entender os parágrafos
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };
}

// Filtros e Categorias
function renderProducts() {
  const term = getEl("searchInput") ? getEl("searchInput").value.toLowerCase() : "";
  const filtered = products.filter(p => p.name.toLowerCase().includes(term) && (selectedCategory === "Todos" || p.category === selectedCategory));
  if(getEl("productsGrid")) getEl("productsGrid").innerHTML = filtered.map(createProductCard).join("");
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
    const el = getEl(g.id);
    if (el) el.innerHTML = products.filter(g.filter).map(createProductCard).join("");
  });
}

function renderCategoriesMenu() {
  const container = getEl("categories");
  if(!container) return;
  const cats = ["Todos", "Importados Femininos", "Importados Masculinos", "Árabes Masculinos", "Árabes Femininos"];
  container.innerHTML = cats.map(c => `<button class="category-btn ${c === selectedCategory ? 'active' : ''}" onclick="filterCat('${c}')">${c}</button>`).join("");
}

window.filterCat = (cat) => {
  selectedCategory = cat;
  renderCategoriesMenu();
  renderProducts();
};

// UI Handlers
window.openCart = function() { getEl("cartSidebar").classList.add("active"); getEl("cartOverlay").classList.add("active"); }
window.closeCart = function() { getEl("cartSidebar").classList.remove("active"); getEl("cartOverlay").classList.remove("active"); }

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  renderStaticSections();
  renderProducts();
  renderCategoriesMenu();
  
 // Botões de interface
  if(getEl("floatingCartBtn")) getEl("floatingCartBtn").onclick = openCart;
  if(getEl("closeCartBtn")) getEl("closeCartBtn").onclick = closeCart;
  if(getEl("cartOverlay")) getEl("cartOverlay").onclick = closeCart;
  if(getEl("searchInput")) getEl("searchInput").oninput = renderProducts;

  // ==========================================
  // CONTROLE DO MENU MOBILE (SEM BUGS)
  // ==========================================
  const menuToggleBtn = getEl("menuToggle");
  const mobileMenuDiv = getEl("mobileMenu");

  // 1. Abrir/Fechar ao clicar no hambúrguer
  if (menuToggleBtn && mobileMenuDiv) {
    menuToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que o clique vaze pro site
      mobileMenuDiv.classList.toggle("active");
    });
  }

  // 2. Fechar NA HORA se rolar a tela (sem ficar reaparecendo)
  window.addEventListener("scroll", () => {
    if (mobileMenuDiv && mobileMenuDiv.classList.contains("active")) {
      mobileMenuDiv.classList.remove("active");
    }
  });

  // 3. Fechar quando clicar em um link (para a gaveta subir)
  document.querySelectorAll(".mobile-menu-link").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenuDiv) mobileMenuDiv.classList.remove("active");
    });
  });

  // Custom Select Pagamento (Mantendo o select do carrinho funcionando)
  const paymentSelect = getEl("paymentSelect");
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

  // Inputs do formulário
  ["customerName", "customerPhone", "customerAddress", "customerDistrict", "customerCity", "customerCep", "customerComplement"].forEach(id => {
    const input = getEl(id);
    if(input) input.addEventListener("input", updateCheckoutLink);
  });

}); // <-- ESSA É A ÚLTIMA LINHA DO SEU SCRIPT.JS (Não apague ela!)// ==========================================
  // NAVBAR INTELIGENTE (TIPO EMPRESA GRANDE)
  // ==========================================
  let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Se a pessoa rolar a tela para baixo E já tiver passado do topo (100px)
    if (scrollTop > lastScrollTop && scrollTop > 100) {
      navbar.classList.add("nav-hidden"); // Esconde a barra
    } else {
      navbar.classList.remove("nav-hidden"); // Mostra a barra de novo
    }
    
    // Salva a posição atual para comparar no próximo movimento
    lastScrollTop = scrollTop;
  });
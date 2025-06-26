// Menü Verileri (JSON formatında)
const menuData = {
  categories: [
    {
      name: "Espresso Bazlı",
      items: [
        { name: "Espresso", price: 120, description: "Klasik espresso" },
        { name: "Espresso Macchiato", price: 125, description: "Espresso ve süt köpüğü" },
        { name: "Americano", price: 130, description: "Espresso ve sıcak su" },
        { name: "Cappuccino", price: 140, description: "Espresso, süt ve süt köpüğü" },
        { name: "Flat White", price: 140, description: "Espresso ve düz süt" },
        { name: "Latte", price: 140, description: "Espresso ve süt" },
        { name: "Latte Macchiato", price: 140, description: "Süt ve espresso" },
        { name: "Caramel Latte", price: 155, description: "Latte ve karamel" },
        { name: "Salted Caramel Latte", price: 155, description: "Latte ve tuzlu karamel" },
        { name: "Hazelnut Latte", price: 155, description: "Latte ve fındık" },
        { name: "Lotus Latte", price: 155, description: "Latte ve lotus" },
        { name: "Popcorn Latte", price: 155, description: "Latte ve mısır" },
        { name: "Vanilla Latte", price: 155, description: "Latte ve vanilya" },
        { name: "Pumpkin Spice Latte", price: 155, description: "Latte ve balkabağı baharatı" },
        { name: "Chocolate Mocha", price: 155, description: "Espresso, çikolata ve süt" },
        { name: "White Chocolate Mocha", price: 155, description: "Espresso, beyaz çikolata ve süt" }
      ]
    },
    {
      name: "Buzlu Kahveler",
      items: [
        { name: "Iced Americano", price: 130, description: "Soğuk americano" },
        { name: "Iced Latte", price: 140, description: "Soğuk latte" },
        { name: "Iced Caramel Latte", price: 155, description: "Soğuk karamel latte" },
        { name: "Iced Salted Caramel Latte", price: 155, description: "Soğuk tuzlu karamel latte" },
        { name: "Iced Hazelnut Latte", price: 155, description: "Soğuk fındık latte" },
        { name: "Iced Lotus Latte", price: 155, description: "Soğuk lotus latte" },
        { name: "Iced Popcorn Latte", price: 155, description: "Soğuk mısır latte" },
        { name: "Iced Vanilla Latte", price: 155, description: "Soğuk vanilya latte" },
        { name: "Iced Pumpkin Spice Latte", price: 155, description: "Soğuk balkabağı latte" },
        { name: "Iced Chocolate Mocha", price: 155, description: "Soğuk çikolata mocha" },
        { name: "Iced White Chocolate Mocha", price: 155, description: "Soğuk beyaz çikolata mocha" },
        { name: "Iced Cafe Misto", price: 120, description: "Soğuk cafe misto" },
        { name: "Iced Red-Eye", price: 135, description: "Soğuk red-eye" },
        { name: "Iced Black-Eye", price: 135, description: "Soğuk black-eye" },
        { name: "Iced Dead-Eye", price: 140, description: "Soğuk dead-eye" },
        { name: "Iced Matcha", price: 130, description: "Soğuk matcha" },
        { name: "Iced Dirty Matcha", price: 145, description: "Soğuk kirli matcha" }
      ]
    },
    {
      name: "Buzlu İçecekler",
      items: [
        { name: "Orange&Mango", price: 110, description: "Portakal ve mango" },
        { name: "Cool Lime", price: 110, description: "Serinletici lime" },
        { name: "X on the Beach", price: 110, description: "Tropik karışım" },
        { name: "Berry Hibiscus", price: 110, description: "Orman meyveleri ve hibiskus" },
        { name: "Strawberry & Açai", price: 110, description: "Çilek ve açai" }
      ]
    },
    {
      name: "V60 Filtre Kahve",
      items: [
        { name: "Filtre Kahve", price: 100, description: "V60 filtre kahve" },
        { name: "Cafe Misto", price: 120, description: "Kahve ve süt" },
        { name: "TeaBrew by Kallabi", price: 115, description: "Özel çay demleme" },
        { name: "Red-Eye", price: 130, description: "Filtre kahve ve espresso" },
        { name: "Black-Eye", price: 135, description: "Filtre kahve ve 2 espresso" },
        { name: "Dead-Eye", price: 140, description: "Filtre kahve ve 3 espresso" }
      ]
    },
    {
      name: "Geleneksel Kahveler",
      items: [
        { name: "Türk Kahvesi", price: 80, description: "Geleneksel Türk kahvesi" },
        { name: "Duble Türk Kahvesi", price: 110, description: "Çift Türk kahvesi" },
        { name: "Dibek Kahvesi", price: 80, description: "Dibek kahvesi" },
        { name: "Sütlü Türk Kahvesi", price: 90, description: "Sütlü Türk kahvesi" }
      ]
    },
    {
      name: "Sıcak İçecekler",
      items: [
        { name: "Sıcak Çikolata", price: 120, description: "Sıcak çikolata" },
        { name: "Beyaz Sıcak Çikolata", price: 120, description: "Beyaz sıcak çikolata" },
        { name: "Chai Tea Latte", price: 120, description: "Chai çay latte" },
        { name: "Salep", price: 120, description: "Geleneksel salep" }
      ]
    },
    {
      name: "Cam Şişe Meşrubat",
      items: [
        { name: "Uludağ Premium Su 330ml", price: 40, description: "Premium su" },
        { name: "Rioba Organik Limonata 330ml", price: 90, description: "Organik limonata" },
        { name: "Rioba Organik Smoothie 330ml", price: 90, description: "Organik smoothie" },
        { name: "BenOrganic Portakal Suyu 250ml", price: 95, description: "Organik portakal suyu" },
        { name: "Beypazarı Sade Maden Suyu 200ml", price: 25, description: "Maden suyu" }
      ]
    },
    {
      name: "Bitki Çayları",
      items: [
        { name: "Mangolu Yeşil Çay", price: 100, description: "Mangolu yeşil çay" },
        { name: "Guarana Ginseng", price: 100, description: "Guarana ginseng çayı" },
        { name: "Lady Grey", price: 100, description: "Lady Grey çayı" },
        { name: "Kış Çayı", price: 100, description: "Kış çayı" },
        { name: "Klasik İngiliz Siyah Çayı", price: 100, description: "İngiliz siyah çayı" },
        { name: "Rwanda Siyah Çayı", price: 100, description: "Rwanda siyah çayı" },
        { name: "Darjeeling Siyah Çayı", price: 100, description: "Darjeeling siyah çayı" },
        { name: "Zencefil Limon", price: 25, description: "Zencefil limon çayı" },
        { name: "Karışık Bitki Çayı", price: 25, description: "Karışık bitki çayı" },
        { name: "Ihlamur", price: 25, description: "Ihlamur çayı" },
        { name: "Kuşburnu", price: 25, description: "Kuşburnu çayı" },
        { name: "Nane Limon", price: 25, description: "Nane limon çayı" },
        { name: "Elma Çayı", price: 25, description: "Elma çayı" },
        { name: "Beyaz Çay", price: 25, description: "Beyaz çay" },
        { name: "Adaçayı", price: 25, description: "Adaçayı" },
        { name: "Rezene", price: 25, description: "Rezene çayı" },
        { name: "Orman Meyveleri", price: 25, description: "Orman meyveleri çayı" },
        { name: "Kırmızı Meyveler", price: 25, description: "Kırmızı meyveler çayı" }
      ]
    },
    {
      name: "Matcha",
      items: [
        { name: "Matcha", price: 130, description: "Klasik matcha" },
        { name: "Dirty Matcha", price: 145, description: "Kirli matcha" },
        { name: "Raspberry Cloudy Matcha", price: 200, description: "Ahududu bulutlu matcha" }
      ]
    }
  ]
};

// Sepet Yönetimi
class CartManager {
  constructor() {
    this.cart = new Map(); // itemId -> quantity
    this.total = 0;
  }

  addItem(itemId, quantity = 1) {
    const currentQty = this.cart.get(itemId) || 0;
    this.cart.set(itemId, currentQty + quantity);
    this.updateTotal();
  }

  removeItem(itemId, quantity = 1) {
    const currentQty = this.cart.get(itemId) || 0;
    const newQty = Math.max(0, currentQty - quantity);
    
    if (newQty === 0) {
      this.cart.delete(itemId);
    } else {
      this.cart.set(itemId, newQty);
    }
    this.updateTotal();
  }

  getItemQuantity(itemId) {
    return this.cart.get(itemId) || 0;
  }

  updateTotal() {
    this.total = 0;
    for (const [itemId, quantity] of this.cart) {
      const item = this.getItemById(itemId);
      if (item) {
        this.total += item.price * quantity;
      }
    }
    this.updateTotalDisplay();
  }

  getItemById(itemId) {
    for (const category of menuData.categories) {
      const item = category.items.find(item => item.name === itemId);
      if (item) return item;
    }
    return null;
  }

  updateTotalDisplay() {
    const totalElement = document.getElementById('totalAmount');
    if (totalElement) {
      totalElement.textContent = `₺${this.total}`;
    }
  }

  getCartItems() {
    const items = [];
    for (const [itemId, quantity] of this.cart) {
      const item = this.getItemById(itemId);
      if (item) {
        items.push({ ...item, quantity });
      }
    }
    return items;
  }

  clearCart() {
    this.cart.clear();
    this.total = 0;
    this.updateTotalDisplay();
  }
}

// Menü Renderer
class MenuRenderer {
  constructor(cartManager) {
    this.cartManager = cartManager;
    this.menuContainer = document.getElementById('menuContainer');
  }

  render() {
    this.menuContainer.innerHTML = '';
    
    menuData.categories.forEach(category => {
      const categorySection = this.createCategorySection(category);
      this.menuContainer.appendChild(categorySection);
    });

    // Accordion işlevselliğini ekle
    this.initializeAccordions();
  }

  createCategorySection(category) {
    const section = document.createElement('section');
    section.className = 'menu-category';

    const accordionBtn = document.createElement('button');
    accordionBtn.className = 'accordion';
    accordionBtn.textContent = category.name;

    const panel = document.createElement('div');
    panel.className = 'panel';

    const menuList = document.createElement('div');
    menuList.className = 'menu-list';

    category.items.forEach(item => {
      const menuCard = this.createMenuCard(item);
      menuList.appendChild(menuCard);
    });

    panel.appendChild(menuList);
    section.appendChild(accordionBtn);
    section.appendChild(panel);

    return section;
  }

  createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.dataset.itemId = item.name;

    const title = document.createElement('div');
    title.className = 'menu-title';
    title.textContent = item.name;

    const price = document.createElement('div');
    price.className = 'menu-price';
    price.textContent = `₺${item.price}`;

    const quantityControls = document.createElement('div');
    quantityControls.className = 'quantity-controls';

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const decreaseBtn = document.createElement('button');
    decreaseBtn.className = 'decrease';
    decreaseBtn.textContent = '–';

    const increaseBtn = document.createElement('button');
    increaseBtn.className = 'increase';
    increaseBtn.textContent = '+';

    const quantitySpan = document.createElement('span');
    quantitySpan.className = 'quantity';
    quantitySpan.textContent = '0';

    buttonGroup.appendChild(decreaseBtn);
    buttonGroup.appendChild(increaseBtn);
    quantityControls.appendChild(buttonGroup);
    quantityControls.appendChild(quantitySpan);

    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(quantityControls);

    // Event listeners
    decreaseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.cartManager.removeItem(item.name);
      this.updateCardDisplay(card, item.name);
    });

    increaseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.cartManager.addItem(item.name);
      this.updateCardDisplay(card, item.name);
    });

    return card;
  }

  updateCardDisplay(card, itemId) {
    const quantity = this.cartManager.getItemQuantity(itemId);
    const quantitySpan = card.querySelector('.quantity');
    quantitySpan.textContent = quantity;

    if (quantity > 0) {
      card.classList.add('selected');
    } else {
      card.classList.remove('selected');
    }
  }

  initializeAccordions() {
    document.querySelectorAll('.accordion').forEach(btn => {
      btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        panel.classList.toggle('show');
      });
    });
  }
}

// Modal Yöneticisi
class ModalManager {
  constructor(cartManager) {
    this.cartManager = cartManager;
    this.modal = document.getElementById('orderModal');
    this.orderTable = document.getElementById('orderTable');
    this.initializeModal();
  }

  initializeModal() {
    // Devam Et butonu
    const continueBtn = document.getElementById('continueBtn');
    continueBtn.addEventListener('click', () => this.openModal());

    // Kapat butonu
    const closeBtn = document.getElementById('closeModalBtn');
    closeBtn.addEventListener('click', () => this.closeModal());

    // Siparişi Tamamla butonu
    const completeBtn = document.getElementById('completeOrderBtn');
    completeBtn.addEventListener('click', () => this.completeOrder());

    // Modal dışına tıklayınca kapat
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.renderOrderTable();
    this.modal.style.display = 'flex';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  renderOrderTable() {
    const cartItems = this.cartManager.getCartItems();
    
    if (cartItems.length === 0) {
      this.orderTable.innerHTML = '<p>Siparişinizde ürün bulunmuyor.</p>';
      return;
    }

    let html = '<table><tr><th>Ürün</th><th>Adet</th><th>Fiyat</th></tr>';
    
    cartItems.forEach(item => {
      html += `<tr><td>${item.name}</td><td>${item.quantity}</td><td>₺${item.price * item.quantity}</td></tr>`;
    });

    html += `<tr><th colspan='2'>Toplam</th><th>₺${this.cartManager.total}</th></tr></table>`;
    this.orderTable.innerHTML = html;
  }

  async completeOrder() {
    try {
      // html2canvas yüklü mü kontrol et
      if (!window.html2canvas) {
        await this.loadHtml2Canvas();
      }

      const canvas = await html2canvas(this.modal.querySelector('.modal-content'));
      
      // Yeni pencerede göster
      const imgWindow = window.open('', '_blank');
      imgWindow.document.write('<title>Sipariş Özeti - Kallabi Caffè</title>');
      imgWindow.document.body.appendChild(canvas);
      
      alert('Sipariş ekran görüntüsü alındı!');
      this.closeModal();
      
    } catch (error) {
      console.error('Ekran görüntüsü alınamadı:', error);
      alert('Ekran görüntüsü alınırken bir hata oluştu.');
    }
  }

  async loadHtml2Canvas() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
}

// Ana Uygulama Sınıfı
class MenuApp {
  constructor() {
    this.cartManager = new CartManager();
    this.menuRenderer = new MenuRenderer(this.cartManager);
    this.modalManager = new ModalManager(this.cartManager);
  }

  async init() {
    try {
      // Loading spinner'ı göster
      this.showLoading();
      
      // Menüyü render et
      this.menuRenderer.render();
      
      // Loading spinner'ı gizle
      this.hideLoading();
      
    } catch (error) {
      console.error('Uygulama başlatılırken hata:', error);
      this.hideLoading();
      alert('Menü yüklenirken bir hata oluştu.');
    }
  }

  showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
      spinner.style.display = 'flex';
    }
  }

  hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  }
}

// Uygulamayı başlat
document.addEventListener('DOMContentLoaded', () => {
  const app = new MenuApp();
  app.init();
});

// --- Mobilde sağdan açılır toplam paneli ve butonu ---
function createMobileTotalPanel() {
  // Sadece bir kez ekle
  if (document.getElementById('toggleTotalBox')) return;

  // Toggle butonu
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'toggleTotalBox';
  toggleBtn.className = 'toggle-total-btn';
  toggleBtn.textContent = 'Toplam';
  document.body.appendChild(toggleBtn);

  // Paneli aç/kapa
  toggleBtn.addEventListener('click', () => {
    document.getElementById('totalBox').classList.toggle('open');
  });

  // Panel açıkken dışarı tıklanınca kapansın
  document.addEventListener('click', (e) => {
    const totalBox = document.getElementById('totalBox');
    if (
      window.innerWidth <= 600 &&
      totalBox.classList.contains('open') &&
      !totalBox.contains(e.target) &&
      e.target !== toggleBtn
    ) {
      totalBox.classList.remove('open');
    }
  });
}

// Ekran boyutuna göre paneli yönet
function handleResponsiveTotalBox() {
  const totalBox = document.getElementById('totalBox');
  if (window.innerWidth <= 600) {
    totalBox.classList.add('slide-panel');
    totalBox.classList.remove('open');
    createMobileTotalPanel();
  } else {
    totalBox.classList.remove('slide-panel', 'open');
    const toggleBtn = document.getElementById('toggleTotalBox');
    if (toggleBtn) toggleBtn.remove();
  }
}

window.addEventListener('resize', handleResponsiveTotalBox);
document.addEventListener('DOMContentLoaded', handleResponsiveTotalBox); 
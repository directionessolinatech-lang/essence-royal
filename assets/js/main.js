/**
 * ESSENCE ROYALE - HAUTE PARFUMERIE
 * Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Configuration
  const WHATSAPP_NUMBER = '22893525060';
  
  // Product Database (Nouveaux parfums du client)
  const products = [
    {
      id: 'baccarat-rouge-540',
      name: 'Baccarat Rouge 540',
      tag: 'Extrait de Parfum',
      notesShort: 'Safran Précieux • Bois de Cèdre • Musc Sensuel',
      topNotes: 'Safran Précieux, Éclat Solaire',
      heartNotes: 'Bois de Cèdre Noble, Ambre Gris',
      baseNotes: 'Musc Sensuel, Accord Boisé',
      description: 'Le mariage parfait entre la puissance du bois, la sensualité du musc et l\'éclat du safran.',
      price: '8 000 FCFA',
      category: 'oriental',
      image: 'assets/images/fragrances/media_1789399160337.jpg'
    },
    {
      id: 'intense-noir',
      name: 'Intense Noir',
      tag: 'Eau de Parfum • Homme',
      notesShort: 'Poivre Noir • Lavande • Bois Ambrés',
      topNotes: 'Citron Vert, Bergamote, Poivre Noir',
      heartNotes: 'Lavande Intense, Épices Nobles',
      baseNotes: 'Bois Ambrés, Musc, Sillage Puissant',
      description: 'Une fragrance intense et envoûtante, conçue pour l\'homme moderne qui impose sa présence.',
      price: '10 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789399211206.jpg'
    },
    {
      id: 'brave-noir',
      name: 'Brave Noir',
      tag: 'Mirada Perfumes',
      notesShort: 'Bergamote • Lavande • Bois Ambrés',
      topNotes: 'Bergamote (Fraîcheur Intense), Poivre Noir',
      heartNotes: 'Lavande (Équilibre Parfait)',
      baseNotes: 'Bois Ambrés (Caractère Puissant)',
      description: 'L\'audace d\'une vraie signature. Plus qu\'un parfum... une attitude élégante et intemporelle.',
      price: '9 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789399428076.jpg'
    },
    {
      id: 'surf-pour-homme',
      name: 'Surf Pour Homme',
      tag: 'Mirada Perfumes',
      notesShort: 'Fraîcheur Intense • Sillage Élégant • Esprit Moderne',
      topNotes: 'Notes Marines, Bergamote Fraîche',
      heartNotes: 'Vague d\'Épices Douces, Végétal',
      baseNotes: 'Bois Flotté, Musc & Ambre',
      description: 'L\'élégance au masculin. Une vague de fraîcheur intense qui vous accompagne toute la journée.',
      price: '9 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789400084816.jpg'
    },
    {
      id: 'vanille-bouquet',
      name: 'Vanille Bouquet',
      tag: 'Eau de Parfum',
      notesShort: 'Vanille Authentique • Douceur • Élégance',
      topNotes: 'Fleur d\'Oranger, Douceur Sucre Doré',
      heartNotes: 'Vanille Authentique, Orchidée',
      baseNotes: 'Sillage Envoûtant, Musc Blanc',
      description: 'Une fragrance qui séduit... La douceur gourmande de la vanille alliée à l\'élégance d\'un parfum intemporel.',
      price: '8 000 FCFA',
      category: 'floral',
      image: 'assets/images/fragrances/media_1789400402451.jpg'
    },
    {
      id: 'monark',
      name: 'Monark',
      tag: 'Eau de Parfum • Homme',
      notesShort: 'Orange & Citron • Fruits • Vanille & Ambre',
      topNotes: 'Orange & Citron',
      heartNotes: 'Fruits Gourmands',
      baseNotes: 'Vanille & Ambre',
      description: 'L\'élégance d\'un vrai leader. Un parfum intense pour un homme d\'exception, alliant puissance et charisme.',
      price: '9 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789465330129.jpg'
    },
    {
      id: 'aventos-blue',
      name: 'Aventos Blue For Him',
      tag: 'Eau de Parfum • Homme',
      notesShort: 'Cédrat • Notes Marines • Bois Ambrés',
      topNotes: 'Bergamote, Cédrat',
      heartNotes: 'Notes Marines & Épices',
      baseNotes: 'Bois Ambrés & Musc',
      description: 'L\'homme moderne laisse une empreinte... Un parfum intense pour une présence inoubliable.',
      price: '8 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789465330162.jpg'
    },
    {
      id: 'dome-casabella',
      name: 'Dome Casabella',
      tag: 'Eau de Parfum • Femme',
      notesShort: 'Notes Florales Raffinées • Sillage Envoûtant',
      topNotes: 'Pétales de Rose & Bergamote',
      heartNotes: 'Bouquet Floral Raffiné',
      baseNotes: 'Vanille & Bois Précieux',
      description: 'Une fragrance qui révèle votre féminité... Sensuelle, moderne et intemporelle.',
      price: '8 000 FCFA',
      category: 'floral',
      image: 'assets/images/fragrances/media_1789465330191.jpg'
    },
    {
      id: 'pink-diamond',
      name: 'Pink Diamond',
      tag: 'Eau de Parfum • Femme',
      notesShort: 'Rose & Fruits Rouges • Pivoine • Musc Blanc',
      topNotes: 'Rose & Fruits Rouges',
      heartNotes: 'Fleur de Pivoine & Jasmin',
      baseNotes: 'Bois Précieux & Musc Blanc',
      description: 'Une fragrance qui sublime votre féminité... Plus qu\'un parfum, une histoire d\'amour.',
      price: '4 000 FCFA',
      category: 'floral',
      image: 'assets/images/fragrances/media_1789465430211.jpg'
    },
    {
      id: 'khamrah',
      name: 'Khamrah (Paris Avenue)',
      tag: 'Eau de Parfum • Orientale',
      notesShort: 'Bois de Oud • Épices • Vanille & Café',
      topNotes: 'Épices Orientales & Cardamome',
      heartNotes: 'Fleurs Blanches & Café Warm',
      baseNotes: 'Bois de Oud, Vanille & Ambre',
      description: 'Trois ambiances... une seule émotion. L\'élégance orientale dans toute sa splendeur.',
      price: '2 500 FCFA',
      category: 'oriental',
      image: 'assets/images/fragrances/media_1789465551502.jpg'
    },
    {
      id: 'mosuf',
      name: 'Mosuf',
      tag: 'Eau de Parfum • 50ML',
      notesShort: 'Senteurs Longue Durée • Élégance Intemporelle',
      topNotes: 'Agrumes & Épices Douces',
      heartNotes: 'Notes Boisées & Gourmandes',
      baseNotes: 'Musc Intemporel & Ambre',
      description: 'Plus qu\'un parfum... une émotion. Des senteurs uniques pour une personnalité inoubliable.',
      price: '2 500 FCFA',
      category: 'oriental',
      image: 'assets/images/fragrances/media_1789465609862.jpg'
    },
    {
      id: 'marshmallow-blush',
      name: 'Marshmallow Blush',
      tag: 'Paris Corner',
      notesShort: 'Menthe & Fruits • Vanille • Caramel & Musc',
      topNotes: 'Menthe & Notes Fruitées',
      heartNotes: 'Vanille & Jasmin',
      baseNotes: 'Caramel & Musc Blanc',
      description: 'Une touche de douceur... une explosion de bonheur ! Une expérience gourmande et irrésistible.',
      price: '2 500 FCFA',
      category: 'floral',
      image: 'assets/images/fragrances/media_1789465669518.jpg'
    },
    {
      id: 'lhomme-intense',
      name: 'L\'Homme Intense',
      tag: 'Fragrance Deluxe • Homme',
      notesShort: 'Bergamote & Poivre • Lavande • Ambre & Cèdre',
      topNotes: 'Bergamote, Mandarine, Poivre Noir',
      heartNotes: 'Lavande, Géranium, Bois de Cèdre',
      baseNotes: 'Ambre, Vanille, Musc',
      description: 'Une fragrance qui révèle votre vraie force. Un parfum intense pour un homme d\'exception.',
      price: '8 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789465831451.jpg'
    },
    {
      id: 'suspenso',
      name: 'Suspenso Pour Homme',
      tag: 'Eau de Parfum • avec Déodorant',
      notesShort: 'Bergamote & Citron • Lavande • Ambre & Musc',
      topNotes: 'Bergamote, Citron, Épices',
      heartNotes: 'Lavande, Géranium, Bois de cèdre',
      baseNotes: 'Ambre, Musc, Vétiver',
      description: 'Une fragrance qui révèle votre masculinité... Plus qu\'un parfum, une presence qui se ressent.',
      price: '8 000 FCFA',
      category: 'boise',
      image: 'assets/images/fragrances/media_1789466119388.jpg'
    },
    {
      id: 'exchange-unlimited',
      name: 'Exchange Unlimited (Blanc Édition)',
      tag: 'Eau de Parfum • Blanc Édition',
      notesShort: 'Fleur d\'Oranger & Poire • Jasmin • Santal & Musc',
      topNotes: 'Bergamote, Fleur d\'oranger, Poire',
      heartNotes: 'Jasmin, Fleur de lotus, Pivoine',
      baseNotes: 'Musc blanc, Bois de santal, Ambre',
      description: 'Fraîche, féminine, inoubliable... Une fragrance qui révèle votre élégance naturelle à chaque instant.',
      price: '8 000 FCFA',
      category: 'floral',
      image: 'assets/images/fragrances/media_1789466139082.jpg'
    }
  ];

  // Helper: Generate WhatsApp URL with photo link preview
  function buildWhatsappUrl(productName, price, imagePath) {
    let photoUrl = '';
    if (imagePath) {
      if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        photoUrl = imagePath;
      } else {
        const filename = imagePath.split('/').pop();
        if (window.location.origin && window.location.origin !== 'null' && window.location.origin !== 'file://') {
          photoUrl = window.location.origin + '/assets/images/fragrances/' + filename;
        } else {
          photoUrl = imagePath;
        }
      }
    }

    let text = `👑 *ESSENCE ROYALE — COMMANDE*\n\n`;
    text += `Bonjour Essence Royale, je souhaite commander :\n`;
    text += `✨ *Parfum :* ${productName}\n`;
    text += `💰 *Prix :* ${price}\n`;
    text += `📦 *Contenance :* 100 ML • Extrait de Parfum\n`;
    if (photoUrl) {
      text += `\n📸 *Visuel du parfum :* ${photoUrl}\n`;
    }
    text += `\nPouvez-vous me confirmer la disponibilité et la livraison ? Merci !`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }

  // DOM Elements
  const productsGrid = document.getElementById('products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalOverlay = document.getElementById('quickview-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // SVG Luxury Bottle Graphic Generator (Fallback)
  function getLuxurySvg(product) {
    let bgGrad, accentColor, bottleColor;
    switch(product.id) {
      case 'nectar-saphir':
        bgGrad = 'linear-gradient(135deg, #0A192F 0%, #172A45 100%)';
        bottleColor = '#1B3B6F';
        accentColor = '#F3E089';
        break;
      case 'cuir-epices':
        bgGrad = 'linear-gradient(135deg, #1C0A00 0%, #361700 100%)';
        bottleColor = '#3D1E0B';
        accentColor = '#E5C158';
        break;
      case 'santal-majeste':
        bgGrad = 'linear-gradient(135deg, #2A251D 0%, #423B30 100%)';
        bottleColor = '#D4C4A8';
        accentColor = '#C9A227';
        break;
      case 'rose-souveraine':
        bgGrad = 'linear-gradient(135deg, #2B111B 0%, #4A1E2F 100%)';
        bottleColor = '#8C3B58';
        accentColor = '#F3E089';
        break;
      case 'elixir-dore':
        bgGrad = 'linear-gradient(135deg, #261D00 0%, #4D3C00 100%)';
        bottleColor = '#C9A227';
        accentColor = '#FFF5C0';
        break;
      default: // oud-imperial
        bgGrad = 'linear-gradient(135deg, #120E08 0%, #292013 100%)';
        bottleColor = '#5C4018';
        accentColor = '#E5C158';
    }

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 450" style="width:100%; height:100%; background: ${bgGrad};">
        <defs>
          <radialGradient id="glow-${product.id}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${accentColor}" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="${accentColor}" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="gold-${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#BF953F"/>
            <stop offset="25%" stop-color="#FCF6BA"/>
            <stop offset="50%" stop-color="#B38728"/>
            <stop offset="75%" stop-color="#FBF5B7"/>
            <stop offset="100%" stop-color="#AA771C"/>
          </linearGradient>
        </defs>
        <circle cx="200" cy="225" r="160" fill="url(#glow-${product.id})"/>
        <!-- Cap -->
        <rect x="165" y="60" width="70" height="40" rx="6" fill="url(#gold-${product.id})" stroke="${accentColor}" stroke-width="1"/>
        <rect x="175" y="100" width="50" height="20" fill="url(#gold-${product.id})"/>
        <!-- Body -->
        <path d="M 130 130 Q 200 115 270 130 L 285 360 Q 200 380 115 360 Z" fill="${bottleColor}" stroke="url(#gold-${product.id})" stroke-width="3"/>
        <path d="M 140 140 Q 200 130 260 140 L 270 350 Q 200 365 130 350 Z" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        <!-- Label -->
        <rect x="150" y="190" width="100" height="110" rx="4" fill="#09090A" stroke="url(#gold-${product.id})" stroke-width="2"/>
        <text x="200" y="225" font-family="Cormorant Garamond, serif" font-size="18" font-weight="bold" fill="url(#gold-${product.id})" text-anchor="middle">ESSENCE</text>
        <text x="200" y="245" font-family="Cormorant Garamond, serif" font-size="14" font-weight="bold" fill="#F7F5F0" text-anchor="middle">ROYALE</text>
        <line x1="165" y1="255" x2="235" y2="255" stroke="url(#gold-${product.id})" stroke-width="1"/>
        <text x="200" y="275" font-family="Montserrat, sans-serif" font-size="10" font-weight="600" fill="${accentColor}" text-anchor="middle">${product.name.toUpperCase()}</text>
        <!-- Highlights -->
        <line x1="135" y1="150" x2="142" y2="340" stroke="rgba(255,255,255,0.3)" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `;
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
  }

  // Render Product Cards
  function renderProducts(items) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    items.forEach(p => {
      const waUrl = buildWhatsappUrl(p.name, p.price);
      const fallbackSvg = getLuxurySvg(p);
      
      const card = document.createElement('div');
      card.className = 'product-card';
      card.setAttribute('data-category', p.category);
      
      card.innerHTML = `
        <div class="product-image-container">
          <span class="product-tag">${p.tag}</span>
          <img src="${p.image}" alt="Flacon ${p.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallbackSvg}';">
        </div>
        <div class="product-body">
          <h3 class="product-title text-serif">${p.name}</h3>
          <p class="product-notes">${p.notesShort}</p>
          <p class="product-desc">${p.description}</p>
          <div class="product-meta">
            <div class="product-price">
              <span class="amount">${p.price}</span>
              <span class="volume">100 ML • Extrait de Parfum</span>
            </div>
            <div class="product-actions">
              <button class="btn-quickview" data-id="${p.id}" title="Aperçu Pyramide Olfactive">
                <i class="ri-eye-line"></i>
              </button>
              <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-buy">
                <i class="ri-whatsapp-line"></i> Commander
              </a>
            </div>
          </div>
        </div>
      `;
      productsGrid.appendChild(card);
    });

    // Attach Quick View Click Listeners
    document.querySelectorAll('.btn-quickview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openQuickView(id);
      });
    });
  }

  // Initial Render
  renderProducts(products);

  // Category Filter Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-filter');
      if (category === 'all') {
        renderProducts(products);
      } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
      }
    });
  });

  // Quick View Modal Logic
  function openQuickView(productId) {
    const p = products.find(prod => prod.id === productId);
    if (!p || !modalOverlay) return;

    document.getElementById('modal-img').src = p.image;
    document.getElementById('modal-title').textContent = p.name;
    document.getElementById('modal-subtitle').textContent = p.tag + ' — 100ml Extrait de Parfum';
    document.getElementById('modal-top-notes').textContent = p.topNotes;
    document.getElementById('modal-heart-notes').textContent = p.heartNotes;
    document.getElementById('modal-base-notes').textContent = p.baseNotes;
    document.getElementById('modal-price').textContent = p.price;
    
    const waBtn = document.getElementById('modal-wa-btn');
    if (waBtn) {
      waBtn.href = buildWhatsappUrl(p.name, p.price);
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Mobile Menu Toggle
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.className = navLinks.classList.contains('mobile-open') ? 'ri-close-line' : 'ri-menu-line';
      }
    });
  }

  // Scroll Revealer via IntersectionObserver
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section-header, .universe-card-badge, .pillar-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });
});

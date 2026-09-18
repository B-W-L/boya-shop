/* ============================================================
   BOYA SHOP — JavaScript Page Panier
============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initThemeProduct();
  initHamburgerProduct();
  renderCart();

  document.getElementById('btnClearCart')?.addEventListener('click', () => {
    if (confirm('Vider tout le panier ?')) {
      localStorage.setItem('boyashop-cart', '[]');
      renderCart();
    }
  });
});

function renderCart() {
  const cart = JSON.parse(localStorage.getItem('boyashop-cart') || '[]');
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const summaryEl = document.getElementById('cartSummary');

  updateCartCount();

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    emptyEl.style.display = 'block';
    summaryEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  summaryEl.style.display = 'block';

  itemsEl.innerHTML = '';
  cart.forEach((item, index) => {
    const p = PRODUCTS[item.id];
    if (!p) return;

    const row = document.createElement('div');
    row.className = 'product-card';
    row.style.cssText = 'display:flex; flex-direction:row; align-items:center; gap:16px; margin-bottom:16px; padding:16px;';
    row.innerHTML = `
      <img src="${p.img}" alt="${p.name}" style="width:90px; height:90px; object-fit:cover; border-radius:8px; flex-shrink:0;" />
      <div style="flex:1; min-width:0;">
        <h3 class="product-name" style="margin-bottom:6px;">${p.name}</h3>
        <p class="pd-desc" style="margin:0 0 8px 0; font-size:0.9rem;">
          Taille : ${item.size || '—'} &nbsp;•&nbsp; Couleur : ${item.color || '—'}
        </p>
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:4px;">
          <button class="qty-btn-cart" data-action="minus" data-index="${index}"
            style="width:30px;height:30px;border-radius:50%;border:1px solid rgba(200,160,80,0.5);background:transparent;color:var(--gold,#c8a050);font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">−</button>
          <span style="min-width:24px;text-align:center;font-weight:600;" id="qty-display-${index}">${item.qty}</span>
          <button class="qty-btn-cart" data-action="plus" data-index="${index}"
            style="width:30px;height:30px;border-radius:50%;border:1px solid rgba(200,160,80,0.5);background:transparent;color:var(--gold,#c8a050);font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;">+</button>
          <span class="pd-desc" style="font-size:0.85rem;">article(s)</span>
        </div>
        <p class="product-price gold" style="margin:0;">${p.price}</p>
      </div>
      <button class="fav-btn" data-index="${index}" title="Retirer" style="flex-shrink:0;">🗑️</button>
    `;

    // Bouton supprimer
    row.querySelector('button[title="Retirer"]').addEventListener('click', () => {
      removeFromCart(index);
    });

    // Boutons quantité
    row.querySelectorAll('.qty-btn-cart').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.action;
        const idx = parseInt(btn.dataset.index);
        updateQty(idx, action);
      });
    });

    itemsEl.appendChild(row);
  });

  updateWhatsappCartLink(cart);
}

function updateQty(index, action) {
  const cart = JSON.parse(localStorage.getItem('boyashop-cart') || '[]');
  if (!cart[index]) return;

  if (action === 'plus') {
    cart[index].qty = (cart[index].qty || 1) + 1;
  } else if (action === 'minus') {
    cart[index].qty = (cart[index].qty || 1) - 1;
    if (cart[index].qty < 1) {
      // Quantité à 0 → supprime l'article
      cart.splice(index, 1);
      localStorage.setItem('boyashop-cart', JSON.stringify(cart));
      renderCart();
      return;
    }
  }

  localStorage.setItem('boyashop-cart', JSON.stringify(cart));
  renderCart();
}

function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('boyashop-cart') || '[]');
  cart.splice(index, 1);
  localStorage.setItem('boyashop-cart', JSON.stringify(cart));
  renderCart();
}

function updateWhatsappCartLink(cart) {
  const btn = document.getElementById('btnCartWhatsapp');
  if (!btn) return;

  let lines = [`Bonjour BOYA Shop ! 👋\n\nJe souhaite commander :\n`];
  cart.forEach(item => {
    const p = PRODUCTS[item.id];
    if (!p) return;
    lines.push(
      `🛍️ *${p.name}*\n` +
      `💰 Prix : ${p.price}\n` +
      `📏 Taille : ${item.size || '—'}\n` +
      `🎨 Couleur : ${item.color || '—'}\n` +
      `🔢 Quantité : ${item.qty}\n`
    );
  });
  lines.push('Merci de confirmer la disponibilité.');

  const msg = encodeURIComponent(lines.join('\n'));
  const whatsappNumber = cart.length && PRODUCTS[cart[0].id] ? PRODUCTS[cart[0].id].whatsapp : '+905338598144';
  btn.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
}

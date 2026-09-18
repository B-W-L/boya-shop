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
        <p class="pd-desc" style="margin:0 0 6px 0; font-size:0.9rem;">
          Taille : ${item.size || '—'} &nbsp;•&nbsp; Couleur : ${item.color || '—'} &nbsp;•&nbsp; Qté : ${item.qty}
        </p>
        <p class="product-price gold" style="margin:0;">${p.price}</p>
      </div>
      <button class="fav-btn" data-index="${index}" title="Retirer" style="flex-shrink:0;">🗑️</button>
    `;
    row.querySelector('button[data-index]').addEventListener('click', () => {
      removeFromCart(index);
    });
    itemsEl.appendChild(row);
  });

  updateWhatsappCartLink(cart);
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

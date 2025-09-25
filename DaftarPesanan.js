// =======================
// KERANJANG BELANJA
// =======================
let cart = [];

function addToCart(name, price) {
  const item = cart.find(product => product.name === name);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

function removeFromCart(name) {
  cart = cart.filter(product => product.name !== name);
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.qty} - Rp ${item.price * item.qty}`;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Hapus';
    delBtn.onclick = () => removeFromCart(item.name);

    li.appendChild(delBtn);
    cartList.appendChild(li);
  });

  cartTotal.textContent = `Total: Rp ${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Keranjang kosong!');
    return;
  }
  alert('Pesanan berhasil dibuat!');
  cart = [];
  renderCart();
}

// =======================
// DAFTAR PESANAN MANUAL
// =======================
document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.getElementById('orderForm');
  const orderInput = document.getElementById('orderInput');
  const orderList = document.getElementById('orderList');

  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const orderName = orderInput.value.trim();
    if (orderName) {
      const li = document.createElement('li');
      li.textContent = orderName + ' ';

      const delBtn = document.createElement('button');
      delBtn.textContent = 'Hapus';
      delBtn.onclick = () => orderList.removeChild(li);

      li.appendChild(delBtn);
      orderList.appendChild(li);
      orderInput.value = '';
    }
  });
});

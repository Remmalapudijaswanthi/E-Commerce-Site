
const products = [
  { name: 'Gaming Laptop', price: '$89.99', img: 'laptop.jpg', rating: 4 },
  { name: 'Multifunctional High-Capacity Wheeled Travel Bag ', price: '$49.99', img: 'bag.jpg', rating: 5 },
  { name: 'Wooden Board Games', price: '$12.99', img: 'games.jpg', rating: 4.5 },
  { name: 'Study Table for Kids', price: '$28.99', img: 'table.jpg', rating: 4 },
  { name: 'Wireless Buds', price: '$49.99', img: 'buds.jpg', rating: 4 },
  { name: 'Amstrad TV', price: '$78.99', img: 'tv.jpg', rating: 5 },
  { name: 'Charlie and the Chocolate Factory Book', price: '$19.99', img: 'book.jpg', rating: 4.5 },
  { name: 'Alexa smart Speaker', price: '$69.99', img: 'alexa.jpg', rating: 4 },
  { name: 'Study lamp', price: '$38.99', img: 'lamp.jpg', rating: 4 },
  { name: '3D Peel Wallpaper', price: '$18.99', img: 'wall.jpg', rating: 5 },
  { name: 'Buddha Painting', price: '$59.99', img: 'painting.jpg', rating: 4.5 },
  { name: 'Wakefit Velvet Amber Sofa Set for 2', price: '$69.99', img: 'sofa.jpg', rating: 4 }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function renderProducts() {
  const list = document.querySelector('.product-list');
  const query = document.getElementById('searchBox').value.toLowerCase();
  list.innerHTML = '';
  products.filter(p => p.name.toLowerCase().includes(query)).forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
      <button onclick="addToCart(${i})">Add to Cart</button>
      <button onclick="addToWishlist(${i})">Add to Wishlist</button>
    `;
    list.appendChild(div);
  });
}
const renderCart = () => {
  const container = document.querySelector(".cart-items");
  container.innerHTML = cart.length ? cart.map((item, i) => `
    <div>
      <img src="${item.img}" width="50">
      <strong>${item.name}</strong> - ${item.price}
      <button onclick="removeFromCart(${i})">Remove</button>
    </div>
  `).join("") : "<p>No items in cart.</p>";
};

const renderWishlist = () => {
  const container = document.querySelector(".wishlist-items");
  container.innerHTML = wishlist.length ? wishlist.map((item, i) => `
    <div>
      <img src="${item.img}" width="50">
      <strong>${item.name}</strong>
      <button onclick="removeFromWishlist(${i})">Remove</button>
    </div>
  `).join("") : "<p>No items yet.</p>";
};

const addToCart = (i) => {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  alert(products[i].name + " added to cart");
  console.log("🛒 Cart feature working perfectly.");
};

const addToWishlist = (i) => {
  wishlist.push(products[i]);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
  alert(products[i].name + " added to wishlist");
  console.log("💖 Wishlist feature added successfully.");
};

const removeFromCart = (i) => {
  cart.splice(i, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
};

const removeFromWishlist = (i) => {
  wishlist.splice(i, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  renderWishlist();
};


document.getElementById("backToTop").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });


document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
  console.log("🌙 Dark mode toggled.");
};
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon.");
  e.target.reset();
  console.log("📩 Contact form submitted successfully.");
});

document.getElementById("searchBox").oninput = renderProducts;


document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  renderWishlist();
});

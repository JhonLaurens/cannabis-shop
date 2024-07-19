let products = [];
let cart = [];

// Función para cargar los productos
async function loadProducts() {
    try {
        const response = await fetch('/data/products.json');
        products = await response.json();
        displayProducts();
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Función para mostrar los productos en el catálogo
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <input type="number" min="1" value="1" id="quantity-${product.id}">
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productList.appendChild(productCard);
    });
}

// ... [resto del código JavaScript] ...

// Cargar productos al iniciar la página
document.addEventListener('DOMContentLoaded', loadProducts);
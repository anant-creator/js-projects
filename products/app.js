const url = "https://course-api.com/javascript-store-products";


const container = document.querySelector('.products-center');

const fetchProducts = async() => {
    container.innerHTML = `<div class="loading"></div>`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        container.innerHTML = `<p class="error">There was an Error.</p>`;
    }
};

// fetchProducts();

const displayProducts = (list) => {
    const productList = list.map((product) => {
        const { id } = product;
        const { name: title, price } = product.fields;
        const { url: img } = product.fields.image[0];
        const formatedPrice = price / 100;
         return `<a href="product.html?id=${id}" class="single-prodect">
        <img src="${img}" alt="${title}" class="img single-product-img">
        <footer>
          <h5 class="name">${title}</h5>
          <span class="price">$${formatedPrice}</span>
        </footer>
      </a>`
    }).join('');
    container.innerHTML = `<div class="products-container">
          ${productList}
    </div>`
};

const start = async() => {
    const data = await fetchProducts();
    displayProducts(data);
}

start();

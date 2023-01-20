const product = document.querySelector('.product');

const url = "https://course-api.com/javascript-store-single-product";

const fetchUrl = async (url) => {
    try {
        product.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');
        const response = await fetch(`${url}?id=${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        product.innerHTML = `<p class="error">There was a error loading the product please try again later</p>`;
    }
}


function displayData(data) {
    const {colors, company, description, name:title, price} = data.fields;
    const {url:img} = data.fields.image[0];
    const shades = colors.map((color) => `<span class="product-color" style="background-color: ${color}"></span>`).join('');
    const template = `<img src=${img} alt="${title}" class="img">
        <div class="product-info">
            <h3>${title}</h3>
            <h5>${company}</h5>
            <span>${price / 100}</span>
            <div class="colors">
                ${shades}
            </div>
            <p>${description}</p>
            <button class="btn">Add to Cart</button>
        </div>`;
        product.innerHTML = `<div class="product-wrapper">${template}</div>`
   
}

async function start() {
    const data = await fetchUrl(url);
    displayData(data);
}

start();
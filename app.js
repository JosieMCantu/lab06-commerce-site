// import functions and grab DOM elements
import { vintageItem } from '/data.js';
import { renderProduct } from '/render-product.js';

const list = document.getElementById('list');

for (let product of vintageItem){
    const itemElement = renderProduct(product);

}

// Loop through here
// import functions and grab DOM elements
import { vintageItem } from 'data.js';
import { renderProduct } from 'render-product.js';

const list = document.getElementById('list-items');

for (let product of vintageItem){
    const productElement = renderProduct(product);
    list.append(productElement);
}

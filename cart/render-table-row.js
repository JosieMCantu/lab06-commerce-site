import { vintageItem } from '../products/data.js';
import { findById } from '../cart/cart-utils.js';


export function renderTableRow(cartItem){
    const quantity = cartItem.quantity;
    const product = findById(cartItem.id, product);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = product.name;
    quantityTd.textContent = quantity;
    priceTd.textContent = quantity * product.price;
}
























// export function renderProduct(product){
//     const li = document.createElement('li');
//     li.classList.add('product-element');

//     const pImage = document.createElement('p');
//     pImage.textContent = `Image: ${product.image}`;
//     pImage.classList.add('image-element');
//     li.append(pImage);

//     const pId = document.createElement('p');
//     pId.textContent = `Id: ${product.id}`;
//     pId.classList.add('id-element');
//     li.append(pId);

//     const pName = document.createElement('p');
//     pName.textContent = `Name: ${product.name}`;
//     pName.classList.add('name-element');
//     li.append(pName);

//     const pPrice = document.createElement('p');
//     pPrice.textContent = `Price: ${product.price}`;
//     pPrice.classList.add('price-element');
//     li.append(pPrice);

//     const pColor = document.createElement('p');
//     pColor.textContent = `Color: ${product.color}`;
//     pColor.classList.add('color-element');
//     li.append(pColor);

//     const pSize = document.createElement('p');
//     pSize.textContent = `Size: ${product.size}`;
//     pSize.classList.add('size-element');
//     li.append(pSize);

//     const addButton = document.createElement('button');
//     addButton.textContent = 'Add to Cart';
//     li.append(addButton);

//     return li;
// }

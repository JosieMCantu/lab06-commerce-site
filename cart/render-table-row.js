import { calcItemTotal } from './cart-utils.js';

export function renderTableRow(cartItem, product){
    const tr = document.createElement('tr');
    
    const quantity = cartItem.quantity;
    const nameTd = document.createElement('td');
    nameTd.textContent = product.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${calcItemTotal(cartItem, product)}`;

    tr.append(nameTd, quantityTd, priceTd);
    return tr;
    
}

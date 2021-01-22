// import { cart } from '../cart/cart-data.js';
import { vintageItem } from '../products/data.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { findById } from './cart-utils.js';
import { calcOrderTotal } from './cart-utils.js';
import { getCart, clearCart } from '../cart/cart.js';

const cart = getCart();

const tbody = document.querySelector('tbody');
for (let item of cart) {
    const product = findById(item.id, vintageItem);
    const dom = renderTableRow(item, product);

    tbody.append(dom);
}

const total = calcOrderTotal(cart, vintageItem);
const tr = document.createElement('tr');

const tdEmpty1 = document.createElement('td');
tr.append(tdEmpty1);

const tdEmpty2 = document.createElement('td');
tr.append(tdEmpty2);

const tdTotal = document.createElement('td');
tdTotal.textContent = `Cart Total: $${total}`;
tr.append(tdTotal);
tbody.append(tr);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    clearCart();
    alert(JSON.stringify(cart, true, 2));
    location.reload();
    location.href = '../index.html';

});

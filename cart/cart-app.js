import { cart } from '../cart/cart-data.js';
import { vintageItem } from '../products/data.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { findById } from './cart-utils.js';
import { calcOrderTotal } from './cart-utils.js';


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

// /// add event listener here to cart buttons
//     // add alert on click
//     addButton.addEventListener('click', => {
//         const cart = getCart();
//         alert(JSON.stringify(cart, true));
//     });





















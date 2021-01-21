import { cart } from '../cart/cart-data.js';
import { vintageItem } from '../products/data.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { findById } from './cart-utils.js';


const tbody = document.querySelector('tbody');
for (let item of cart) {
    const product = findById(item.id, vintageItem);
    const dom = renderTableRow(item, product);

    tbody.append(dom);
}























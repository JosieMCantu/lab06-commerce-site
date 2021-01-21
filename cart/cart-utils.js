
export function findById(id, array){
    for (let product of array) {
        if (product.id === id){
            return product;
        }
    }
}

export function calcItemTotal(cartItem, product){
    const itemTotal = cartItem.quantity * product.price;
    return itemTotal;
}


export function calcOrderTotal(cart, vintageItem){
    let total = 0;
   for(let product of cart){
       const matchingProduct = findById(product.id, vintageItem);
       const lineTotal = calcItemTotal(product, matchingProduct);
       total = total + lineTotal;
   }
    return total;
}














// const totalForThisProduct = getProductTotal(item, product)
// total = total + totalForThisProduct;

// const tableRowElement = renderTableRow(item, product);

// const tr = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');

// td3.textContent = 'Order total:';

// tr.append(td1, td2, td3);

// table.append(tr);

export function findById(id, array){
    for (let product of array) {
        if (product.id === id){
            return product;
        }
    }
}

export function calcItemTotal(cartItem, product){
    return cartItem.quantity * product.price;
}

let total = 0;
export function calcOrderTotal(cart, vintageItem){
   for(let product of cart){
       const matchingProduct = findById(product.id, vintageItem);
       const lineTotal = calcItemTotal(product, matchingProduct);
       total = total + lineTotal;
   }
    return total;
}

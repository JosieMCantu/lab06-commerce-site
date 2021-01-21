export function findById(id, array){
    for (let product of array) {
        if (product.id === id){
            return product;
        }
    }
}

export function calcItemTotal (cartItem, product){
    const itemTotal = cartItem.quantity * product.price;
    return itemTotal;
}

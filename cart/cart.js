import { findById } from '../cart/cart-utils.js';

const CART = 'CART'; // Magic string
const defaultEmptyCart = []; // Empty cart

// Getting the cart from localStorage
export function getCart(){
    const stringyCart = localStorage.getItem(CART);

// If the cart has something in it parse it
    if (stringyCart){
        const parsedCart = JSON.parse(stringyCart);
        return parsedCart;

// If there is nothing there return an empty cart
    } else {

    // Stringify's the empty cart
        const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringyDefaultCart);
        return defaultEmptyCart;
    }
}

// Clears the cart after purchase
export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
    localStorage.setItem(CART, stringyDefaultCart);
}

// sets the cart w whatever is in it
export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);
    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id) {
// get the cart from local storage
    const cart = getCart();

// check if the id is already in the cart
    const cartItem = findById(id, cart);

// if so, increment the quantity
    if (cartItem) {
        cartItem.quantity++;
    } else {
// if its not in the cart put one in there w the quantity of 1
        const newItem = {
            id: id,
            quantity: 1
        };
        cart.push(newItem);
    }
    setCart(cart);
}
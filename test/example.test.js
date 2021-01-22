// IMPORT MODULES under test here:
import { calcOrderTotal } from '../cart/cart-utils.js';
import { cart } from '../cart/cart-data.js';
import { vintageItem } from '../products/data.js';
import { calcItemTotal } from '../cart/cart-utils.js';
import { renderTableRow } from '../cart/render-table-row.js';
import { findById } from '../cart/cart-utils.js';
import { renderProduct } from '../products/render-product.js';
import { clearCart, getCart, setCart } from '../cart/cart.js';

const test = QUnit.test;

test('setCart should stringify contents of cart and send to loacl storage', (expect) => {
    const testCart = [
        {
            id: 1,
            quantity: 5
        },
        {
            id: 2,
            quantity: 3
        },
        {
            id: 3,
            quantity: 3
        },
        {
            id: 4,
            quantity: 2
        }
    ];


    const stringyCart = setCart(testCart);
    setCart(testCart);
    const expected = stringyCart;

    const actual = getCart();


    expect.deepEqual(actual, expected);
});

test('clearCart should stringify the default cart and set it into local storage and return an empty cart', (expect) => {



    const expected = [];

    clearCart();

    const actual = getCart();

    expect.deepEqual(actual, expected);
});

test('calcOrderTotal should take in a cart item and an array item', (expect) => {
    
    //Arrange
    // Set up your arguments and expectations
    const expected = 1170;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcOrderTotal(cart, vintageItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should take in 3 and 65 sould return 195', (expect) => {
    const cartProduct = {
        id: 1,
        quantity: 3
    };
    const product = {
        image: 1940,
        id: 1,
        name: 'Cowboy Hat',
        price: 65,
        color: 'red',
        size: 10,
    };
    
    //Arrange
    // Set up your arguments and expectations
    const expected = 195;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(cartProduct, product);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('should take in a cart line item and return a table row', (expect) => {
    const cartProduct = {
        id: 1,
        quantity: 5
    };
    const product = {
        image: 1940,
        id: 1,
        name: 'Cowboy Hat',
        price: 65,
        color: 'red',
        size: 10,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = `<tr><td>Cowboy Hat</td><td>5</td><td>$325</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartProduct, product);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

export const vItem = [
    {
        image: 1940,
        id: 1,
        name: 'Cowboy Hat',
        price: 65,
        color: 'red',
        size: 10,
    },
    {
        image: 1930,
        id: 2,
        name: 'Shoe Horn',
        price: 100,
        color: 'wood',
        size: 'small',
    },
    {
        image: 1950,
        id: 3,
        name: 'Belt Buckle',
        price: 165,
        color: 'silver',
        size: 'large',
    },
    {
        image: 1910,
        id: 4,
        name: 'Spurs',
        price: 25,
        color: 'gold',
        size: 'large',
    }
];

test('should take and id and array and return the object with same id from array', (expect) => {

    //Arrange
    // Set up your arguments and expectations
    const expected = {
        image: 1940,
        id: 1,
        name: 'Cowboy Hat',
        price: 65,
        color: 'red',
        size: 10,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, vintageItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in a product and return an li', (expect) => {
    const listProducts = {
        image: 1940,
        id: 1,
        name: 'Cowboy Hat',
        price: 65,
        color: 'red',
        size: 10,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="product-element"><p class="image-element">Image: 1940</p><p class="id-element">Id: 1</p><p class="name-element">Name: Cowboy Hat</p><p class="price-element">Price: 65</p><p class="color-element">Color: red</p><p class="size-element">Size: 10</p><button>Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(listProducts);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

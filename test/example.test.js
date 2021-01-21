// IMPORT MODULES under test here:

import { calcItemTotal } from '../cart/cart-app.js';

const test = QUnit.test;

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
    const actual = calcItemTotal(,);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
// import { calcItemTotal } from '../cart/cart-app.js';

// const test = QUnit.test;

// test('should take in 3 and 65 sould return 195', (expect) => {
//     const cartProduct = {
//         id: 1,
//         quantity: 3
//     };
//     const product = {
//         image: 1940,
//         id: 1,
//         name: 'Cowboy Hat',
//         price: 65,
//         color: 'red',
//         size: 10,
//     };
    
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = 195;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = calcItemTotal(cartProduct, product);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });



// IMPORT MODULES under test here:
// import { renderTableRow } from '../cart/render-table-row.js';

// const test = QUnit.test;

// test('should take in a cart line item and return a table row', (expect) => {
//     const cartProduct = {
//         id: 1,
//         quantity: 5
//     };
//     const product = {
//         image: 1940,
//         id: 1,
//         name: 'Cowboy Hat',
//         price: 65,
//         color: 'red',
//         size: 10,
//     };
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = `<tr><td>Cowboy Hat</td><td>5</td><td>65</td></tr>`
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderTableRow(cartProduct, product);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });



// test('should take in 3 and 65 and return 195', (expect) => {

//     //Arrange
//     // Set up your arguments and expectations
//     const expected = 195;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = calcItemTotal(3, 65);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });


// import { findById } from '../cart/cart-utils.js';
// export const vintageItem = [
// {
//     image: 1940,
//     id: 1,
//     name: 'Cowboy Hat',
//     price: 65,
//     color: 'red',
//     size: 10,
// },
// {
//     image: 1930,
//     id: 2,
//     name: 'Shoe Horn',
//     price: 100,
//     color: 'wood',
//     size: 'small',
// },
// {
//     image: 1950,
//     id: 3,
//     name: 'Belt Buckle',
//     price: 165,
//     color: 'silver',
//     size: 'large',
// },
// {
//     image: 1910,
//     id: 4,
//     name: 'Spurs',
//     price: 25,
//     color: 'gold',
//     size: 'large',
// }
// ];
// const test = QUnit.test;

// test('should take and id and array and return the object with same id from array', (expect) => {

//     //Arrange
//     // Set up your arguments and expectations
//     const expected = {
//         image: 1940,
//         id: 1,
//         name: 'Cowboy Hat',
//         price: 65,
//         color: 'red',
//         size: 10,
//     }
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = findById(1, vintageItem);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });







// import { renderProduct } from '../render-product.js';
// const test = QUnit.test;
// test('should take in a product and return an li', (expect) => {
//     const listProducts = {
//         image: 1940,
//         id: 1,
//         name: 'Cowboy Hat',
//         price: 65,
//         color: 'red',
//         size: 10,
//     };
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = `<li class="product-element"><p class="image-element">Image: 1940</p><p class="id-element">Id: 1</p><p class="name-element">Name: Cowboy Hat</p><p class="price-element">Price: 65</p><p class="color-element">Color: red</p><p class="size-element">Size: 10</p><button>Add to Cart</button></li>`;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderProduct(listProducts);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });


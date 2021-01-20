// IMPORT MODULES under test here:
import { renderProduct } from '../render-product.js';

const test = QUnit.test;

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
    const expected = `<li><p class="image-element">Image: 1940</p><p class="id-element">Id: 1</p><p class="name-element">Name: Cowboy Hat</p><p class="price-element">Price: 65</p><p class="color-element">Color: red</p><p class="size-element">Size: 10</p><button>Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(listProducts);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


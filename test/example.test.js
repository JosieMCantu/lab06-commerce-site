// IMPORT MODULES under test here:
import { renderProduct } from '../render-product.js';

const test = QUnit.test;

test('should take in a product and return an li', (expect) => {
    const cowBoyHat  = {
        image: 1940,
        id: 1,
        name: 'Cowboy Hat',
        price: 65,
        color: 'red',
        size: 10,
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h2>Cowboy Hat</h2>
    <p class="image-element">Image: 1940</p>
    <p class="id-element">Id:</p>
    <p class="name-element">Name:</p>
    <p class="price-element">Price:</p>
    <p class="color-element">Color:</p>
    <p class="size-element">Size:</p>
    <p><button id="add-button" value="id">Add to Cart</button></p>
</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProduct(cowBoyHat);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


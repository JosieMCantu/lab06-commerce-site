// get things on the page here
export function renderProduct(product){
    const li = document.createElement('li');

    const h2 = document.createElement('h2');
    h2.textContent = product.name;
    li.append(h2);

    const pImage = document.createElement('p');
    pImage.textContent = `Image: ${product.image}`;
    pImage.classList.add('image-element');
    li.append(pImage);

    

    return li;
}
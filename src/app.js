import { ProductItem } from './ProductItem.js';
import { appendElement } from './render.js';
import { CategoriesDropdown, CategoriesSelect } from './CategoriesDropdown.js';

export let products;

async function fetchData(filename) {
    try {
        const response = await fetch(`./data/${filename}`);
        return await response.json();
    } catch (error) {
        console.log('error', error);
    }
}

export async function startApp() {
    products = await fetchData('products.json');
    const categories = await fetchData('categories.json');

    appendElement(document.body, `<h1>My shop</h1>`);
    appendElement(document.body, CategoriesDropdown(categories));
    document.getElementById('categoriesSelect').append(CategoriesSelect(categories));
    appendElement(document.body, `<div id="products"></div>`);

    showProducts(products, categories);
}

export function showProducts(products, categories) {
    const productsElement = document.getElementById('products');
    productsElement.innerText = '';
    products.forEach(product => {
        appendElement(productsElement, ProductItem(product, categories));
    });
}
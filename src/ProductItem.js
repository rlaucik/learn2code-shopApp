import { Image } from './Image.js';

const style = "min-width:500px; float: left; clear: both; border: 5px solid silver; margin-bottom: 20px";

export function ProductItem(product, categories) {
    return `
        <div style="${style}">
            ${Image(product.thumbnail)}
            <p><strong>${product.name}</strong></p>
            <p>Category: ${getCategoryNameById(categories, product.categoryId)}</p>
            <p>Price: ${product.price} €</p>
        </div>
    `;
}

function getCategoryNameById(categories, productCategoryId) {
    return categories.filter(category => category.id === productCategoryId)[0].name;
}

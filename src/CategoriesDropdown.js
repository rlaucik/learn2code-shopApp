import { showProducts, products } from "./app";

export const CategoriesDropdown = () =>
    `<div>
        <strong>Categories: </strong>
        <div style="margin: 5px 0 25px" id="categoriesSelect"></div>
    </div>
`;

export const CategoriesSelect = categories => {
    const element = document.createElement('select');
    const categoriesWithAll = [
        {
            name: 'All products',
            id: "0",
        },
        ...categories,
    ];
    element.innerHTML = CategoriesOptions(categoriesWithAll);
    element.addEventListener('change', event => {
        const categoryId = event.target.value;
        showProducts(getProductsFromCategory(products, categoryId), categories);
    });
    return element;
}

const CategoriesOptions = categories =>
    categories.reduce((result, category) => result += CategoryOption(category), '');

const CategoryOption = category =>
    `<option value="${category.id}">${category.name}</option>`;

export const getProductsFromCategory = (products, categoryId) => {
    if (categoryId === "0") {
        return products;
    }
    return products.filter(product => categoryId === product.categoryId);
}
import { showProducts, products } from "./app";

export const CategoriesDropdown = () => `
    <strong>Categories: </strong>
    <div style="margin: 5px 0 25px" id="categoriesSelect"></div>
`;

export const CategoriesSelect = categories => {
    const element = document.createElement('select');
    element.innerHTML = CategoriesOptions(categories);
    return element;
}

const CategoriesOptions = categories =>
    categories.reduce((result, category) => result += CategoryOption(category), '');

const CategoryOption = category =>
    `<option value="${category.id}">${category.name}</option>`;

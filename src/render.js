export function appendElement(parent, content) {
    const element = document.createElement('div');
    element.innerHTML = content;
    parent.append(element);
    return element;
}
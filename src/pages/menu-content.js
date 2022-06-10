import menuData from './menu-content.json';
import './menu-content.css';

function createMenuDiv(){
    const menuDiv = document.createElement('div');
    const menu = menuData.menu;

    menuDiv.classList.add('menu');

    for ( let i = 0; i < menu.length; i++){
        const newCategoryDiv = createCategoryDiv(menu[i]['category-name']);
        const menuItemsDiv = newCategoryDiv.querySelector('.menu-items');
        const menuItems = menu[i].options;

        for (let j = 0; j < menuItems.length; j++){
            menuItemsDiv.appendChild(createMenuItem(menuItems[j]));
        }

        menuDiv.appendChild(newCategoryDiv);

    }

    return menuDiv;
}

function createCategoryDiv(menuCategory){
    const categoryDiv = document.createElement('div');
    const categoryHeader = document.createElement('h1');
    const menuItemsDiv = document.createElement('div');

    categoryDiv.classList.add('category');

    categoryHeader.classList.add("menu-category-header");
    categoryHeader.textContent = menuCategory;

    menuItemsDiv.classList.add("menu-items");

    categoryDiv.appendChild(categoryHeader);
    categoryDiv.appendChild(menuItemsDiv);

    return categoryDiv;

}

function createMenuItem(menuItem){
    const menuItemDiv = document.createElement('div');
    const name = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('p');

    menuItemDiv.classList.add('menu-item');

    name.textContent = menuItem.name;
    name.classList.add('name');

    description.textContent = menuItem.description;
    description.classList.add('description');

    price.textContent = menuItem.price;
    price.classList.add('price');

    menuItemDiv.appendChild(name);
    menuItemDiv.appendChild(description);
    menuItemDiv.appendChild(price);

    return menuItemDiv;

}

export { createMenuDiv  }
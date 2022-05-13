import { ramenTypes } from "./data";

let menu = {
    name: 'Menu',

    createMenuItem(name, imagePath, description, price) {
    
        const item = document.createElement('div');
        const itemName = document.createElement('h2');
        const imageContainer = document.createElement('div');
        const image = document.createElement('img');
        const descriptionDiv = document.createElement('p');
        const priceDiv = document.createElement('p');
    
        item.classList.add('menu-item');
        imageContainer.classList.add('item-img-container');
        descriptionDiv.classList.add('menu-item-description');
        priceDiv.classList.add('menu-item-price');
        itemName.textContent = name;
        image.src = imagePath;
        imageContainer.append(image);
        descriptionDiv.textContent = description;
        priceDiv.textContent = price;
        item.append(itemName, imageContainer, descriptionDiv, priceDiv);
        return item;
    
    },

    load() {
        const main = document.querySelector('main');
        main.textContent = '';
        const div = document.createElement('div');
        div.classList.add('menu');
        for (let ramen in ramenTypes) {
            div.append(menu.createMenuItem(ramenTypes[ramen].name, ramenTypes[ramen].image, ramenTypes[ramen].description, ramenTypes[ramen].price));
        }
        main.append(div);
    },
    
}

export { menu };
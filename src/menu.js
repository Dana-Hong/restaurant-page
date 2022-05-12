function loadMenu() {
    let ramenTypes = {
        shio: {
            name: 'Shio',
            image: './imgs/shio.png',
            description: 'Rich, fatty pork broth, velvety-soft yolk eggs, fresh noodles, and tender pork belly that melts in your mouth.',
            price: '$9.95'
        },
        shoyu: {
            name: 'Shoyu',
            image: './imgs/shoyu2.png',
            description: 'Shoyu ramen',
            price: '$9.95'
        },
        miso: {
            name: 'Miso',
            image: './imgs/miso.png',
            description: 'miso',
            price: '$9.95'
        },
        tsukemen: {
            name: 'Tsukemen',
            image: './imgs/tsukemen.jpeg',
            description: 'tuskemen',
            price: '$9.95'
        }
    }
    const div = document.createElement('div');
    div.classList.add('menu');
    for (let ramen in ramenTypes) {
        div.append(createMenuItem(ramenTypes[ramen].name, ramenTypes[ramen].image, ramenTypes[ramen].description, ramenTypes[ramen].price))
    }
    let main = document.querySelector('main');
    main.textContent = '';
    main.append(div);

}

function createMenuItem(name, imagePath, description, price) {

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

}

loadMenu();
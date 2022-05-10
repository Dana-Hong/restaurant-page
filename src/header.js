import { loadPage } from './functions';

function loadHeader() {
    const header = document.createElement('header');
    const logo = document.createElement('h1');
    let navList = ['About', 'Menu', 'Contact', 'Order'];
    header.class = 'header';
    logo.textContent = 'Ramen Shop';
    header.append(logo);
    header.append(loadNav(navList));
    document.body.append(header);
    return header;
}

function loadNav(navList) {
    const nav = document.createElement('nav');
    nav.class = 'nav';
    nav.append(loadNavList(navList));
    return nav;
}

function loadNavList(navList) {
    const ul = document.createElement('ul');
    navList.map(navItem => ul.append(loadNavItem(navItem)));
    return ul;
}

function loadNavItem(item) {
    const navItem = document.createElement('li');
    navItem.classList = 'nav-item';
    navItem.textContent = item;
    navItem.addEventListener('click', loadPage)
    return navItem;
}

export { loadHeader, loadNav, loadNavList, loadNavItem };
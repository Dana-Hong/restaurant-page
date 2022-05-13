let home = {
    name: 'Home',

    initialLoad() {
        const main = document.createElement('main');
        const homePage = document.createElement('div');
        const homeHero = document.createElement('div');
        const homeHeaderContainer = document.createElement('div');
        const homeHeader = document.createElement('h1');
        homePage.classList.add('home-page');
        homeHero.classList.add('home-hero');
        homeHeaderContainer.append(homeHeader);
        homeHeaderContainer.classList.add('home-header-container');
        homeHeader.textContent = 'The Best Ramen in Town'.toUpperCase();
        homeHeader.classList.add('home-header');
        homePage.append(homeHeaderContainer, homeHero);
        main.append(homePage);
        document.body.append(main);
        document.querySelector('ul li:first-child').classList.add('current');

    },

    load() {
        const main = document.querySelector('main');
        main.textContent = '';
        const homePage = document.createElement('div');
        const homeHero = document.createElement('div');
        const homeHeaderContainer = document.createElement('div');
        const homeHeader = document.createElement('h1');
        homePage.classList.add('home-page');
        homeHero.classList.add('home-hero');
        homeHeaderContainer.append(homeHeader);
        homeHeaderContainer.classList.add('home-header-container');
        homeHeader.textContent = 'The Best Ramen in Town'.toUpperCase();
        homeHeader.classList.add('home-header');
        homePage.append(homeHeaderContainer, homeHero);
        main.append(homePage);
    },

}

export { home };
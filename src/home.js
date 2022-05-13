let home = {
    name: 'Home',

    initialLoad() {
        const main = document.createElement('main');
        main.textContent = 'Dog';
        document.body.append(main);
    },

    load() {
        const main = document.querySelector('main');
        main.textContent = '';
        const homePage = document.createElement('div');
        const homeHero = document.createElement('div');
        const homeHeader = document.createElement('h1');
        homePage.classList.add('home-page');
        homeHero.classList.add('home-hero');
        homeHeader.textContent = 'The Best Ramen in Town';
        homeHeader.classList.add('home-header');
        homePage.append(homeHeader, homeHero);
        main.append(homePage);
    },
}

export { home };
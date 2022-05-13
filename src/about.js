let about = {
    name: 'About',

    load() {
        const main = document.querySelector('main');
        main.textContent = '';
        const aboutPage = document.createElement('div');
        const aboutHero = document.createElement('div');
        const aboutHeading = document.createElement('h1');
        const aboutText = document.createElement('p');
        const aboutTextContainer = document.createElement('div');
        aboutText.textContent = "Chef Ichiban grew up in on a steady diet of piping hot, delicious ramen. Having a desire to share this exquisite taste with his neighbours wherever he was, he dreamed one day of opening his own ramen store. His desire was realized with Ramen Shop's grand opening in 1964. Here at Ramen Shop, aspire to only use the freshest ingredients, provide a mix of modern and traditional styles of ramen to choose from. Our passion for quality is not matched elsewhere."
        aboutPage.classList.add('about-page');
        aboutHero.classList.add('about-hero');
        aboutHeading.textContent = 'Our Story';
        aboutHeading.classList.add('about-heading');
        aboutText.classList.add('about-text');
        aboutTextContainer.classList.add('about-text-container');
        aboutTextContainer.append(aboutHeading, aboutText);
        aboutPage.append(aboutTextContainer, aboutHero);
        main.append(aboutPage);
    },
};

export { about };
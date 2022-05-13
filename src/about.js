let about = {
    name: 'About',

    load() {
        const main = document.querySelector('main');
        main.textContent = '';
        const div = document.createElement('div');
        const hero = document.createElement('div');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nemo amet adipisci odio incidunt ex soluta expedita id quaerat cum ipsum quis, in eaque exercitationem repellendus tenetur vitae? Nesciunt, error. Minus autem, nihil harum quaerat molestiae, voluptate quae dolor atque obcaecati culpa ipsa quam reprehenderit quidem quo alias a cupiditate! Assumenda ipsa quas, dicta velit nesciunt aliquam repellendus magnam eos.'
        div.classList.add('about-page');
        hero.classList.add('about-hero');
        h1.textContent = 'Our Story';
        h1.classList.add('about-heading');
        p.classList.add('about-text');
        hero.append(h1, p);
        div.append(hero);
        main.append(div);
    },
};

export { about };
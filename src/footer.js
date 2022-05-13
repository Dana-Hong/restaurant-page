function loadFooter(footerList) {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const ul = document.createElement('ul');
    for (let item in footerList) {
        const img = document.createElement('img');
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = footerList[item].url;
        img.src = footerList[item].image;
        link.append(img);
        li.classList.add('icon');
        li.append(link);
        ul.append(li);
    }
    footer.append(ul);
    document.body.append(footer);
}

export { loadFooter };
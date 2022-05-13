import { home } from "./home";


function loadHeader(navList) {
    const header = document.createElement("header");
    const logo = document.createElement("h1");
    header.classList.add("header");
    logo.textContent = "Ramen Shop";
    logo.classList.add('logo');
    logo.addEventListener("click", home.load);
    logo.addEventListener("click", () => {
        const navItemsWithCurrent = document.querySelectorAll(".current");
        for (let navItem of navItemsWithCurrent) {
            navItem.classList.remove("current");
        }
        if (document.querySelector('ul li:first-child').classList[1] === undefined) {
            document.querySelector('ul li:first-child').classList.add("current");
        }
    })
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    for (let item in navList) {
        const li = document.createElement("li");
        li.textContent = navList[item].name;
        li.classList.add("nav-item");
        li.addEventListener("click", navList[item].load);
        li.addEventListener("click", (event) => {
            const navItemsWithCurrent = document.querySelectorAll(".current");
            for (let navItem of navItemsWithCurrent) {
                navItem.classList.remove("current");
            }
            if (event.target.classList[1] === undefined) {
                li.classList.add("current");
            }
        })
        ul.append(li);
    }
    nav.append(ul);
    header.append(logo, nav);
    document.body.append(header);
}

export { loadHeader };
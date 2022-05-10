import { loadNav } from "./header";

function loadFooter() {
    const footer = document.createElement('footer');
    footer.class = 'footer';
    footer.append(loadNav(['Facebook', 'Instagram', 'Twitter']));
    document.body.append(footer);
    return footer;
}

export { loadFooter };
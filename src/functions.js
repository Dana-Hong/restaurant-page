let DOM = {
    create(elementName, className) {
        if (elementName || className !== typeof(String)) {
            return;
        } else {
            const DOMobject = document.createElement(elementName);
            DOMobject.classList.add(className);
        }
        return console.log(DOMobject);
    }
};

export { DOM };
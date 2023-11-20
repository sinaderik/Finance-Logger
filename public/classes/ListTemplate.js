export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, title, position) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        h4.innerText = title;
        p.innerText = item.format();
        li.append(h4);
        li.append(p);
        if (position === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}

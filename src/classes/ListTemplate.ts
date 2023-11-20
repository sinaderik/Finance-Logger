import { HasFormatter } from "../interfaces/HasFormatter";


export class ListTemplate {
    constructor(
        private container: HTMLUListElement
    ) { }

    render(item: HasFormatter, title: string, position: "start" | "end"): void {
        const li=document.createElement("li");
        const h4=document.createElement("h4");
        const p=document.createElement("p");

        h4.innerText=title;
        p.innerText=item.format();
        li.append(h4);
        li.append(p);

        if(position==="start"){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }
    }
}
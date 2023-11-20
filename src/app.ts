import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"
import { ListTemplate } from "./classes/ListTemplate.js"

// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement
// Inputs
const typeSelector = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ul = document.querySelector("ul")!;

const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let document: HasFormatter;
    if (typeSelector.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    } else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    list.render(document, typeSelector.value,"end")
})


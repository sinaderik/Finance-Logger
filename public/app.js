import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// Form
const form = document.querySelector('.new-item-form');
// Inputs
const typeSelector = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let document;
    if (typeSelector.value === 'invoice') {
        document = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        document = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(document, typeSelector.value, "end");
});

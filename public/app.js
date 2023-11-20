"use strict";
// Form
const form = document.querySelector('.new-item-form');
// Inputs
const typeSelector = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        console.log(`${this.client} owes ${this.amount} for ${this.detail}`);
    }
}
const firstInvoice = new Invoice('Reza', 'Gym', 250);
firstInvoice.format();
console.log(firstInvoice);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeSelector.value, toFrom.value, details.value, amount.valueAsNumber);
});

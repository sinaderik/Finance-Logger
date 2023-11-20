"use strict";
// Form
const form = document.querySelector('.new-item-form');
// Inputs
const typeSelector = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeSelector.value, toFrom.value, details.value, amount.valueAsNumber);
});

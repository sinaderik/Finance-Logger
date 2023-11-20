// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement
// Inputs
const typeSelector = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        typeSelector.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})




// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement
// Inputs
const typeSelector = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// classes
class Invoice {
    
    client: string;
    detail: string;
    amount: number;
    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    
    format():void {
        console.log(`${this.client} owes ${this.amount} for ${this.detail}`)
    }
}

const firstInvoice=new Invoice('Reza','Gym',250);
firstInvoice.format();
console.log(firstInvoice)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        typeSelector.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})




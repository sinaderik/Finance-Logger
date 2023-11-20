import { HasFormatter } from "../interfaces/HasFormatter"


export class Invoice implements HasFormatter{
    constructor(
        private client: string,
        private detail: string,
        private amount: number
    ) { }

    format(): string {
        return `${this.client} owes ${this.amount} for ${this.detail}`
    }
}

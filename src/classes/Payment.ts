import { HasFormatter } from "../interfaces/HasFormatter"


export class Payment implements HasFormatter {
    // client: string;
    // detail: string;
    // amount: number;
    constructor(
        private recipient: string,
        private detail: string,
        private amount: number
    ) { }

    format(): string {
        return `${this.recipient} is owed ${this.amount} for ${this.detail}`
    }
}

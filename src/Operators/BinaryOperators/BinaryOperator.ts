import {Operator} from "../Operator";
const safeEval = require('safe-eval')

// Shared parent class for all binary operators
export class BinaryOperator extends Operator
{
    protected Operand: number;
    protected Operand2: number;
    
    protected constructor() {
        super();
        if (this.Operands.length !== 2) {
            throw new Error("You must pass two operands to a binary operator");
        }
        
        this.Operand = this.Operands[0];
        this.Operand2 = this.Operands[1];
    }

    toString(): string {
        return `(${this.Operand} ${this.OperatorUsedInToString} ${this.Operand2})`;
    }

    performOperation(): number {
        const operator: string = String.fromCharCode(this.Operator);
        return safeEval(this.Operand + operator + this.Operand);
    }
}
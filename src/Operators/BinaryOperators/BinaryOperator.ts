import {Operator} from "../Operator";
const safeEval = require('safe-eval')

// Shared parent class for all binary operators
export class BinaryOperator extends Operator
{
    toString(operands: string[]): string {
        return `(${operands[0]} ${this.OperatorUsedInToString} ${operands[1]})`;
    }

    performOperation(operands: number[]): number {
        const operator: string = String.fromCharCode(this.Operator);
        return safeEval(operands[0] + operator + operands[1]);
    }
}
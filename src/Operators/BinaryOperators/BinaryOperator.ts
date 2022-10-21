import {IOperator} from "../IOperator";
const safeEval = require('safe-eval')

// Shared parent class for all binary operators
export class BinaryOperator implements IOperator
{
    readonly Operator: number;
    readonly OperatorUsedInToString: string;
    
    toString(operands: string[]): string {
        return `(${operands[0]} ${this.OperatorUsedInToString} ${operands[1]})`;
    }

    performOperation(operands: number[]): number {
        const operator: string = String.fromCharCode(this.Operator);
        // I just received this warning, 'Sandbox Breakout / Arbitrary Code Execution'. I'll fix this soon.
        return safeEval(operands[0] + operator + operands[1]);
    }
}
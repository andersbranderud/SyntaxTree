import {Operator} from "../Operator";
const safeEval = require('safe-eval')

// Shared parent class for all binary operators
export abstract class UnaryOperator extends Operator {
    abstract toString(operands: string[]): string;
    abstract performOperation(operands: number[]): number;
}

import {IOperator} from "../IOperator";

// Shared parent class for all binary operators
export abstract class BinaryOperator implements IOperator
{
    readonly OperatorUsedInToString: string;
    
    toString(operands: string[]): string {
        return `(${operands[0]} ${this.OperatorUsedInToString} ${operands[1]})`;
    }

    abstract performOperation(operands: number[]): number;
}
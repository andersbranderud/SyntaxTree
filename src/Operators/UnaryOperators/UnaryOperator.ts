import {IOperator} from "../IOperator";

// Shared parent class for all binary operators
export abstract class UnaryOperator implements IOperator {
    abstract toString(operands: string[]): string;
    abstract performOperation(operands: number[]): number;
}

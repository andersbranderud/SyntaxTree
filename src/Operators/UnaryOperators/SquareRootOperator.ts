import {UnaryOperator} from "./UnaryOperator";

export class SquareRootOperator extends UnaryOperator {
    performOperation(operands: number[]): number {
        return Math.sqrt(operands[0]);
    }

    toString(operands: string[]): string {
        return `sqrt(${operands[0]})`;
    }
}

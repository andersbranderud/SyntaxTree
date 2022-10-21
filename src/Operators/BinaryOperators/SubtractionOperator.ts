import {BinaryOperator} from "./BinaryOperator";

export class SubtractionOperator extends BinaryOperator {
    override readonly OperatorUsedInToString = '-';

    performOperation(operands: number[]): number {
        return (operands[0] - operands[1]);
    }
}

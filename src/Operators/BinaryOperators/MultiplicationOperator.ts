import {BinaryOperator} from "./BinaryOperator";

export class MultiplicationOperator extends BinaryOperator {
    override readonly OperatorUsedInToString = 'x';

    performOperation(operands: number[]): number {
        return (operands[0]  * operands[1]);
    }
}

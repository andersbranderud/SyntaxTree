import {BinaryOperator} from "./BinaryOperator";

export class DivisionOperator extends BinaryOperator{
    override readonly OperatorUsedInToString = '÷';

    performOperation(operands: number[]): number {
        return (operands[0] / operands[1]);
    }
}

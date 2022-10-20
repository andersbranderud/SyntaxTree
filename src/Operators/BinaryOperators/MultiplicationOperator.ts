import {BinaryOperator} from "./BinaryOperator";

export class MultiplicationOperator extends BinaryOperator {
    override readonly OperatorUsedInToString = 'x';
    override readonly Operator = '*'.charCodeAt(0);
}

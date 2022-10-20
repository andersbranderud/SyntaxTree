import {BinaryOperator} from "./BinaryOperator";

export class DivisionOperator extends BinaryOperator{
    override readonly OperatorUsedInToString = '/';
    override readonly Operator = '/'.charCodeAt(0);
}

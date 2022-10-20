import {BinaryOperator} from "./BinaryOperator";

export class AdditionOperator extends BinaryOperator
{
    override readonly OperatorUsedInToString = '+';
    override readonly Operator = '+'.charCodeAt(0);
}

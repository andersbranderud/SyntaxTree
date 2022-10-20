import {BinaryOperator} from "./BinaryOperator";

export class SubtractionOperator extends BinaryOperator {
    override readonly OperatorUsedInToString = '-';
    override readonly Operator = '-'.charCodeAt(0);
}

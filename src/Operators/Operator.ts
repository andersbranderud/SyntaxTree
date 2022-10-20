import {IOperator} from './IOperator';

export abstract class Operator implements IOperator
{
    readonly Operator: number;
    readonly OperatorUsedInToString: string;

    abstract performOperation(operands: number[]): number;
    abstract toString(operands: string[]): string;
}
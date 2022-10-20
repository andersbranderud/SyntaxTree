import {IOperator} from './IOperator';

export abstract class Operator implements IOperator
{
    abstract performOperation(operands: number[]): number;
    abstract toString(operands: string[]): string;
}
import {IOperator} from './IOperator';

export abstract class Operator implements IOperator
{
    protected Operands: number[];
    
    // Binary has two operands; unary has one operand.
    constructor(...operands: number[]) {
        this.Operands = operands;
    }
    
    readonly Operator: number;
    readonly OperatorUsedInToString: string;

    abstract performOperation(): number;    
}
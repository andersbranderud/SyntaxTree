import {IOperator} from './IOperator';

export class MultiplicationOperator implements IOperator
{
    performOperation(operand: number, operand2: number): number {
        return operand * operand2;
    }

    toString(operand: string,  operand2: string): string {
        return `(${operand} x ${operand2})`;
    }
    
}

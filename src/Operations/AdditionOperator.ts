import {IOperator} from './IOperator';

export class AdditionOperator implements IOperator
{
    performOperation(operand: number, operand2: number): number {
        return operand + operand2;
    }
    toString(operand: string,  operand2: string): string {
        return `(${operand} + ${operand2})`;
    }
}

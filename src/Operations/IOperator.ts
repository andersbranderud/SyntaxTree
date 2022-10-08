export interface IOperator 
{
    performOperation(operand: number, operand2: number): number;
    toString(operand: string,  operand2: string): string;
}
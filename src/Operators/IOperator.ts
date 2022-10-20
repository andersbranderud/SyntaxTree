export interface IOperator 
{
    performOperation(operands: number[]): number;
    toString(operands: string[]): string;
}
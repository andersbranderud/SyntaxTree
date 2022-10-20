export interface IOperator 
{
    readonly OperatorUsedInToString: string;
    readonly Operator: number;
    performOperation(operands: number[]): number;
    toString(operands: string[]): string;
}
export interface IOperator 
{
    readonly OperatorUsedInToString: string;
    readonly Operator: number;
    performOperation(): number;
    toString(): string;
}
import {IOperator} from './Operations/IOperator';

export class TreeNode {
    private readonly operator: IOperator;
    private readonly value: any;
    private left: any;
    private right: any;

    constructor(operator: IOperator, value: number | null, left: TreeNode | null, right: TreeNode | null) {
        this.value = value;
        this.left = left;
        this.right = right;
    };

    result = (): number => {
        if (this.operator == null) {
            return this.value;
        }
        const leftNodeResult = this.left.result();
        const rightNodeResult = this.right.result();
        return this.operator.performOperation(leftNodeResult, rightNodeResult);
    }

    toString = (): string => {
        if (this.operator == null) {
            return this.value.toString();
        }
        const leftNodeToString = this.left.toString();
        const rightNodeToString = this.right.toString();
        return this.operator.toString(leftNodeToString, rightNodeToString);
    };
}
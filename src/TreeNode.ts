import {IOperator} from './Operations/IOperator';

export class TreeNode {
    private readonly operator: IOperator;
    private readonly value: any;
    private left: any;
    private right: any;

    constructor(operator: IOperator, value: number | null, left: TreeNode | null, right: TreeNode | null) {
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    };

    result = (): number => {
        if (this.operator == null) {
            return this.value;
        }
        return this.operator.performOperation(this.left.result(), this.right.result());
    }

    toString = (): string => {
        if (this.operator == null) {
            return this.value.toString();
        }
        return this.operator.toString(this.left.toString(), this.right.toString());
    };
}
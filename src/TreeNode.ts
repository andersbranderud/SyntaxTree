import {IOperator} from './Operations/IOperator';

export class TreeNode {
    private readonly operator: IOperator;
    private readonly value: any;
    private left: any;
    private right: any;

    constructor(operator: IOperator, value: number | null, left: TreeNode | null, right: TreeNode | null) {
        if ((left === null && right !== null) || (left !== null && right === null)) {
            throw new Error('When left/right is set, both of left and right needs to be set.');
        }
        
        if (operator !== null && !(left !== null && right !== null)) {
            throw new Error('When an operator is set; both left and right needs to be set.');
        }
        
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    };

    result = (): number => {
        if (this.operator === null) {
            return this.value;
        }
        const leftNodeResult = this.left.result();
        const rightNodeResult = this.right.result();
        return this.operator.performOperation(leftNodeResult, rightNodeResult);
    }

    toString = (): string => {
        if (this.operator === null) {
            if (this.value) {
                return this.value.toString();
            }
            return '';
        } 
        const leftNodeToString = this.left.toString();
        const rightNodeToString = this.right.toString();
        return this.operator.toString(leftNodeToString, rightNodeToString);
    };
}
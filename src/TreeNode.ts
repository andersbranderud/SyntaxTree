import {IOperator} from './Operators/IOperator';
import {Operator} from "./Operators/Operator";

export class TreeNode<Operator> {
    private readonly operator: IOperator;
    private readonly value: number | null;
    private readonly leftChild: TreeNode | null;
    private readonly rightChild: TreeNode | null;

    constructor(operator: IOperator, value: number | null, leftChild: TreeNode | null, rightChild: TreeNode | null) {
        if ((leftChild === null && rightChild !== null) || (leftChild !== null && rightChild === null)) {
            throw new Error('When leftChild/rightChild is set, both of leftChild and must be set.');
        }
        
        if (operator !== null && !(leftChild !== null && rightChild !== null)) {
            throw new Error('When an operator is set; both leftChild and rightChild must be set.');
        }
        
        this.operator = operator;
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    };

    result = (): number => {
        if (this.operator === null) {
            return this.value;
        }

        const leftChildResult = this.leftChild.result();
        const rightChildResult = this.rightChild.result();
        const operatorInstance: IOperator = Factory.create(Operator);

        return this.operator.performOperation(leftChildResult, rightChildResult);
    }

    toString = (): string => {
        if (this.operator === null) {
            if (this.value) {
                return this.value.toString();
            }
            return '';
        } 

        const leftChildToString = this.leftChild.toString();
        const rightChildToString = this.rightChild.toString();
        return this.operator.toString(leftChildToString, rightChildToString);
    };
}
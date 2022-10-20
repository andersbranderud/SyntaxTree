import {IOperator} from './Operators/IOperator';
import {Operator} from "./Operators/Operator";
import {BinaryOperator} from "./Operators/BinaryOperators/BinaryOperator";
import {OperatorFactory} from "./Operators/OperatorFactory";
import {UnaryOperator} from "./Operators/UnaryOperators/UnaryOperator";

export class TreeNode {
    private readonly operator: Operator | null = null;
    private readonly value: number | null  = null;
    private readonly firstChild: TreeNode | null  = null;
    private readonly secondChild: TreeNode | null  = null;

    constructor(operatorSign: string | null, value: number | null, firstChild: TreeNode | null, secondChild: TreeNode | null) {
        if (operatorSign !== null) {
            this.operator = OperatorFactory.createOperator(operatorSign);
        }

        if (this.operator instanceof BinaryOperator) {
            if ((firstChild === null && secondChild !== null) || (firstChild !== null && secondChild === null)) {
                throw new Error('When binary operator and firstChild/secondChild is set, both of children must be set.');
            }
    
            if (operatorSign !== null && !(firstChild !== null && secondChild !== null)) {
                throw new Error('When an operator is set; both firstChild and secondChild must be set.');
            }
        }
        else if (this.operator instanceof UnaryOperator) {
            if (operatorSign !== null && secondChild !== null) {
                throw new Error('When an operator is set; secondChild should be set for unary operators.');
            }
            if (operatorSign !== null && firstChild === null) {
                throw new Error('When an operator is set; first child should be set for unary operators.');
            }
        } 
        
        this.value = value;
        this.firstChild = firstChild;
        this.secondChild = secondChild;
    };

    result = (): number => {
        if (this.operator === null) {
            return this.value;
        }

        const operands: number[] = [this.firstChild.result()];
        
        // Unary operators only have one child.
        if (this.secondChild !== null) {
            operands.push(this.secondChild.result());
        }
        
        return this.operator.performOperation(operands);
    }

    toString = (): string => {
        if (this.operator === null) {
            if (this.value) {
                return this.value.toString();
            }
            return '';
        }

        const operands: string[] = [this.firstChild.toString()];
        
        // Unary operators only have one child.
        if (this.secondChild !== null) {
            operands.push(this.secondChild.toString());
        }
        return this.operator.toString(operands);
    };
}
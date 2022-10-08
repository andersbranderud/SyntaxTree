import {Operator} from './Operator';

export class TreeNode {
    private operator: Operator;
    private value: any;
    private left: any;
    private right: any;
    
    constructor(operator: Operator, value: any, left: any, right: any) {
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    };

    result = () => {
        switch (this.operator) {
            case "+":
                return this.left.result() + this.right.result();
            case "-":
                return this.left.result() - this.right.result();
            case "x":
                return this.left.result() * this.right.result();
            case "÷":
                return this.left.result() / this.right.result();
            default:
                return value;
        }
    };

    toString =  () => {
        switch (this.operator) {
            case "+":
                return `(${this.left.toString()} + ${this.right.toString()})`;
            case "-":
                return `(${this.left.toString()} - ${this.right.toString()})`;
            case "x":
                return `(${this.left.toString()} x ${this.right.toString()})`;
            case "÷":
                return `(${this.left.toString()} ÷ ${this.right.toString()})`;
            default:
                return this.value.toString();
        }
    };
    
}
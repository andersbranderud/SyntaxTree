import {Operator} from "./Operator";
import {AdditionOperator} from "./BinaryOperators/AdditionOperator";
import {SubtractionOperator} from "./BinaryOperators/SubtractionOperator";
import {DivisionOperator} from "./BinaryOperators/DivisionOperator";
import {MultiplicationOperator} from "./BinaryOperators/MultiplicationOperator";
import {SquareRootOperator} from "./UnaryOperators/SquareRootOperator";

export class OperatorFactory
{
    static createOperator(operatorSign: string): Operator {
        switch (operatorSign) {
            case "+": return new AdditionOperator()
            case "-": return new SubtractionOperator()
            case "/":
            case "÷":
                return new DivisionOperator();
            case "*":
            case "x":
                return new MultiplicationOperator();
            case "sqrt":
                return new SquareRootOperator();
            default:
                throw new Error("Operator doesn't exist.");
        }
    }
}
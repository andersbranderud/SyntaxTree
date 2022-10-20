import {Operator} from "./Operator";
import {AdditionOperator} from "./BinaryOperators/AdditionOperator";
import {SubtractionOperator} from "./BinaryOperators/SubtractionOperator";
import {DivisionOperator} from "./BinaryOperators/DivisionOperator";
import {MultiplicationOperator} from "./BinaryOperators/MultiplicationOperator";

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
            default:
                throw new Error("Operator doesn't exist.");
        }
    }
}
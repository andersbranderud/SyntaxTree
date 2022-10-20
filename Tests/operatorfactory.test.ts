import {strictEqual} from "assert";
import {TreeConstants} from "./TestData/TreeConstants";
import {OperatorFactory} from "../src/Operators/OperatorFactory";
import {DivisionOperator} from "../src/Operators/BinaryOperators/DivisionOperator";
import {TreeNode} from "../src/TreeNode";

test('assert that operator factory returns correct operator', () => {
    const divisionOperator = OperatorFactory.createOperator('/');
    const isDivisionOperatorInstance = divisionOperator instanceof DivisionOperator;
    strictEqual(isDivisionOperatorInstance, true);
})

test('erroneous operator throws error', () => {
    expect(() => {
        OperatorFactory.createOperator('o');
    }).toThrow(Error);
})

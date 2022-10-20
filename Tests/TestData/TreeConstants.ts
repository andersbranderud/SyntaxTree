import {TreeNode} from "../../src/TreeNode";
import {DivisionOperator} from "../../src/Operators/BinaryOperators/DivisionOperator";
import {AdditionOperator} from "../../src/Operators/BinaryOperators/AdditionOperator";
import {MultiplicationOperator} from "../../src/Operators/BinaryOperators/MultiplicationOperator";
import {SubtractionOperator} from "../../src/Operators/BinaryOperators/SubtractionOperator";

// https://stackoverflow.com/questions/17382143/create-a-new-object-from-type-parameter-in-generic-class
export class TreeConstants {
    static NestedTreeWorking = new TreeNode(
        new DivisionOperator(),
        null,
        new TreeNode(
            AdditionOperator,
            null,
            new TreeNode(null, 7, null, null),
            new TreeNode(new MultiplicationOperator(), null,
                new TreeNode(new SubtractionOperator(), null, new TreeNode(null, 3, null, null),
                    new TreeNode(null, 2, null, null)),
                new TreeNode(null, 5, null, null)
            )
        ),
        new TreeNode(null, 6, null, null)
    );

    static NoOperatorsTree = new TreeNode(
        null,
        null,
        new TreeNode(
            null,
            null,
            new TreeNode(null, 7, null, null),
            new TreeNode(null, null,
                new TreeNode(null, null, new TreeNode(null, 3, null, null),
                    new TreeNode(null, 2, null, null)),
                new TreeNode(null, 5, null, null)
            )
        ),
        new TreeNode(null, 6, null, null)
    );
}
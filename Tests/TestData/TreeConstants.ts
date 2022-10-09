import {TreeNode} from "../../src/TreeNode";
import {DivisionOperator} from "../../src/Operations/DivisionOperator";
import {AdditionOperator} from "../../src/Operations/AdditionOperator";
import {MultiplicationOperator} from "../../src/Operations/MultiplicationOperator";
import {SubtractionOperator} from "../../src/Operations/SubtractionOperator";

export class TreeConstants {
    static NestedTreeWorking = new TreeNode(
        new DivisionOperator(),
        null,
        new TreeNode(
            new AdditionOperator(),
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
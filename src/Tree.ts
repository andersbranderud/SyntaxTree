import {strictEqual} from 'assert';
import {TreeNode} from './TreeNode';
import {AdditionOperator} from "./Operations/AdditionOperator";
import {SubtractionOperator} from "./Operations/SubtractionOperator";
import {DivisionOperator} from "./Operations/DivisionOperator";
import {MultiplicationOperator} from "./Operations/MultiplicationOperator";

const tree = new TreeNode(
    new DivisionOperator(),
    null,
    new TreeNode(
        new AdditionOperator(),
        null,
        new TreeNode(null, 7, null, null),
        new TreeNode(
            new MultiplicationOperator(),
            null,
            new TreeNode(new SubtractionOperator(), null, 
            new TreeNode(null, 3, null, null),
            new TreeNode(null, 2, null, null)),
            new TreeNode(null, 5, null, null)
        )
    ),
    new TreeNode(null, 6, null, null)
);

strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());
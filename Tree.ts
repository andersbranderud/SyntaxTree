import {strictEqual} from 'assert';
import {TreeNode} from './TreeNode';
const tree = new TreeNode(
    "÷",
    null,
    new TreeNode(
        "+",
        null,
        new TreeNode("", 7, null, null),
        new TreeNode(
            "x",
            null,
            new TreeNode("-", null, new TreeNode("", 3, null, null),
            new TreeNode("", 2, null, null)),
            new TreeNode("", 5, null, null)
        )
    ),
    new TreeNode("", 6, null, null)
);

strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
strictEqual(2, tree.result());
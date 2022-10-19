import {TreeNode} from '../src/TreeNode';
import {DivisionOperator} from '../src/Operations/DivisionOperator';
import {strictEqual} from 'assert';
import {TreeConstants} from './TestData/TreeConstants';

test('assert that valid nested tree gives correct results', () => {
    strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", TreeConstants.NestedTreeWorking.toString());
    strictEqual(2, TreeConstants.NestedTreeWorking.result());
})

test('assert that tree with no operators return no results.', () => {
    strictEqual("", TreeConstants.NoOperatorsTree.toString());
    strictEqual(null, TreeConstants.NoOperatorsTree.result());
})

// Error test cases

test('tree with operator but no left and right nodes should throw error', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                new DivisionOperator(),
                null,
                null,
                null
            );
        }).toThrow(Error);
})

test('When left/right is set, both of left and right nodes need to be set.', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                new DivisionOperator(),
                null,
                new TreeNode(null, null, null, null),
                null
            );
        }).toThrow(Error);
})
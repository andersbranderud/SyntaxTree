import {TreeNode} from '../src/TreeNode';
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

test('assert that valid nested tree with one unary operation gives correct results', () => {
    const unaryTreeWorking = TreeConstants.UnaryTreeWorking;
    strictEqual("((7 + ((3 - 2) x sqrt(25))) ÷ 6)", unaryTreeWorking.toString());
    strictEqual(2, unaryTreeWorking.result());
})

// Error test cases

test('tree with binary operator, but no left and right nodes, should throw error', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                '/',
                null,
                null,
                null
            );
        }).toThrow(Error);
})

test('For binary operator; when left/right is set, both of left and right nodes need to be set.', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                "/",
                null,
                new TreeNode(null, null, null, null),
                null
            );
        }).toThrow(Error);
})

test('unary tree with operator but only left node should not throw error', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                'sqrt',
                null,
                new TreeNode(null, 7, null, null),
                null
            );
        })
})

test('For unary operator; should throw error if secondChild is set', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                "sqrt",
                null,
                new TreeNode(null, null, null, null),
                new TreeNode(null, null, null, null)
            );
        }).toThrow(Error);
})

test('For unary operator; should throw error if firstChild is not set', () => {
    const operatorsButNoLeftRightTree =
        expect(() => {
            new TreeNode(
                "sqrt",
                null,
                null,
                null
            );
        }).toThrow(Error);
})
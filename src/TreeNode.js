"use strict";
exports.__esModule = true;
exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(operator, value, left, right) {
        var _this = this;
        this.result = function () {
            if (_this.operator == null) {
                return _this.value;
            }
            var leftNodeResult = _this.left.result();
            var rightNodeResult = _this.right.result();
            return _this.operator.performOperation(leftNodeResult, rightNodeResult);
        };
        this.toString = function () {
            if (_this.operator == null) {
                return _this.value.toString();
            }
            var leftNodeToString = _this.left.toString();
            var rightNodeToString = _this.right.toString();
            return _this.operator.toString(leftNodeToString, rightNodeToString);
        };
        this.value = value;
        this.left = left;
        this.right = right;
    }
    ;
    return TreeNode;
}());
exports.TreeNode = TreeNode;

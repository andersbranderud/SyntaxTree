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
            return _this.operator.performOperation(_this.left.result(), _this.right.result());
        };
        this.toString = function () {
            if (_this.operator == null) {
                return _this.value.toString();
            }
            return _this.operator.toString(_this.left.toString(), _this.right.toString());
        };
        this.operator = operator;
        this.value = value;
        this.left = left;
        this.right = right;
    }
    ;
    return TreeNode;
}());
exports.TreeNode = TreeNode;

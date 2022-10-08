"use strict";
exports.__esModule = true;
exports.AdditionOperator = void 0;
var AdditionOperator = /** @class */ (function () {
    function AdditionOperator() {
    }
    AdditionOperator.prototype.performOperation = function (operand, operand2) {
        return operand + operand2;
    };
    AdditionOperator.prototype.toString = function (operand, operand2) {
        return "(" + operand + " + " + operand2 + ")";
    };
    return AdditionOperator;
}());
exports.AdditionOperator = AdditionOperator;

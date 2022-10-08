"use strict";
exports.__esModule = true;
exports.DivisionOperator = void 0;
var DivisionOperator = /** @class */ (function () {
    function DivisionOperator() {
    }
    DivisionOperator.prototype.performOperation = function (operand, operand2) {
        return operand / operand2;
    };
    DivisionOperator.prototype.toString = function (operand, operand2) {
        return "(" + operand + " \u00F7 " + operand2 + ")";
    };
    return DivisionOperator;
}());
exports.DivisionOperator = DivisionOperator;

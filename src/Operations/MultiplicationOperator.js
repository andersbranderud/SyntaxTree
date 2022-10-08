"use strict";
exports.__esModule = true;
exports.MultiplicationOperator = void 0;
var MultiplicationOperator = /** @class */ (function () {
    function MultiplicationOperator() {
    }
    MultiplicationOperator.prototype.performOperation = function (operand, operand2) {
        return operand * operand2;
    };
    MultiplicationOperator.prototype.toString = function (operand, operand2) {
        return "(" + operand + " x " + operand2 + ")";
    };
    return MultiplicationOperator;
}());
exports.MultiplicationOperator = MultiplicationOperator;

"use strict";
exports.__esModule = true;
exports.SubtractionOperator = void 0;
var SubtractionOperator = /** @class */ (function () {
    function SubtractionOperator() {
    }
    SubtractionOperator.prototype.performOperation = function (operand, operand2) {
        return operand - operand2;
    };
    SubtractionOperator.prototype.toString = function (operand, operand2) {
        return "(" + operand + " - " + operand2 + ")";
    };
    return SubtractionOperator;
}());
exports.SubtractionOperator = SubtractionOperator;

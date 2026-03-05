'use strict';

function validateFiniteNumber(value, name) {
    if (typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)) {
        throw new TypeError(name + ' must be a finite number');
    }
}

function add(a, b) {
    validateFiniteNumber(a, 'a');
    validateFiniteNumber(b, 'b');
    return a + b;
}

function subtract(a, b) {
    validateFiniteNumber(a, 'a');
    validateFiniteNumber(b, 'b');
    return a - b;
}

function multiply(a, b) {
    validateFiniteNumber(a, 'a');
    validateFiniteNumber(b, 'b');
    return a * b;
}

function divide(a, b) {
    validateFiniteNumber(a, 'a');
    validateFiniteNumber(b, 'b');

    if (b === 0) {
        return null;
    }

    return a / b;
}

function squareRoot(value) {
    validateFiniteNumber(value, 'value');

    if (value < 0) {
        return null;
    }

    return Math.sqrt(value);
}

var operations = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    squareRoot: squareRoot
};

function calculate(operation, operand1, operand2) {
    if (!Object.prototype.hasOwnProperty.call(operations, operation)) {
        throw new Error('Unsupported operation: ' + operation);
    }

    if (operation === 'squareRoot') {
        return squareRoot(operand1);
    }

    return operations[operation](operand1, operand2);
}

module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    squareRoot: squareRoot,
    calculate: calculate,
    operations: operations
};

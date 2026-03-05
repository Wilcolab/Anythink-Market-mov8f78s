'use strict';

require('./helpers');

var arithmeticOperations = require('../src/utils/arithmeticOperations');

describe('Arithmetic Operations Module', function () {
    describe('Basic Operations', function () {
        it('adds two numbers', function () {
            expect(arithmeticOperations.add(2, 3)).to.equal(5);
        });

        it('subtracts two numbers', function () {
            expect(arithmeticOperations.subtract(10, 4)).to.equal(6);
        });

        it('multiplies two numbers', function () {
            expect(arithmeticOperations.multiply(6, 7)).to.equal(42);
        });

        it('divides two numbers', function () {
            expect(arithmeticOperations.divide(20, 5)).to.equal(4);
        });

        it('returns null when dividing by zero', function () {
            expect(arithmeticOperations.divide(20, 0)).to.equal(null);
        });

        it('returns modulo remainder for integer operands', function () {
            expect(arithmeticOperations.modulo(20, 6)).to.equal(2);
        });

        it('returns null when modulo by zero', function () {
            expect(arithmeticOperations.modulo(20, 0)).to.equal(null);
        });

        it('returns the square root for positive input', function () {
            expect(arithmeticOperations.squareRoot(81)).to.equal(9);
        });

        it('returns null for negative square root input', function () {
            expect(arithmeticOperations.squareRoot(-1)).to.equal(null);
        });
    });

    describe('calculate', function () {
        it('delegates binary operations', function () {
            expect(arithmeticOperations.calculate('multiply', 3, 5)).to.equal(15);
        });

        it('delegates squareRoot as unary operation', function () {
            expect(arithmeticOperations.calculate('squareRoot', 49)).to.equal(7);
        });

        it('throws for unsupported operations', function () {
            expect(function () {
                arithmeticOperations.calculate('moduloo', 10, 3);
            }).to.throw('Unsupported operation: moduloo');
        });
    });

    describe('Input Validation', function () {
        it('throws when inputs are not finite numbers', function () {
            expect(function () {
                arithmeticOperations.add('2', 3);
            }).to.throw(TypeError, 'a must be a finite number');
        });

        it('throws when input is NaN', function () {
            expect(function () {
                arithmeticOperations.squareRoot(NaN);
            }).to.throw(TypeError, 'value must be a finite number');
        });
    });
});

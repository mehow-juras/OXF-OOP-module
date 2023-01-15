"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("../src/math");
describe('Math functions test', () => {
    describe('Fibonacci', () => {
        it('FibRec test', async () => {
            expect((0, math_1.fibRec)(BigInt(0))).toEqual(BigInt(0));
            expect((0, math_1.fibRec)(BigInt(1))).toEqual(BigInt(1));
            expect((0, math_1.fibRec)(BigInt(10))).toEqual(BigInt(55));
        });
        it('Normal Fibbonacci ', async () => {
            expect((0, math_1.fib)(BigInt(0))).toEqual(BigInt(0));
            expect((0, math_1.fib)(BigInt(1))).toEqual(BigInt(1));
            expect((0, math_1.fib)(BigInt(10))).toEqual(BigInt(55));
        });
    });
    describe('isPalindrome', () => {
        it('', async () => {
            expect((0, math_1.isPalindrome)("yeeeboooooi")).toEqual(false);
            expect((0, math_1.isPalindrome)("onno")).toEqual(true);
            expect((0, math_1.isPalindrome)("ono")).toEqual(true);
        });
    });
});

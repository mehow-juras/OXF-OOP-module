import {fib, fibRec, isPalindrome} from '../src/math';

describe('Math functions test', () => {

    describe('Fibonacci', () => {
        it('FibRec test', async () => {
            expect(fibRec(BigInt(0))).toEqual(BigInt(0));
            expect(fibRec(BigInt(1))).toEqual(BigInt(1));
            expect(fibRec(BigInt(10))).toEqual(BigInt(55));
        });

        it('Normal Fibbonacci ', async () => {
            expect(fib(BigInt(0))).toEqual(BigInt(0));
            expect(fib(BigInt(1))).toEqual(BigInt(1));
            expect(fib(BigInt(10))).toEqual(BigInt(55));
        });
    });

    describe('isPalindrome', () => {
        it('', async () => {
            expect(isPalindrome('yeeeboooooi')).toEqual(false);
            expect(isPalindrome('onno')).toEqual(true);
            expect(isPalindrome('ono')).toEqual(true);

        });
    });



});


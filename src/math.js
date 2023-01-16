"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.max = exports.range = exports.filterMine = exports.map = exports.sum = exports.printedFibRec = exports.isPalindrome = exports.fib = exports.fibRec = exports.largestSquare = exports.square = void 0;
function square(x) {
    return x * x;
}
exports.square = square;
function largestSquare(x) {
    return 0;
}
exports.largestSquare = largestSquare;
function fibRec(n) {
    if (BigInt(n) < BigInt(0)) {
        throw RangeError;
    }
    if (BigInt(n) < BigInt(2)) {
        return BigInt(n);
    }
    return fibRec(BigInt(n) - BigInt(1)) + fibRec(BigInt(n) - BigInt(2));
}
exports.fibRec = fibRec;
function fib(n) {
    if (BigInt(n) < BigInt(0)) {
        throw RangeError;
    }
    let total = 0;
    for (let i = 0; i <= Number(n); i++) {
        total += i;
    }
    return BigInt(total);
}
exports.fib = fib;
function isPalindrome(str) {
    const reverseStr = str.toLowerCase().split('').reverse().join('');
    return reverseStr === str;
}
exports.isPalindrome = isPalindrome;
function printedFibRec(n, level = 0) {
    const indent = '    '.repeat(level);
    if (n <= 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        console.log(`${indent} fibRec(${n - 1}, ${level + 1})`);
        const fib1 = printedFibRec(n - 1, level + 1);
        console.log(`${indent} fibRec(${n - 2}, ${level + 1})`);
        const fib2 = printedFibRec(n - 2, level + 1);
        console.log(`${indent} fibRec(${n - 1}, ${level + 1}) + fibRec(${n - 2}, ${level + 1}) = ${fib1 + fib2}`);
        return fib1 + fib2;
    }
}
exports.printedFibRec = printedFibRec;
function sum(a) {
    let sum = 0;
    for (const val of a) {
        sum += val;
    }
    return sum;
}
exports.sum = sum;
function map(a, f) {
    const newArray = [];
    for (const val of a) {
        newArray.push(f(val));
    }
    return newArray;
}
exports.map = map;
function filterMine(a, f) {
    return a.filter(item => f(item));
}
exports.filterMine = filterMine;
function range(end, start = 0) {
    return Array.from(Array(end - start + 1).keys()).map(x => x + start);
}
exports.range = range;
function max(first, ...rest) {
    return Math.max([first].push(...rest));
}
exports.max = max;

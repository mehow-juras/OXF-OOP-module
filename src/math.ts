export function square(x: number): number {
    return x * x;
}

export function largestSquare(x: number): number {
    return 0;
}

export function fibRec(n: bigint): bigint {
    if (BigInt(n) < BigInt(0)){
        throw RangeError;
    }

    if (BigInt(n) < BigInt(2) ){
        return BigInt(n);
    }
    return fibRec(BigInt(n) - BigInt(1)) + fibRec(BigInt(n) - BigInt(2));
}

export function fib(n: bigint): bigint {
    if (BigInt(n) < BigInt(0)) {
        throw RangeError;
    }
    let total = 0;
    for (let i = 0; i <= Number(n); i++) {
        total += i;
    }
    return BigInt(total);
}

export function isPalindrome(str: string): boolean {
    const reverseStr = str.toLowerCase().split('').reverse().join('');
    return reverseStr === str;
}

export function printedFibRec(n: number, level = 0): number {
    const indent = '    '.repeat(level);
    if (n <= 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        console.log(`${indent} fibRec(${n - 1}, ${level + 1})`);
        const fib1 = printedFibRec(n - 1, level + 1);
        console.log(`${indent} fibRec(${n - 2}, ${level + 1})`);
        const fib2 = printedFibRec(n - 2, level + 1);
        console.log(`${indent} fibRec(${n - 1}, ${level + 1}) + fibRec(${n - 2}, ${level + 1}) = ${fib1 + fib2}`);
        return fib1 + fib2;
    }
}

export function sum(a: number[]): number {
    let sum = 0;
    for (const val of a) {
        sum += val;
    }
    return sum;
}


export function map(a: number[], f: (x: number) => number): number[]{
    const newArray = [];
    for (const val of a) {
        newArray.push(f(val));
    }
    return newArray;
}

export function filterMine(a: number[], f: (x: number) => boolean): number[] {
    return a.filter(item => f(item));
}

export function range(end: number, start = 0): number[]{
    return Array.from(Array(end - start + 1).keys()).map(x => x + start);
}

export function max(first: number, ...rest: number[]): number{
    return Math.max([first].push(...rest));
}



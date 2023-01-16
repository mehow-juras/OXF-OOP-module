import {filterMine, range} from './math';


function moreThanTwo(n: number): boolean{
    return n < 2;
}

const nums = [1,2,3,4,5];
console.log(filterMine(nums, moreThanTwo));

console.log(range(9));

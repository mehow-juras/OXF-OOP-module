"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
function moreThanTwo(n) {
    return n < 2;
}
const nums = [1, 2, 3, 4, 5];
console.log((0, math_1.filterMine)(nums, moreThanTwo));
console.log((0, math_1.range)(9));

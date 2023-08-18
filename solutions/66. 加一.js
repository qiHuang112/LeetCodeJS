/**
 * @param {number[]} digits
 * @return {number[]}
 * @link https://leetcode.cn/problems/plus-one/
 */
var plusOne = function (digits) {
    let carry = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry;
        carry = digits[i] === 10 ? 1 : 0;
        digits[i] = digits[i] === 10 ? 0 : digits[i];
        if (!carry) {
            break;
        }
    }
    return carry ? [1, ...digits] : digits;
};

console.log(plusOne([1, 2, 3]).join(""));
console.log(plusOne([4, 3, 2, 1]).join(""));
console.log(plusOne([0]).join(""));
console.log(plusOne([9, 9, 9]).join(""));
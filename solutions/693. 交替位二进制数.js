/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    if (!Number.isInteger(n)) {
        return false;
    }
    const res = n ^ (n >> 1);
    return (res & (res + 1)) === 0;
};

console.log(hasAlternatingBits(4));
console.log(hasAlternatingBits(7));
console.log(hasAlternatingBits(11));
console.log(hasAlternatingBits(0b101110101));
console.log(hasAlternatingBits(0b101010101));
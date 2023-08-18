/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let flag = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    let res = 0;
    while (x > 0) {
        res = res * 10 + x % 10;
        x = ~~(x / 10);
    }
    res *= flag;


    return (res >= 2147483647 || res < -2147483648) ? 0 : res;

};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
console.log(reverse(1534236469));

console.log(2 ** 32);
console.log(-(2 ** 32));
/**
 * @param {number} n
 * @return {number}
 * https://leetcode.cn/problems/climbing-stairs/
 */
var climbStairs = function (n) {
    if (n <= 3) {
        return n;
    }
    let a = 1, b = 2, c = 3;
    while (n-- > 3) {
        a = b;
        b = c;
        c = a + b;
    }
    return c;
};

console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
console.log(climbStairs(6));

/*
爬0层 只有一种方式
爬1层 只有一种方式
爬2层，可以看成爬0层的所有方式加上爬1层的所有方式
爬3层，可以看成爬1层的所有方式加上爬2层的所有方式
爬4层，可以看成爬2层的所有方式加上爬3层的所有方式
...
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * @link https://leetcode.cn/problems/add-binary/
 */
var addBinary = function (a, b) {
    const scale = 2;
    let i1 = a.length - 1, i2 = b.length - 1;
    let v1, v2, v, res = [], carry = 0;
    while (i1 >= 0 || i2 >= 0) {
        v1 = i1 >= 0 ? +a[i1--] : 0;
        v2 = i2 >= 0 ? +b[i2--] : 0;
        v = v1 + v2 + carry;
        carry = ~~(v / scale);
        v %= scale;
        res.unshift(v);
    }
    if (carry) {
        res.unshift(1);
    }
    return res.join("");
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
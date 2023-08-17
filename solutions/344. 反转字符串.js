/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    var temp;
    for (var i = 0; i < ~~(s.length / 2); i++) {
        temp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = temp;
    }
};

const s1 = ["h", "e", "l", "l", "o"];
reverseString(s1);
console.log(s1);
const s2 = ["H", "a", "n", "n", "a", "h"];
reverseString(s2);
console.log(s2);
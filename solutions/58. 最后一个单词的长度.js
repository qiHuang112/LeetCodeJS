/**
 * @param {string} s
 * @return {number}
 * @link https://leetcode.cn/problems/length-of-last-word/
 */
var lengthOfLastWord = function (s) {
    let index = s.length - 1;
    while (index >= 0 && s[index] === ' ') {
        index--;
    }
    let res = 0;
    for (let i = index; i >= 0; i--) {
        if (s[i] !== ' ') {
            res++;
        } else {
            break;
        }
    }
    return res;
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

/*
分析：从最后一个字符开始遍历，第一个循环去除所有空字符，第二个循环拿到长度

*/
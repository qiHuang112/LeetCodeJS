/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    // return s.toLowerCase();
    let str = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            str += String.fromCharCode(32 + s[i].charCodeAt());
        } else {
            str += s[i];
        }
    }
    return str;
};

console.log(toLowerCase("Hello"));
console.log(toLowerCase("here"));
console.log(toLowerCase("LOVELY"));

console.log(toLowerCase.toString());
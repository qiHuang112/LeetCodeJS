/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    const len = Math.max(num1.length, num2.length);

    const resultArray = new Array(len + 1);
    let offset = 0;
    let temp, v1, v2;
    let index = 0;
    let i = len;
    while (i-- > 0) {
        v1 = index < num1.length ? +num1[num1.length - 1 - index] : 0;
        v2 = index < num2.length ? +num2[num2.length - 1 - index] : 0;
        temp = offset + v1 + v2;
        offset = temp >= 10;
        temp = offset ? temp - 10 : temp;
        resultArray[len - index++] = temp;
    }
    resultArray[0] = offset ? 1 : '';
    return resultArray.join("");


};

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("999", "77"));
console.log(addStrings("0", "0"));
console.log(addStrings("2448646433584846", "765147464131213546"));
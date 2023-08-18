/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @link https://leetcode.cn/problems/remove-element/
 */
var removeElement = function (nums, val) {
    var res = -1;
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== val) {
            nums[++res] = nums[index];
        }
    }
    return res + 1;
};

let nums1 = [3, 2, 2, 3];
let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];

let len1 = removeElement(nums1, 3);
let len2 = removeElement(nums2, 2);
console.log(nums1.slice(0, len1).join(""));
console.log(nums2.slice(0, len2).join(""));

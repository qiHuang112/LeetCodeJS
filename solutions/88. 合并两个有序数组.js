/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * https://leetcode.cn/problems/merge-sorted-array/
 */
var merge = function (nums1, m, nums2, n) {
    let i1 = m - 1, i2 = n - 1, len = n + m;

    for (let i = len - 1; i >= 0; i--) {
        if (nums1[i1] === undefined) {
            nums1[i] = nums2[i2--];
        } else if (nums2[i2] === undefined) {
            nums1[i] = nums1[i1--];
        } else if (nums1[i1] > nums2[i2]) {
            nums1[i] = nums1[i1--];
        } else {
            nums1[i] = nums2[i2--];
        }
    }
};

const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
const nums2 = [1, 2, 2];
merge(nums1, 6, nums2, 3);

console.log(nums1.join(""));
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let res = -1;
    for (let index = 0; index < nums.length; index++) {
        if (nums[res] !== nums[index]) {
            nums[++res] = nums[index];
        }
    }
    return res + 1;
};

let nums1 = [1, 1, 2];
let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

let len1 = removeDuplicates(nums1);
let len2 = removeDuplicates(nums2);
console.log(nums1.slice(0, len1).join(""));
console.log(nums2.slice(0, len2).join(""));


/*
1 1 2

第一次循环：
nums[-1]=undefine和index=0且nums[index]=1相比，不相同，所以res从-1变成0
第二次循环：
nums[res=0]=1和nums[index=1]=1相比，相同，所以res不动
第三次循环:
nums[res=1]=1和nums[index=2]=2相比，不同，所以res++

*/

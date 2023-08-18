/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @link https://leetcode.cn/problems/search-insert-position/
 */
var searchInsert = function (nums, target) {
    if (nums[0] >= target) {
        return 0;
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }
    let left = 0, right = nums.length - 1;
    while (left + 1 < right) {
        let mid = ~~((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return right;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6, 8, 10], 7));

/*
nums=1,3,5,6
target = 5
left = 0,right = 3

第一轮循环：
mid = ~~((left + right)/2) = 1
(nums[mid=1]=3) < target=5 
所以 left=(mid=1) 
进入下次循环

第二轮循环：
mid=~~((left=1)+(right=3))/2=2
(nums[mid=2]=5)==(target=5)
return mid=2

结束

nums=1,3,5,6
target = 2
left = 0,right = 3

第一轮循环：
mid = ~~((left + right)/2) = 1
(nums[mid=1]=3) > target=2 
所以 right=(mid=1) 
进入下次循环

第二轮循环：
mid=~~((left=0)+(right=1))/2=0
(nums[mid=0]=1)<(target=2)
所以 left=(mid=0)

因为left + 1 = right 所以直接退出循环，返回right=1
*/
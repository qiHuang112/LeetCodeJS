import { printTreeShape, TreeNode } from "../base/TreeNode.js";

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    if (!nums || nums.length === 0) {
        return null;
    }
    const rootIndex = ~~((nums.length - 1) / 2);
    const root = new TreeNode(nums[rootIndex]);
    root.left = sortedArrayToBST(nums.slice(0, rootIndex));
    root.right = sortedArrayToBST(nums.slice(rootIndex + 1));
    return root;
};

printTreeShape(sortedArrayToBST([-10, -3, 0, 5, 9]));
printTreeShape(sortedArrayToBST([1, 3]));

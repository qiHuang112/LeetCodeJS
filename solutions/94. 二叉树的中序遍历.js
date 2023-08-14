import { arrayToTree, TreeNode } from "../base/TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const arr = [];
    function _dfs(root) {
        if (!root) {
            return;
        }
        _dfs(root.left);
        arr.push(root.val);
        _dfs(root.right);
    }
    _dfs(root);
    return arr;
};

console.log(inorderTraversal(arrayToTree([1, null, 2, 3])));
console.log(inorderTraversal(arrayToTree([])));
console.log(inorderTraversal(arrayToTree([1])));

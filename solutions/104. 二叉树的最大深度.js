import { arrayToTree, TreeNode } from "../base/TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    let depth = 0
    function _dfs(node, n) {
        if (!node) {
            depth = Math.max(depth, n);
            return;
        }
        _dfs(node.left, n + 1);
        _dfs(node.right, n + 1);
    }
    _dfs(root, 0);
    return depth;
};

console.log(maxDepth(arrayToTree(3, 9, 20, null, null, 15, 7)));
console.log(maxDepth(arrayToTree(1, null, 2)));
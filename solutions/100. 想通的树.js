import { arrayToTree, TreeNode } from "../base/TreeNode.js";

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3])));
console.log(isSameTree(arrayToTree([1, 2]), arrayToTree([1, null, 2])));
console.log(isSameTree(arrayToTree([1, 2, 1]), arrayToTree([1, 1, 2])));
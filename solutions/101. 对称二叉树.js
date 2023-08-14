import { arrayToTree, printTreeShape, TreeNode } from "../base/TreeNode.js";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    let res = true;
    function _isSymmetric(p, q) {
        if (!res) {
            return;
        }
        if (!p && !q) {
            return;
        }
        if (!p || !q) {
            res = false;
            return;
        }
        if (p.val !== q.val) {
            res = false;
            return;
        }
        _isSymmetric(p.left, q.right);
        _isSymmetric(p.right, q.left);
    }
    _isSymmetric(root, root);
    return res;
};

console.log(isSymmetric(arrayToTree([1, 2, 2, 3, 4, 4, 3])));
console.log(isSymmetric(arrayToTree([1, 2, 2, null, 3, null, 3])));
console.log(isSymmetric(arrayToTree([2, 3, 3, 4, 5, null, 4])));
printTreeShape(arrayToTree([2, 3, 3, 4, 5, null, 4]));
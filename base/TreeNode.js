export function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right == undefined ? null : right)
}

export function printTreeShape(root, spaceCnt = 0) {
    if (root === null) {
        return;
    }
    printTreeShape(root.right, spaceCnt + 10);
    console.log(' '.repeat(spaceCnt) + '-> ' + root.val);
    printTreeShape(root.left, spaceCnt + 10);
}

export function arrayToTree(...arr) {
    if (!arr || !arr.length) {
        return null;
    }

    let root = new TreeNode(arr[0]);
    let queue = [root];
    for (let i = 1; i < arr.length; i++) {
        let node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length) {
            if (arr[i] !== null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
        }
    }
    return root;
}


const root = arrayToTree(1, 2, 3, 4, 5, 6);
printTreeShape(root);

export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export function arrayToList(...values) {

    function _arr2list(arr, start) {
        if (!arr || start >= arr.length) {
            return null;
        }
        return new ListNode(arr[start], _arr2list(arr, start + 1));
    }

    return _arr2list(values, 0);
}

export function listNodeToString(node) {
    return (!node || node == null) ? "null" : `${node.val} -> ${listNodeToString(node.next)}`;
}

import { ListNode, arrayToList, listNodeToString } from '../base/ListNode.js'

/**
 * @param {ListNode} head
 * @return {ListNode}
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 */
var deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }
    while (head.next && head.val == head.next.val) {
        head.next = head.next.next;
    }
    deleteDuplicates(head.next);
    return head;
};

console.log(listNodeToString(deleteDuplicates(arrayToList(1, 1, 1))));
console.log(listNodeToString(deleteDuplicates(arrayToList(1, 1, 2))));
console.log(listNodeToString(deleteDuplicates(arrayToList(1, 1, 2, 3, 3))));
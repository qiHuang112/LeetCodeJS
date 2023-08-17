import { arrayToList, listNodeToString, ListNode } from "../base/ListNode.js";

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) {
        return null;
    }
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val > list2.val) {
        return new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    }
    return new ListNode(list1.val, mergeTwoLists(list2, list1.next));
};

console.log(listNodeToString(mergeTwoLists(arrayToList(1, 2, 4), arrayToList(1, 3, 4))));
console.log(listNodeToString(mergeTwoLists(arrayToList(), arrayToList())));
console.log(listNodeToString(mergeTwoLists(arrayToList(), arrayToList(0))));


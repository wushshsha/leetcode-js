/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let cur = head
    let next = head

    while(cur != null){
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    return prev
};
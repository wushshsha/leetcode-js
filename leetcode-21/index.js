/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let temp = new ListNode()
    let first = temp
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            temp.next = l1
            l1 = l1.next
        }else{
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }
    if(l1 != null)
        temp.next = l1
    if(l2 != null)
        temp.next = l2
    return first.next
};
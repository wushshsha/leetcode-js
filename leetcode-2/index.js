/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode()
    let curr = dummy
    let carry = 0
    while(l1 != null || l2 != null){
        let sum = 0
        if(l1 != null){
            sum +=l1.val
            l1 = l1.next
        }
        if(l2 != null){
            sum +=l2.val
            l2 = l2.next
        }
        sum = carry+sum
        curr.next = new ListNode(sum%10)
        curr = curr.next
        carry = Math.floor(sum/10)
    }
    if(carry >0)
        curr.next = new ListNode(carry)
    return dummy.next
};
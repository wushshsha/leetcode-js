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
var swapPairs = function(head) {
    if(head == null ||  head.next == null)
        return head

    let first = head
    let second = head.next
    let res = second
    let end = null
    while(first != null &&  second != null){
        let next = second.next
        first.next = next
        second.next = first
        if(end == null)
            end = first
        else{
            end.next = second
            end = first
        }
        first = first.next
        if(first != null)
            second = first.next
    }
    return res
};
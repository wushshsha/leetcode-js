/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head === null || head.next === null || head.next.next === null)
        return head

    let oddHead = head
    let evenHead = head.next
    let odd = head
    let oddEnd = null
    let even = head.next
    while(odd !== null || even !== null){
        if(odd !== null){
            if(odd.next !== null){
                odd.next =  odd.next.next
            }else{
                odd.next = null
            }
            if(odd.next === null)
                oddEnd = odd
            odd = odd.next
        }
        if(even !== null){
            if(even.next !== null){
                even.next  = even.next.next
            }else{
                even.next = null
            }
            even =  even.next
        }
    }
    oddEnd.next = evenHead
    
    return oddHead
};
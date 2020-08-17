/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let prev = null
    let cur = head
    let next = head
    for(i=1;i<m;i++){
        prev = cur
        cur = cur.next
    }
    let prev2 = prev
    let cur2 = cur
    for(i=m;i<=n;i++){
        next = cur.next
        cur.next = prev
        prev = cur
        cur = next
    }
    cur2.next = cur
    if(prev2 != null){
        prev2.next = prev
    }else{
        head = prev
    }
    return head
    
};
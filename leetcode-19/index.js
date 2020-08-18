/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(n === 0)
        return head
    
    let cur = head
    let count = 0
    let delPrev = null
    while(cur !== null){
        if(count === n){
            delPrev = head
        }else if(count>n){
            delPrev = delPrev.next
        }
        count++
        cur = cur.next
    }
    if(delPrev === null){
        return head.next
    }else if(delPrev.next !== null)
        delPrev.next = delPrev.next.next
    else{
        return null
    }
    return head
};
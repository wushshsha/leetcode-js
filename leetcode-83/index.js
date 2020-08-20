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
var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head
    }

    let dummy = new ListNode()
    dummy.next = head
    let prev = dummy
    let cur = head
    let memo = new Set()
    while(cur !== null){
        if(memo.has(cur.val)){
            cur = cur.next
            if(cur === null){
                prev.next = null
            }
        }else{
            memo.add(cur.val)
            prev.next = cur
            prev = prev.next
            cur = cur.next
        }
    }
    return dummy.next
};
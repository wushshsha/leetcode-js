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
//这种思路主要是创建一个在头部前面创建一个节点

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head
    let n1 = dummy
    let n2 = dummy
    for(let i=0;i<=n;i++){
        n2 = n2.next
    }
    while(n2 !== null){
        n1 = n1.next
        n2 = n2.next
    }
    n1.next = n1.next.next
    return dummy.next
};
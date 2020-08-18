/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA
    let curB = headB
    let mapA = new Map()
    while(curA != null){
        mapA.set(curA,true)
        curA = curA.next
    }
    while(curB != null){
        if(mapA.has(curB)){
            return curB
        }
        curB = curB.next
    }
    return null
};
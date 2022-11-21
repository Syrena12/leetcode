/**
 * Definition for singly-linked list.

 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var swapPairs = function(head) {
    const dummyHead=new ListNode(0);
    dummyHead.next = head;
    let cur = head;
    while(cur.next!==null && cur.next.next!==null){
        const node1 = cur.next;
        const node2 = cur.next.next;
        cur.next = node2;
        node1.next = node2.next;
        node2.next = node1;
        cur = node1;
    }
    return dummyHead.next;
};

swapPairs([1,2,3,4]);
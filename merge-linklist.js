
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let count1 =0;
    console.log(list1.next);
    const dummy_node = new ListNode(0);
    dummy_node.next = list1
    let cur = new ListNode(0);
    cur.next = list1.next;
    while(count1<a-1){
        count1++;
        cur = cur.next;
    }
    let count2 = 0;
    let start = cur;
    while(count2<b-a){
        count2++;
        cur.next = cur.next.next;
        cur=cur.next;
    }
    let end1 = cur;
    start.next = list2;
    console.log(start.val);
    console.log(end1);
    let cur2 = list2;
    while(cur2&&cur2.next){
        cur2 = cur2.next;
    }
    console.log(cur2.val);
    cur2.next = end1;
    return dummy_node.next;

};

mergeInBetween([0,1,2,3,4,5,6],2,5,[1000000,1000001,1000002,1000003,1000004]);
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
         }

var removeElements = function(head, val) {
    let dummyNode = new ListNode();
    dummyNode.next = head;
    let cur = head,prev=dummyNode;
    while(cur!=null){
        if(cur.val==val){
            prev.next = cur.next
        }
        cur=cur.next;
        prev = prev.next;
    }
    return dummyNode.next;
};

let test = [1,2,6,3,4,5,6];
removeElements(test,6);
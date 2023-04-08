function ListNode(val,next) {
    this.val = (val===undefined?0:val);
    this.next = (next===undefined?null:next);
}

var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    const dummy_head = new ListNode(0,head);
    let cur = dummy_head;
    while(cur.next && cur.next.next){
        if(cur.next.val===cur.next.next.val){
            const x= cur.next.val;
            while(cur.next && cur.next.val === x){
                cur.next = cur.next.next;
            }
        }else{
            cur=cur.next;
        }
    }
    return dummy_head.next;
    // if (!head) {
    //     return head;
    // }
    // const dummy = new ListNode(0, head);
    // let cur = dummy;
    // while (cur.next && cur.next.next) {
    //     if (cur.next.val === cur.next.next.val) {
    //         const x = cur.next.val;
    //         while (cur.next && cur.next.val === x) {
    //             cur.next = cur.next.next;
    //         }
    //     } else {
    //         cur = cur.next;
    //     }
    // }
    // return dummy.next;
};

deleteDuplicates([1,2,3,3,3,4,4]);
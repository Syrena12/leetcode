var deleteDuplicates = function(head) {
    let dummy_head = new ListNode(0);
    dummy_head.next = head;
    let start = head, end=head ,prev = dummy_head;
    while(start&&end){
        if(start.val===prev.val){
            while(end.val===start.val){
                end=end.next;
            }
            prev.next = end;
            cur=end;
            // end=end.next;
        }else{
            start = start.next;
            end = end.next;
            prev = prev.next;
        }
    }
    return dummy_head.next;
};
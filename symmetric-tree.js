var isSymmetric = function(root) {
    // let queue = [];
    // if(root===null) return true
    // queue.push(root.left);
    // queue.push(root.right);
    // while(queue.length){
    //     let left = queue.shift();
    //     let right = queue.shift();
    //     if(left===null&&right===null){
    //         continue
    //     };
    //     if(left.val!=right.val){
    //         return false
    //     }
    //     if(left===null||right===null){
    //         return false
    //     };
    //     queue.push(left.left);
    //     queue.push(right.right);
    //     queue.push(left.right);
    //     queue.push(right.left);
    // }
    // return true
    if (root == null) return true;
    const queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();
        if(left == null && right == null){
            continue;
        }else if(left == null || right == null || left.val != right.val){
            return false;
        }

        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }

    return true;
};

isSymmetric([1,2,2,3,4,4,3]);
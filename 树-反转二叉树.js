/**
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    let rootNode = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(rootNode);
    return root;
};

invertTree([4,2,7,1,3,6,9])


var invertTree = function(root) {
    //我们先定义节点交换函数
    const invertNode = function(root, left, right) {
        let temp = left;
        left = right;
        right = temp;
        root.left = left;
        root.right = right;
    }
    //使用层序遍历
    let queue = [];
    if(root === null) {
        return root;
    }
    queue.push(root);
    while(queue.length) {
        let length = queue.length;
        while(length--) {
            let node = queue.shift();
            //节点处理逻辑
            invertNode(node, node.left, node.right);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
};
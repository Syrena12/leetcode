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
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let flag = true;
    var dfs=(root)=>{
        if(!root) return 0;
        if(flag===false) return
        let left = dfs(root.left);
        let right = dfs(root.right);
        if(Math.abs(left-right)>1){
            flag = false;
        };
        return Math.max(left,right)+1
    }
    dfs(root);
    return flag
};

isBalanced([1,2,2,3,3,null,null,4,4]);

 //* Definition for a binary tree node.
  function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = [];
    var dfs = (node,path)=>{
        if(node.left===null&&node.right===null){
            path += node.val;
            res.push(path);
            return ;
        };
        path = node.val+'->';
        if(node.left){
            dfs(node.left,path);
        };
        if(node.right){
            dfs(node.right,path);
        }
    }
    dfs(root,'');
    return res;
};

binaryTreePaths([1,2,3,null,5]);
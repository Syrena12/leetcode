//前序遍历
var preorderTraversal = function(root) {
    let res = [];
    const dfs = (root)=>{
        if(root===null) return;
        res.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    dfs(root);
    return res;
};
//中序遍历
function inorder(root) {
    let res = [];
    const dfs = (root) =>{
        if(root == null){
            return
        }
        dfs(root.left);
        res.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    return res
}
//后序遍历
var postorderTraversal = function(root) {
    let res = [];
    const dfs = (root) =>{
        if(root == null){
            return
        }
        dfs(root.left);
        dfs(root.right);
        res.push(root.val);
    }
    dfs(root);
    return res
};
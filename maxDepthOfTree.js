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
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root){
      return 0;
  } 
  let maxDepth = 1;
  
  const depthFirstTraverse=(node,depth=1)=>{
      if(!node){
          return
      }
      maxDepth = Math.max(maxDepth, depth);
      
      depthFirstTraverse(node.left, depth+1);
      depthFirstTraverse(node.right, depth+1);
  }
  depthFirstTraverse(root);
  return maxDepth;
};
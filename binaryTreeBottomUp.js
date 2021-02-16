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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  return root !== null ? traverseNodes([root]) : [];
};

function traverseNodes(nodes) {
  if (nodes.length === 0) return [];

  let children = nodes.reduce((acc, cur) => {
      if (cur.left) acc.push(cur.left);
      if (cur.right) acc.push(cur.right);
      return acc;
  }, []);

  return [...traverseNodes(children), nodes.map(({val}) => val)];
}
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;

  function dfs(root) {
    if (root === null) {
      return -1;
    }

    let left = dfs(root.left);
    let right = dfs(root.right);

    result = Math.max(result, left! + right! + 2);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return result;
}

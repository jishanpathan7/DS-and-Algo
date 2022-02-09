// Given a binary search tree, you need to compute the length of the diameter of the tree. 
// The diameter of a binary tree is the length of thelongestpath between any two nodes in a tree. 
// This path may or may not pass through the root.
//You'll be given a pointer to the root node of a binary tree.
// The diameter of a tree is the number of nodes on the longest path between any two nodes in the tree.
//input:
// 10
// 67
// 99
// 100
// 36
// 78
// 21
// 82
// 98
// 33
// 45
// output:
// 8
let ans = Number.MIN_VALUE;
function diameterOfTree(root) {
    if(root === null){
        return 0
    }
   let height = maxDepth(root);
   return ans;
}

function maxDepth(root) {
    
    if(root === null){
        return 0
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    ans = Math.max(ans, 1+left+right);
    return 1 + Math.max(left, right)
}





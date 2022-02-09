// Given a binary search tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note-A leaf is a node with no children.


// Input:

function maxDepth(root) {
    if(root === null){
        return 0
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1
    
}
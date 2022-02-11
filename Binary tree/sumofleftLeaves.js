//Given a binary seach tree, find the sum of all left leaves in the tree.
//Example:
//    3
//   / \
//  9  20
//    /  \
//   15   7
//The sum of all left leaves is 24.

function sumOfLeftLeaves(root) {
    if(root === null){
        return 0;
    }
    let sum = 0;
    let queue = [root];
    while(queue.length > 0){
        let node = queue.shift();
        if(node.left !== null){
            if(node.left.left === null && node.left.right === null){
                sum += node.left.val;
            }
            queue.push(node.left);
        }
        if(node.right !== null){
            queue.push(node.right);
        }
    }
    return sum;
}
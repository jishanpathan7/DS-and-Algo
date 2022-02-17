//you are given the root of a binary tree where each nodes has a value of 0 and 1.
//Each root-to-leaf path represents a binary number starting with the most significant bit.
//For example, the root-to-leaf path 0->1->1->0->1 represents the binary number 01101 in binary, which is 13.
//for all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
//Return the sum of these numbers.
//Input:
//    1
//  /   \
// 0     1
//  \   /
//   1 0
//Output:
//13

const sumRootToLeaf = (root) => {
    let sum = 0;
    
    const helper = (node, binary) => {
        if(!node) return;
        
        if(!node.left && !node.right) {
        sum += parseInt(binary, 2);
        return;
        }
        
        helper(node.left, binary + node.left.val);
        helper(node.right, binary + node.right.val);
    }
    
    helper(root, '');
    
    return sum;
    }
    
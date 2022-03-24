// Given aBinaryTreeand aninteger k. Print all nodes that are at distance k from the root (root is considered at distance 0 from itself).

// You'll be given a pointer to the root node and the integer k, You have to complete the function and push the data of all the nodes which are at k distance from the root into the given array.


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
//complete the function below and use the array below
//to track the nodes at distance k from the root
let result = [];
function printKDistance(root, k) {
    if (root === null) return;
    if (k === 0) {
        result.push(root.data);
    }
    printKDistance(root.left, k - 1);
    printKDistance(root.right, k - 1);
    
}

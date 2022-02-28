//given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
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
// [10, 67, 99, 100, 36, 78, 21, 82, 98, 33, 45]
const levelOrderTraversal = (root) => {
    if(root === null){
        return [];
    }
    let result = [];
    let queue = [];
    queue.push(root);
    while(queue.length > 0){
        let size = queue.length;
        let temp = [];
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            temp.push(node.val);
            if(node.left !== null){
                queue.push(node.left);
            }
            if(node.right !== null){
                queue.push(node.right);
            }
        }
        result.push(temp);
    }
    return result;
}
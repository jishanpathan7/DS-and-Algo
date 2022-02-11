//given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
//you have to complete the function. you will be given a pointer to the root of the tree.
//the values will be separated by a space.
//sample input:
//5
//5
//6
//4
//7
//2
//output:
//5
//4
//2

function righrSideView(root) {
    let result = [];
    if(root === null){
        return result;
    }
    let queue = [root];
    while(queue.length > 0){
        let size = queue.length;
        let temp = [];
        for(let i = 0; i < size; i++){
            let node = queue.shift();
            if(node.left !== null){
                temp.push(node.left);
            }
            if(node.right !== null){
                temp.push(node.right);
            }
        }
        result.push(node.val);
        queue = temp;
    }
    return result;
}
function newNode(data)
{
    let temp = new Node(data);
    return temp;
}
class Node {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
console.log(righrSideView(new TreeNode(1)));
//given a binary tree , convert it into its mirror image. you will be given a pointer to the root node.
//you just have to print the tree in its mirror image.
//input:
//this is a function problem. you don't need to read input or print anything.
//you just have to complete the function.
//output:
//you have to print the tree in its mirror image.

const mirror = (root) => {
    if(root === null) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    mirror(root.left);
    mirror(root.right);
}

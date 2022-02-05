//you are given a pointer/reference to the node which is to be deleted from the linked list of N nodes. The task is to delete the node. 
//pointer/reference to the head is not given.
//note: no head reference is given.
//You only need tocompletethe functiondeleteNodethat takes the reference to thenode that needs to be deleted. 
//The printing is doneautomatically by thedriver code.
//Input Format
//the first line of input contains an integer N, denoting the number of nodes in the linked list.
//next t lines contains the nodes of the linked list.
//the last line contains an integer M, denoting the node that needs to be deleted.
//sample input:
//3
//1
//2
//3
//2
//sample output:
//1 3
//Explanation:
//The given linked list is 1->2->3.
//The node with value 2 is deleted.
//The new linked list is 1->3.


function deleteNode(node) {
    node.data = node.next.data;
    node.next = node.next.next;
}



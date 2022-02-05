//given head, the head node of a linked list, determine if the linked list has a cycle in it.
//A cycle is a path that starts at a node and ends at the same node.
//For example, the following linked list contains a cycle, so it should return true:
//1->2->3->4->5->1
//For example, the following linked list does not contain a cycle, so it should return false:
//1->2->3->4->5
//Input Format
//You have to complete the method hasCycle in the editor below. It has one parameter:
//A reference to the head of the linked list.
//Output Format
//Return true if there is a cycle in the linked list, return false otherwise.
//Constraints
//1 <= T <= 100
//1 <= N <= 100
//Sample Input
//3
//1
//2
//1
//Sample Output
//true


function hasCycle(head) {
    if (head === null) {
        return false;
    }
    var temp = head;
    var arr = [];
    while (temp.next !== null) {
        if (arr.indexOf(temp.data) !== -1) {
            return true;
        }
        arr.push(temp.data);
        temp = temp.next;
    
}
    return false;
}

// Given a sorted linked list, delete all duplicates such that each element appears only once.
// No need to take any input, justcomplete the functionbelow, and return the head of the updated linked list.
// For example,
// Given 1->1->2,
// return 1->2.
// Given 1->1->2->3->3,
// return 1->2->3.
//output:
//Complete the function below.

function deleteDuplicates(head) {
    if (head === null) {
        return head;
    }
    var temp = head;
    while (temp.next !== null) {
        if (temp.data === temp.next.data) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return head;
}
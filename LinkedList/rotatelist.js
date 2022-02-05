//given a linked list, rotate the list to the right by k places, where k is non-negative.
//For example:
//Given 1->2->3 and k = 2,
//return 2->3->1.
//Given 1->2->3->4 and k = 3,
//return 3->4->1->2.
//output:
//complete the function rotateRight in the editor below. 
//It should return a reference to the head of your finished list.


const LinkedListNode = class{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function rotateRight(head, k) {
    if (head === null) {
        return head;
    }
    var temp = head;
    var count = 0;
    while (temp.next !== null) {
        temp = temp.next;
        count++;
    }
    temp.next = head;
    var i = 0;
    while (i < count - k) {
        head = head.next;
        i++;
    }
    var newHead = head.next;
    head.next = null;
    return newHead;
}
console.log(rotateRight([1, 2, 3, 4, 5], 2));
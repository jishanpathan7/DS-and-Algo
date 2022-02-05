//given a pointer to the head of a linked list, insert a new node before the head.
//return the new head of the linked list.

const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//Complete the function below.
function insertNodeAtHead(head, data) {
    const newNode = new LinkedListNode(data);
    newNode.next = head;
    return newNode
}
console.log(insertNodeAtHead(null, 1).value)
    
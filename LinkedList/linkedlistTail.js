//you are given a pointer/reference to the head of a linked list and an integer to add to the list.
//create a new node with the given integer, and insert this node at the tail of the linked list.
//return the new head of the linked list formed after inserting the new node.
//the head pointer given may be null meaning that the initial list is empty.
//Input Format
//You have to complete the Node* insertNodeAtTail(LinkdelistNode head, int data) method which takes two arguments - the head of the linked list and the integer to insert. You should NOT read any input from stdin/console.
//The input is handled by code and is as follows:
//The first line contains an integer , denoting the elements in the linked list.
//The next  lines contain an integer each, denoting the element to be inserted at the tail of the list. 

const LinkedListNode = class {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//Complete the function below.
//insert node at tail
function insertNodeAtTail(head, data) {
    let current = head;
    let newNode = new LinkedListNode(data);
    if(head === null){
        return newNode
    }
    while(current.next !== null){
        current = current.next
    }
    current.next = newNode;
    return head
}
console.log(insertNodeAtTail(null, 1).value)


//insert node at specified position.

function insertNodeAtPosition(head, data, position) {
    let current = head;
    let newNode = new LinkedListNode(data);
    if(head === null){
        return newNode
    }
    if(position === 0){
        newNode.next = head;
        return newNode
    }
    for(let i = 0; i < position-1; i++){
        current = current.next
    }
    newNode.next = current.next;
    current.next = newNode;
    return head
}


//Nth node from the end
//Given a linked list consisting of nodesand given a number N. 
//The task is to find the nth nodefrom the end of the linked list.

function nthNodeFromEnd(head, n) {
    let current = head;
    let count = 0;
    while(current !== null){
        count++;
        current = current.next
    }
    if(count < n){
        return null
    }
    current = head;
    for(let i = 0; i < count-n; i++){
        current = current.next
    }
    return current
}

//Given a linked list and a number N, reverse the nodes of the linked list after the Nth node.
//Input Format
//You have to complete the Node* reverseNodesInKGroups(LinkedListNode head, int k) method which takes two arguments - the head of the linked list and the integer k. You should NOT read any input from stdin/console.
//The input is handled by code and is as follows:
//The first line contains an integer , denoting the elements in the linked list.
//The next  lines contain an integer each, denoting the element to be inserted at the tail of the list.

function reverseNodesInKGroups(head, k) {
    let current = head;
    let prev = null;
    let next = null;
    let count = 0;
    while(current !== null){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        count++;
        if(count === k){
            count = 0;
            current = next
        }
    }
    return prev
}

//delete node at given position
function deleteNode(head, position) {
    let current = head;
    if(position === 0){
        return current.next
    }
    for(let i = 0; i < position-1; i++){
        current = current.next
    }
    current.next = current.next.next;
    return head
}

//middel of linked list
function middleOfLinkedList(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

//given an two unsorted linked lists, merge them such that the resulting linked list is also sorted.
//also remove duplicates from the merged list.


// function mergeTwoLists(l1, l2) {
//     if (l1 === null) {
//         return l2;
//     }
//     if (l2 === null) {
//         return l1;
//     }
//     if (l1.data < l2.data) {
//         l1.next = mergeTwoLists(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoLists(l1, l2.next);
//         return l2;
//     }
// }
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insert(data) {
        const node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    removeDuplicates() {
        let current = this.head;
        while (current.next) {
            if (current.data === current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
    }
    mergeTwoLists(l1, l2) {
        if (l1 === null) {
            return l2;
        }
        if (l2 === null) {
            return l1;
        }
        if (l1.data < l2.data) {
            l1.next = this.mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = this.mergeTwoLists(l1, l2.next);
            return l2;
        }
    }
}



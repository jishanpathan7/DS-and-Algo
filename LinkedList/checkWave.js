

const LinkedListNode = class {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var checkWave = function(head) {
    let current = head;
    let prev = null;
    let flag = true;
    while (current != null && current.next != null) {
        if (flag) {
            if (current.data != current.next.data) {
                return false;
            }
            current = current.next.next;
            prev = current;
            flag = false;
        } else {
            if (current.data != prev.data) {
                return false;
            }
            current = current.next;
            prev = current;
            flag = true;
        }
    }
    return true;
}
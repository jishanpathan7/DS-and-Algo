

function mergerTwoList(list1, list2) {
    var list3 = new LinkedList();
    var current1 = list1.head;
    var current2 = list2.head;
    while (current1 != null && current2 != null) {
        if (current1.data < current2.data) {
            list3.add(current1.data);
            current1 = current1.next;
        } else {
            list3.add(current2.data);
            current2 = current2.next;
        }
    }
    while (current1 != null) {
        list3.add(current1.data);
        current1 = current1.next;
    }
    while (current2 != null) {
        list3.add(current2.data);
        current2 = current2.next;
    }
    return list3;
}
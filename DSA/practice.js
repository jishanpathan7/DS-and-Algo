 function mergeLists(list1, list2) {
     if(list1=== null) {
         return list2;
     }
        if(list2 === null) {
            return list1;
        }
        if(list1.data < list2.data) {
            list1.next = mergeLists(list1.next, list2);
            return list1;
        }
        else {
            list2.next = mergeLists(list1, list2.next);
            return list2;
        }
 }
 
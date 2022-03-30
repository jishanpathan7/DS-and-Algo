// Given head which is a reference node to a singly-linked list. 
// The value of each node in the linked list is either 0 or 1. 
// The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

 

function  getdecimalValue(head) {
    var current = head;
    var decimalValue = 0;
    var power = 0;
    while (current != null) {
        decimalValue += current.data * Math.pow(2, power);
        power++;
        current = current.next;
    }
    return decimalValue;
}
console.log(getdecimalValue(head));
//given a single list , determine if it is a palindrome.
//No need to take any input, You'll be given the pointer to the head of the linked list,
//Complete the function belowand return true if it's a palindrome and false if otherwise.
//Note: Try to solve this without allocating extra space for another linked list.
//Input Format
//You will be given a pointer/reference to the head of the linked list.
//Output Format
//Return true if it's a palindrome and false if otherwise.
//Constraints
//1 <= N <= 1000
//1 <= list[i] <= 1000
//Sample Input
//3
//1
//2
//1
//Sample Output
//true
//Explanation
//The given linked list is 1->2->1.
//The linked list is a palindrome.
const LinkedListNode = class{
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

function isPalindrome(head) {
    if (head === null) {
        return true;
    }
    var temp = head;
    var arr = [];
    while (temp.next !== null) {
        arr.push(temp.data);
        temp = temp.next;
    }
    arr.push(temp.data);
    var i = 0;
    while (i < arr.length / 2) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
        i++;
    }
    return true;
}
console.log(isPalindrome(null,[1, 2, 1]));

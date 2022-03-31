//implementation of stack using queue.

class Stack {
    constructor() {
        //initialize queue
        this.queue = [];
    }
    push(item) {
        //push item to queue
        this.queue.push(item);
    }
    pop() {
        //if stack is empty
        if (this.queue.length === 0) {
            console.log("Stack is empty");
        }
        //pop an element from queue
        let x = this.queue[this.queue.length - 1];
        //remove the element from queue
        this.queue.pop();
        //return the element
        return x;
    }
  
    empty(){
        //check if stack is empty
        if(this.queue.length === 0){
            return true;
        }
        return false;
    }
}
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
console.log(s.pop());
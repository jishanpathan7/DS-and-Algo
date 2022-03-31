class Queue{
    constructor(){
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(item){
        //move all elements from stack1 to stack2
        while(this.stack1.length !==0){
            this.stack2.push(this.stack1.pop());
            //s1.pop();
        }
        //push item to stack1
        this.stack1.push(item);
        //move all elements from stack2 to stack1
        while(this.stack2.length !== 0){
            this.stack1.push(this.stack2.pop());
            //s2.pop();
        }
    }
    //dequeue an element from queue
    dequeue(){
        //if stack1 is empty
        if(this.stack1.length ===0){
            console.log("Queue is empty");
        }
       //Return the element at the front of queue
       let x =  this.stack1[this.stack1.length-1];
         this.stack1.pop();
        return x;
    }
}

let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());

// ** PUSHING PSEUDOCODE
// function should accept a value
// create a new node using the value passed to the function
// if there is no head property on the list, set the head & tail to be the newly created node
// otherwise set the next property on the tail to be the new node 
    // & set the tail property on the list to be the newly created node
// increment the length by 1
// return the linkedlist 

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("HELLO")
// list.push("GOODBYE")

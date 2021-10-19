// ** SHIFT
// removing a new node from the beginning of the linked list

// PSEUDOCODE
// if no nodes return undefined
// store the current head property in variable
// set head to be the current heads next (current.next) property
// decrement length by 1
// return the value of the node removed


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
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0){
            this.tail = null;
        }
        return currentHead;
        // let oldHead = this.head;
        // this.head = oldHead.next;
        // this.length--;
        // return oldHead;
    }
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
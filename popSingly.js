// ** POPPING
// removing a node from the end of the linked list
// to remove tail have to assign new tail 
// have to start from beginning of list and go through to find second to last node

//PSEUDOCODE
// if there are no nodes in the list, return undefined
// loop through the list until you reach tail
// set the next property of the second to last node to be null
// set the tail to be the 2nd to last node
// decrement the length of the list by 1
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
}

let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")

    // traverse(){
    //     let current = this.head;
    //     while(current){
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
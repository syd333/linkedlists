// ** LINKED LIST
// data structure that contains a head, tail, and length property
// linked lists consist of nodes and each node has a value and a pointer to another node or null
// no index 
// each element is a node and it references the next node unless its the end (references null)


// stores a piece of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")


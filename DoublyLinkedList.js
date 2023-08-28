class Node{
    constructor(value, next=null, prev=null){
        this.value = value;
        this.next = next;
        this.prev = prev;

    }
}

class DoublyLL{
    constructor(value){
        let node= new Node(value)
        // console.log(node)
        this.head = this.tail = node;
        this.length = 1
    }

    append(value){
        let node = new Node(value);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
         
        // this.tail.next= node;
        // this.tail = node;
        // node.
    }

    prepend(value){
        let newNode = new Node(value); 
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.length++

    }
}



let list3 = new DoublyLL(10)
// console.log(list3)

class Node {
    constructor(value, next = null){
        this.value= value;
        this.next = next;
    }
}

class LinkedList {
    constructor(data){
        let node = new Node(data); 
        this.head = this.tail= node;
        this.length = 1;
    }
    insert(value){
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++
    }
}

let list = new LinkedList(10)
// console.log(list)
list.insert(30)
list.insert(50)
console.log(list)
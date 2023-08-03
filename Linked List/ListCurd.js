class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedListCurd {
    constructor(data){
        let node = new Node(data);
        this.head = this.tail = node;
        this.length = 1;
    }

    append(value){
        let node = new Node(value);
        this.tail.next= node;
        this.tail = node;
        this.length++;
    }
    prepend(value){
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;

    }
   
    appendAtPosition(value, n){
        if(n==1){
            this.prepend(value);
            return
        }
        if(n==this.length+1){
            this.append(value)
            return
        }
        let node = new Node(value);
        let prevNode = this.findNode(n-1);
        let temp= prevNode.next;
        prevNode.next = node;
        node.next=temp;
        this.length++
    }
    findNode(n){
        let data = this.head;
        let count=0;
        while(true){
            count++;
            if(count==n){
                break
            }else{
                data = data.next;
            }
        }
        return data;
    }
    print(){
        let data= this.head;
        while(data){
            
            console.log(data.value)
            data = data.next;
        }
        
    }
    update(value, n){
        let node = this.findNode(n).value= value;

    }
    delete( n){
        let prevNode = this.findNode(n-1);
        prevNode.next = prevNode.next.next;
        this.length--;
    }
    
}


let list2 = new LinkedListCurd(10)
// console.log(list)
list2.append(30)
list2.prepend(50)
list2.appendAtPosition(100, 2)
list2.update(300, 2)
// list2.delete(2)
console.log(list2)
list2.print()
class ListNode {
    constructor(val, next=null){
        this.val = val; 
        this.next = next;
    }
}


function arrToLL(arr){
    let node = new ListNode(0);
    let current = node;
    for(let i=0; i<arr.length; i++){
        let newNode = new ListNode(arr[i]);
        node.next = newNode;
        node = node.next; 
    }
    return current.next;
}

function removeNthFromEnd(head, n){
let headOfList = new ListNode(0);
  let current = headOfList;
  let count=0;
 let length = getLength(head)
  while(head!=null){
    count++;
    if(count==length-n+1){
        head = head.next;
    }else{
        let newNode = new ListNode(head.val);
        head = head.next;
        headOfList.next = newNode;
        headOfList = headOfList.next;  
    }

  }
  return current.next;
}

function lLToArr(list){
    let arr = [];
   
    let current = list;
  
    while (current !== null) {
      arr.push(current.val);
      current = current.next;
    }
  
    return arr;

}

function getLength(head){
    let length = 0;
    while(head!=null){
        length++;
        head=head.next;
    }
    return length;
}

const result1 = arrToLL([1,2,3,4,5]);
const result2 = arrToLL([3,4,5]);

const result = addTwoNumbers(result1, result2)
const r = lLToArr(result);
console.log(result1)
console.log(result2)
console.log(result)
console.log(r)
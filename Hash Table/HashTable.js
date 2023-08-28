class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        
    }
    hashFunction(value){
        let valueToString = value+'';
        let sum=0;
        for(let i=0; i<valueToString.length; i++){
            sum+=valueToString.charCodeAt(i)
        }
        return sum%this.size;
    }
    set(value){
        let index = this.hashFunction(value);
        let linearArr = this.table[index]
        if(!linearArr){
            linearArr= [value]
            
        }else{
            linearArr.push(value)
        }
        this.table[index]= linearArr;
        
        
    }
    get(value){
        let index = this.hashFunction(value);
        let linearArr = this.table[index]
        if(!linearArr){
            return `${value} is not found`
        }
        for(let i =0; i<linearArr.length; i++){
            if(value  == linearArr[i]){
                return `${value} is found`
            }
        }
        return `${value} is not found`
    }

}

const hashT = new HashTable(5)
hashT.set(10)
hashT.set(20)
hashT.set(25)
hashT.set(30)
hashT.set("ABC")

console.log(hashT.get(31));
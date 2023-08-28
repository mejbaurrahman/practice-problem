class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
        
    }
    hashFunction(value){

    }
    set(value){
        let index = this.hashFunction(value)
    }

}

const hashT = new HashTable(5)
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if(pattern.length !== words.length){
        return false
    }

    let patternMap = new Map();
    let wordMap = new Map();

    for(let i=0;i<pattern.length; i++){
        let char = pattern[i];
        let word = words[i];
        if(!patternMap.has(char) && !wordMap.has(word)){
            patternMap.set(char, word)
            wordMap.set(word, char)
            
        }else if (patternMap.get(char) !== word || wordMap.get(word) !== char) {
            return false;
        }
    }

    return true;
};

const result = wordPattern("abaa", "dog cat cat dog");
console.log(result)


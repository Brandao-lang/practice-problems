var wordPattern = function(pattern, s) {
    let usedWords = []
    let stringArr = s.split(' ')
    let compare = []
    let collection = {}
    
    if (pattern.length === 1 && s.length === 1) {
        return true
    }
    
    if (pattern === s) {
        return false
    }
    
    for (let i = 0; i < stringArr.length; i++) {
        if(collection[pattern[i]]) {
            continue
        }
        
        if(usedWords.includes(stringArr[i])) {
            continue
        }
        
        collection[pattern[i]] = stringArr[i]
        usedWords.push(stringArr[i])
    }
    
    let keys = Object.keys(collection)
    let noDupes = [...new Set(pattern)]
    
    if (keys.length != noDupes.length) {
        return false
    }
    
   for (let i = 0; i < stringArr.length; i++) {
        compare.push(collection[pattern[i]])
    }
    
    if (JSON.stringify(stringArr) === JSON.stringify(compare)) {
        return true
    }
    
    return false
};
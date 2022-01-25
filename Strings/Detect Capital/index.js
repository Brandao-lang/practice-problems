// We define the usage of capitals in a word to be right when one of the following cases holds:

// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Given a string word, return true if the usage of capitals in it is right.


var detectCapitalUse = function(word) {
    let upper = word.toUpperCase()
    let lower = word.toLowerCase()
    
    if (upper === word || lower === word) {
        return true
    }
    
    if (word[0].toUpperCase() === word[0]) {
        let restOfWord = word.slice(1)
        
        if (restOfWord === restOfWord.toLowerCase()) {
            return true
        }
    }
    
    return false
};

console.log(detectCapitalUse('Google'))




// Solution in PHP
function detectCapitalUse($word) {
    $upper = strtoupper($word);
    $lower = strtolower($word);
    
    if ($upper === $word || $lower === $word) {
        return true;
    }
    
    if (strtoupper($word[0]) === $word[0]) {
        $restOfWord = substr($word, 1);
        
        if ($restOfWord === strtolower($restOfWord)) {
            return true;
        }
    }
    
    return false;
}

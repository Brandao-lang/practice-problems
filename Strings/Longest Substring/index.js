var lengthOfLongestSubstring = function(s) {
    let substrings = []
    if (s.length === 1) {
        return 1
    }
    
    for (let i = 0; i < s.length; i++) {
        let string = s[i]
      for (let j = i+1; j < s.length; j++) {
            if (string.includes(s[j])) {
                substrings.push(string)
                break;
            }
            string += s[j]
            substrings.push(string)
        } 
      }
     
    if (substrings.length === 0) {
        return 0
    }
    
    var longest = substrings.reduce((a, b) => {
            return a.length > b.length ? a : b
        })
    
    return longest.length
};

console.log(lengthOfLongestSubstring("dvdf"))
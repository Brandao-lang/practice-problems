var isPalindrome = function(x) {
    let numString = x.toString()
    let reverseString = ""
    
    for (let i = numString.length-1; i >= 0; i--) {
      reverseString += numString[i]
    }
    
    if (numString === reverseString) {
      return true
    }

    return false
    
    
};

 var isValid = function(s) {
    // check if string is unbalanced, if it is then the paranthesis are incorrect by default
    if (s.length % 2 != 0) {
        return false
    }
    
    
    let stack = []
    let table = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        
        // Check if current element is either '(', '{', or '['
        if (table[c]) {
            // if it is, push the corresponding table value of that symbol to the stack array. e.g if s[i] is '(' then ')' gets pushed to the array 
            stack.push(table[c])
        
        // if the current element is neither '(', '{', or '[', then check if s[i] is the same as the last value in the stack array. e.g if s[i] is ')', then check if the last element in the stack array is ')'
        } else if (c != stack.pop()) {
            return false
        }
    }
    
    return true
};

console.log(isValid("(){[]}{}"))
var myAtoi = function(s) {
    // initial values
    let isNegative = false
    let ans = ""
    let firstInt = false
    
    for (let i = 0; i < s.length; i++) {
        // all edge case conditions
        if (s[i] === " " && !firstInt) {
            continue

        } else if (s[i] === "-" && firstInt) {
            break

        } else if (s[i] === "+" && firstInt) {
            break

        } else if (s[i] === "-" && parseInt(s[i+1])) {
            isNegative = true
            continue

        } else if (s[i] === "-" && s[i+1] === "0") {
            isNegative = true
            continue

        } else if (s[i] === "+" && parseInt(s[i+1])) {
            continue
            
        } else if (s[i] === "+" && s[i+1] === "0") {
            continue

        } else if (s[i] === "0" && isNaN(s[i+1]) && !firstInt) {
            return 0

        } else if (s[i] === "0" && s[i+1] === " " && !firstInt) {
            return 0

        } else if (s[i] === "0" && !firstInt) {
            continue

        }
        else if (!parseInt(s[i]) && s[i] != "0") {
            break

        } 
        
        // If all conditions are false we have reached the first integer of the string
        firstInt = true
        
        // concat the current index to the answer string
        ans += s[i]
    }
    
    // return 0 if nothing was added to the answer string 
    if (!ans) {
      return 0
    }

    // Check if the negative boolean has been set to true, multiply by -1 if yes
    if (isNegative) {
        ans *= -1
    } 
    
    // check if the answer is within a 32 bit signed integer range, change the value accordingly if necessary 
    if (ans < Math.pow(-2, 31)) {
        ans = Math.pow(-2, 31)
    } else if (ans > Math.pow(2, 31) - 1) {
        ans = Math.pow(2, 31) - 1
    }
    
    // return the answer
    return ans
};


// test cases //
console.log(myAtoi("with words  0040"))
console.log(myAtoi("00000-42a1234"))
console.log(myAtoi("-42a1234"))
console.log(myAtoi("-00022 with words"))
console.log(myAtoi("   +0 123"))
console.log(myAtoi("-13-8"))
console.log(myAtoi("-1"))
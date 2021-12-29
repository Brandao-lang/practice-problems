var reverse = function(x) {
    let isNegative = false

    if (x < 0) {
        isNegative = true
    }

    x = x.toString()
    let reversed = ""
    
    for (let i = x.length-1; i >= 0; i--) {
        reversed += x[i]
    }
    
    if (reversed[0] === "0") {
        for (let i = 0; i < reversed.length; i++) {
            if (reversed[i] === "0") {
                reversed.slice(i, 1)

            } else break
        } 
    }
    
    let num = parseInt(reversed)
    
    if (num < Math.pow(2, -31) || num > Math.pow(2, 31) - 1) {
        return 0

    } else if (isNegative) {
        return num * -1

    } else return num
};

console.log(reverse(-22300))
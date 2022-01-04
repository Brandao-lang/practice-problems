var bitwiseComplement = function(n) {
    if (n === 0) {
        return 1
    }
    
    if (n === 1) {
        return 0
    }
    
    let toBinary = (n >>> 0).toString(2)
    toBinary = toBinary.toString()
    
    let reversed = ""
    
    for (let i = 0; i < toBinary.length; i++) {
        if(toBinary[i] === "1") {
            reversed += "0"
        } else {
            reversed += "1"
        }
    }
    
    let sum = 0
    let exponent = 0
    
    for (let i = reversed.length-1; i > 0; i--) {
        let add = parseInt(reversed[i]) * Math.pow(2, exponent)
        sum += add
        exponent++
    }
    
    return sum
    
};
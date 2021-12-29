var romanToInt = function(s) {
    let sum = 0
    let table = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    for (let i = 0; i < s.length; i++) {
        if ((table[s[i]] === table[s[i+1]]) || i === s.length-1) {
            sum += table[s[i]]
        } else if (table[s[i]] > table[s[i+1]]) {
            sum += table[s[i]]
        } else {
            let num = table[s[i+1]] - table[s[i]]
            sum += num
            i++
        }
    }

  return sum
};

console.log(romanToInt("LVIII"))
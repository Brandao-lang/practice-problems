var intToRoman = (num) => {
    const table = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let convert = ""

    while (num > 0) {
        for (roman in table) {
            if (num - table[roman] >= 0) {
                num -= table[roman]
                convert += roman
                break
            }
        }
    }

    return convert

}

console.log(intToRoman(24))
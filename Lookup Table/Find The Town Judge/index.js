var findJudge = function(n, trust) {
    let trusts = {}
    
     if (trust.length === 0 && n != 1) {
        return -1
    }
    
    if (n === 1) {
        return 1
    }
    
    for (let i = 0; i < trust.length; i++) {
        if (!trusts[trust[i][0]]) {
            trusts[trust[i][0]] = [trust[i][1]]
        } else {
            trusts[trust[i][0]].push(trust[i][1])
        }
    }
    
    let isJudge = true
    let trustCount = 0

    for (let j = 1; j <= n; j++) {
        isJudge = true

        if (!trusts.hasOwnProperty(j)) {
           for (var person in trusts) {
              if (trusts[person].includes(j) === false) {
                    isJudge = false
                    break
                }
                trustCount++  
            }
            if (trustCount === n-1 && isJudge) return j
            else continue
        } 
    }
    
    return -1
};
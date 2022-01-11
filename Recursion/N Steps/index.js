let result = new Map()

var climbStairs = function(n) {
    let step = result.get(n)
    
    if (step) {
        return step
    }
    
    if (n === 0 || n === 1) {
        return 1
    }
    
    
    let a = climbStairs(n-1)
    let b = climbStairs(n-2)
    
    result.set(n, a+b)
    
    return a + b
}
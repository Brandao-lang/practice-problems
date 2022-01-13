// Without recursion

let count = 1
let num1 = 1
let num2 = 0
let sum = 0

const fib = (n) => {
    while (count < n) {
        console.log(sum)
        
        sum = num1 + num2
        num1 = num2
        num2 = sum

        count++

    }

    return sum
}


// console.log(fib(7))




// With recursion

const fibRecurse = (n) => {
    if (n <= 1) {
        return n
    }

   return fibRecurse(n - 1) + fibRecurse(n - 2)
}

console.log(fibRecurse(9))
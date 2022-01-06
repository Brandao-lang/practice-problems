var smallestRepunitDivByK = function(k) {
    let remainder = 1
    let answer_length = 1
    let remainders = new Map()

    // while remainder is not evenly divisble by k, continue this loop
    while(remainder % k != 0) {
      // initialize n from 1 to 11, and then from 11 to 111, then from 111 to 1111, etc..
      let n = remainder * 10 + 1

      // grab the remainder from n divided by k 
      remainder = n % k

      // increment the answer length by 1, the answer to this problem will be the same amount of times this loop runs
      answer_length += 1

      // This is what prevents the loop from running infinitely. If we have seen the same remainder before, we must return -1 since we are now in an infinite pattern, otherwise add the remainder to the remainders Mao which can only hold uniqe values
      if (remainders.has(remainder)) {
        return -1
      } else remainders.set(remainder, 1)
    }


    // we exited the loop since remainder / k returned 0
    return answer_length
};


// test case
console.log(smallestRepunitDivByK(19))
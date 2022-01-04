var areNumbersAscending = function(s) {
    let num1 = "0"
    let num2 = ""
 
    for (let i = 0; i < s.length; i++) {
      if (!parseInt(s[i]) && s[i] != "0") {
        continue
      }
 
      while (parseInt(s[i]) || s[i] === "0") {
        num2 += s[i]
        i++
      }
 
      num1 = parseInt(num1)
      num2 = parseInt(num2)
 
      if (num1 > num2 || num1 === num2) {
        return false
      } 
 
      num1 = num2
      num2 = ""
 
    }
 
    return true
 
 };

 // alternate solution 

 var areNumbersAscending = function(s) {
  const arr = s.split(" ")
  const nums = []
  
  for (let i = 0; i < arr.length; i++) {
      if (parseInt(arr[i]) || arr[i] === "0") {
          nums.push(parseInt(arr[i]))
      }
  }
   
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j+1] || nums[j] === nums[j+1]) {
          return false
      } 
  }
   
  return true 

};
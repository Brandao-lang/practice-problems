var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
    let count = 1
        for (let j = 0; j <= nums.length; j++) {
          let sum = nums[i] + nums[i+count]
          if (sum === target) {
              let answer = [i, (i+count)]
              return answer
            }
          count++
      }
    }

    return 'not found'
  };
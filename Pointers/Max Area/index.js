
var maxArea = function(height) {
    let result = 0
    
    // initialize two pointers for the beginning of the array, left, and the end of the array, right.
    let left = 0
    let right = height.length-1
    
    while(left < right) {
        // between the two pointers, grab the smaller side by running math.min against left and right
        let smallestSide = Math.min(height[left], height[right])
        
        // calculate the area by multiplying the smallest side with the difference between the right and left pointer
        let area = (right - left) * smallestSide
        
        // if the area is bigger than the previous result, assign result to area
        if (area > result) {
            result = area
        }
        
        // if the left side is smaller than the right then advance the left pointer forward, otherwise advnace the right pointer forward
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    
    // result holds the biggest area calculated during the loop. return result.
    return result
};